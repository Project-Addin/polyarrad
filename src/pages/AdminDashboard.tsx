import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { LogOut, Mail, Building2, Phone, Clock, Eye, ChevronDown, ChevronUp, Inbox, Settings, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
    <div className="min-h-screen bg-[#f4f6f9]">
      {/* Header */}
      <header className="border-b border-border/60 bg-white sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="text-foreground font-heading font-bold text-base">ARRAD</h1>
            <span className="text-border">|</span>
            <span className="text-muted-foreground text-sm">Inquiry Dashboard</span>
            {unreadCount > 0 && (
              <span className="bg-primary/10 text-primary text-xs font-semibold px-2 py-0.5 rounded-full">
                {unreadCount} baru
              </span>
            )}
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground gap-2">
                <User className="w-4 h-4" /> Akun
                <ChevronDown className="w-3 h-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem onClick={() => navigate("/admin/settings")} className="gap-2 cursor-pointer">
                <Settings className="w-4 h-4" /> Pengaturan Akun
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout} className="gap-2 cursor-pointer text-red-600 focus:text-red-600">
                <LogOut className="w-4 h-4" /> Keluar
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl border border-border/60 p-5">
            <p className="text-xs font-medium text-muted-foreground mb-1">Total Pesan</p>
            <p className="text-2xl font-bold text-foreground">{inquiries.length}</p>
          </div>
          <div className="bg-white rounded-xl border border-border/60 p-5">
            <p className="text-xs font-medium text-muted-foreground mb-1">Belum Dibaca</p>
            <p className="text-2xl font-bold text-primary">{unreadCount}</p>
          </div>
          <div className="bg-white rounded-xl border border-border/60 p-5">
            <p className="text-xs font-medium text-muted-foreground mb-1">Sudah Dibaca</p>
            <p className="text-2xl font-bold text-foreground">{inquiries.length - unreadCount}</p>
          </div>
        </div>

        <h2 className="text-foreground text-lg font-bold font-heading mb-4">Pesan Masuk</h2>

        {loading ? (
          <div className="text-muted-foreground text-sm py-20 text-center">Memuat...</div>
        ) : inquiries.length === 0 ? (
          <div className="bg-white rounded-xl border border-border/60 py-16 text-center">
            <Inbox className="w-10 h-10 text-muted-foreground/30 mx-auto mb-3" />
            <p className="text-muted-foreground text-sm">Belum ada pesan masuk.</p>
          </div>
        ) : (
          <div className="space-y-2.5">
            {inquiries.map((inq) => (
              <div
                key={inq.id}
                className={`bg-white border rounded-xl transition-all duration-200 ${
                  inq.is_read
                    ? "border-border/60"
                    : "border-primary/25 ring-1 ring-primary/10"
                }`}
              >
                <button
                  onClick={() => toggleExpand(inq.id)}
                  className="w-full text-left px-5 py-3.5 flex items-center gap-4"
                >
                  {!inq.is_read && <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <span className="text-foreground font-medium text-sm">{inq.full_name}</span>
                      <span className="text-muted-foreground/30">·</span>
                      <span className="text-muted-foreground text-xs flex items-center gap-1">
                        <Building2 className="w-3 h-3" /> {inq.company_name}
                      </span>
                    </div>
                    {inq.subject && <p className="text-muted-foreground text-sm mt-0.5 truncate">{inq.subject}</p>}
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span className="text-muted-foreground/60 text-xs flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {formatDate(inq.created_at)}
                    </span>
                    {expandedId === inq.id ? (
                      <ChevronUp className="w-4 h-4 text-muted-foreground/40" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-muted-foreground/40" />
                    )}
                  </div>
                </button>

                {expandedId === inq.id && (
                  <div className="px-5 pb-5 pt-2 border-t border-border/40">
                    <div className="flex flex-wrap gap-4 mb-3">
                      <span className="text-muted-foreground text-xs flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5" /> {inq.email}
                      </span>
                      {inq.phone && (
                        <span className="text-muted-foreground text-xs flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5" /> {inq.phone}
                        </span>
                      )}
                    </div>
                    <p className="text-foreground/70 text-sm leading-relaxed whitespace-pre-wrap bg-[#f8f9fb] rounded-lg p-4 border border-border/30">
                      {inq.message}
                    </p>
                    {inq.is_read && (
                      <div className="flex items-center gap-1.5 mt-3 text-muted-foreground/50 text-xs">
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
