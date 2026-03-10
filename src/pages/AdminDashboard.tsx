import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { LogOut, Mail, Building2, Phone, Clock, Eye, ChevronDown, ChevronUp } from "lucide-react";

interface Inquiry {
  id: string;
  full_name: string;
  company_name: string;
  email: string;
  phone: string | null;
  subject: string | null;
  message: string;
  created_at: string;
  is_read: boolean;
}

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    checkAuth();
    fetchInquiries();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) { navigate("/admin/login", { replace: true }); return; }

    const { data: isAdmin } = await supabase.rpc("has_role", { _user_id: session.user.id, _role: "admin" });
    if (!isAdmin) { await supabase.auth.signOut(); navigate("/admin/login", { replace: true }); }
  };

  const fetchInquiries = async () => {
    const { data } = await supabase
      .from("contact_inquiries")
      .select("*")
      .order("created_at", { ascending: false });
    if (data) setInquiries(data);
    setLoading(false);
  };

  const markAsRead = async (id: string) => {
    await supabase.from("contact_inquiries").update({ is_read: true }).eq("id", id);
    setInquiries((prev) => prev.map((i) => (i.id === id ? { ...i, is_read: true } : i)));
  };

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
    const inquiry = inquiries.find((i) => i.id === id);
    if (inquiry && !inquiry.is_read) markAsRead(id);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login", { replace: true });
  };

  const formatDate = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });
  };

  const unreadCount = inquiries.filter((i) => !i.is_read).length;

  return (
    <div className="min-h-screen bg-navy">
      {/* Header */}
      <header className="border-b border-white/[0.06] bg-navy-light/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-white font-heading font-bold text-lg">ARRAD</h1>
            <span className="text-white/20 text-xs">|</span>
            <span className="text-white/40 text-sm">Inquiry Dashboard</span>
            {unreadCount > 0 && (
              <span className="bg-ocean/20 text-ocean text-xs font-semibold px-2 py-0.5 rounded-full">
                {unreadCount} baru
              </span>
            )}
          </div>
          <Button variant="ghost" onClick={handleLogout} className="text-white/40 hover:text-white hover:bg-white/5 text-sm gap-2">
            <LogOut className="w-4 h-4" /> Keluar
          </Button>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 py-10">
        <div className="mb-8">
          <h2 className="text-white text-xl font-bold font-heading">Pesan Masuk</h2>
          <p className="text-white/30 text-sm mt-1">{inquiries.length} total pesan</p>
        </div>

        {loading ? (
          <div className="text-white/30 text-sm py-20 text-center">Memuat...</div>
        ) : inquiries.length === 0 ? (
          <div className="text-white/20 text-sm py-20 text-center border border-white/[0.04] rounded-2xl">
            Belum ada pesan masuk.
          </div>
        ) : (
          <div className="space-y-3">
            {inquiries.map((inq) => (
              <div
                key={inq.id}
                className={`border rounded-xl transition-all duration-200 ${
                  inq.is_read
                    ? "border-white/[0.04] bg-white/[0.01]"
                    : "border-ocean/20 bg-ocean/[0.03]"
                }`}
              >
                <button
                  onClick={() => toggleExpand(inq.id)}
                  className="w-full text-left px-5 py-4 flex items-center gap-4"
                >
                  {!inq.is_read && <div className="w-2 h-2 rounded-full bg-ocean flex-shrink-0" />}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="text-white font-medium text-sm">{inq.full_name}</span>
                      <span className="text-white/15">·</span>
                      <span className="text-white/30 text-xs flex items-center gap-1">
                        <Building2 className="w-3 h-3" /> {inq.company_name}
                      </span>
                    </div>
                    {inq.subject && <p className="text-white/40 text-sm mt-0.5 truncate">{inq.subject}</p>}
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span className="text-white/15 text-xs flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {formatDate(inq.created_at)}
                    </span>
                    {expandedId === inq.id ? (
                      <ChevronUp className="w-4 h-4 text-white/20" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-white/20" />
                    )}
                  </div>
                </button>

                {expandedId === inq.id && (
                  <div className="px-5 pb-5 pt-1 border-t border-white/[0.04]">
                    <div className="flex flex-wrap gap-4 mb-4">
                      <span className="text-white/30 text-xs flex items-center gap-1.5">
                        <Mail className="w-3 h-3" /> {inq.email}
                      </span>
                      {inq.phone && (
                        <span className="text-white/30 text-xs flex items-center gap-1.5">
                          <Phone className="w-3 h-3" /> {inq.phone}
                        </span>
                      )}
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed whitespace-pre-wrap">{inq.message}</p>
                    {inq.is_read && (
                      <div className="flex items-center gap-1.5 mt-4 text-white/15 text-xs">
                        <Eye className="w-3 h-3" /> Sudah dibaca
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
