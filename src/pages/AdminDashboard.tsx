import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import {
  LogOut, Mail, Building2, Phone, Clock, Eye, ChevronDown, ChevronUp,
  Inbox, Settings, User, Search, Filter,
} from "lucide-react";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem,
  DropdownMenuSeparator, DropdownMenuTrigger,
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

type FilterType = "all" | "unread" | "read";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [filter, setFilter] = useState<FilterType>("all");
  const [search, setSearch] = useState("");
  const [adminEmail, setAdminEmail] = useState("");

  useEffect(() => {
    checkAuth();
    fetchInquiries();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) { navigate("/admin/login", { replace: true }); return; }
    setAdminEmail(session.user.email || "");
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

  const filtered = inquiries.filter((inq) => {
    if (filter === "unread" && inq.is_read) return false;
    if (filter === "read" && !inq.is_read) return false;
    if (search) {
      const q = search.toLowerCase();
      return (
        inq.full_name.toLowerCase().includes(q) ||
        inq.company_name.toLowerCase().includes(q) ||
        inq.email.toLowerCase().includes(q) ||
        (inq.subject && inq.subject.toLowerCase().includes(q))
      );
    }
    return true;
  });

  const filterLabel: Record<FilterType, string> = { all: "Semua", unread: "Belum Dibaca", read: "Sudah Dibaca" };

  return (
    <div className="min-h-screen bg-[#f8f9fc]">
      {/* Header */}
      <header className="border-b border-[#e2e8f0] bg-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="text-[#0A1628] font-bold text-lg tracking-tight">ARRAD</h1>
            <span className="text-[#e2e8f0] text-lg font-light">|</span>
            <span className="text-[#64748b] text-sm font-medium">Admin Panel</span>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-2.5 hover:bg-[#f1f5f9] rounded-xl px-3 py-2 transition-colors">
                <div className="w-8 h-8 rounded-full bg-[#0A1628] flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <div className="text-left hidden sm:block">
                  <p className="text-sm font-medium text-[#334155] leading-none">Admin</p>
                  <p className="text-xs text-[#94a3b8] mt-0.5">{adminEmail}</p>
                </div>
                <ChevronDown className="w-3.5 h-3.5 text-[#94a3b8]" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-52 rounded-xl border-[#e2e8f0] shadow-lg shadow-black/[0.06]">
              <DropdownMenuItem onClick={() => navigate("/admin/settings")} className="gap-2.5 cursor-pointer rounded-lg py-2.5">
                <Settings className="w-4 h-4 text-[#64748b]" /> <span className="text-[#334155]">Pengaturan Akun</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-[#e2e8f0]" />
              <DropdownMenuItem onClick={handleLogout} className="gap-2.5 cursor-pointer rounded-lg py-2.5 text-red-600 focus:text-red-600">
                <LogOut className="w-4 h-4" /> Keluar
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {[
            { label: "Total Pesan", value: inquiries.length, color: "text-[#0A1628]" },
            { label: "Belum Dibaca", value: unreadCount, color: "text-[#1d4ed8]" },
            { label: "Sudah Dibaca", value: inquiries.length - unreadCount, color: "text-[#0A1628]" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl border border-[#e2e8f0] p-6 shadow-sm shadow-black/[0.02]">
              <p className="text-xs font-semibold text-[#94a3b8] uppercase tracking-wider mb-2">{stat.label}</p>
              <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-5">
          <h2 className="text-[#0A1628] text-lg font-bold tracking-tight">Pesan Masuk</h2>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="relative flex-1 sm:flex-initial">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8]" />
              <input
                type="text"
                placeholder="Cari nama, perusahaan..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full sm:w-56 h-10 pl-9 pr-4 text-sm bg-white border border-[#e2e8f0] rounded-xl placeholder:text-[#94a3b8] text-[#334155] focus:outline-none focus:ring-2 focus:ring-[#1d4ed8]/20 focus:border-[#1d4ed8] transition-all"
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-10 rounded-xl border-[#e2e8f0] text-[#64748b] hover:text-[#334155] hover:bg-[#f1f5f9] gap-2 text-sm px-4">
                  <Filter className="w-3.5 h-3.5" /> {filterLabel[filter]}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="rounded-xl border-[#e2e8f0] shadow-lg shadow-black/[0.06]">
                {(["all", "unread", "read"] as FilterType[]).map((f) => (
                  <DropdownMenuItem key={f} onClick={() => setFilter(f)} className={`cursor-pointer rounded-lg ${filter === f ? "font-semibold text-[#1d4ed8]" : "text-[#64748b]"}`}>
                    {filterLabel[f]}
                    {f === "unread" && unreadCount > 0 && (
                      <span className="ml-auto text-xs bg-[#1d4ed8]/10 text-[#1d4ed8] px-1.5 py-0.5 rounded-full font-semibold">{unreadCount}</span>
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Inquiry list */}
        {loading ? (
          <div className="text-[#94a3b8] text-sm py-24 text-center">Memuat data...</div>
        ) : filtered.length === 0 ? (
          <div className="bg-white rounded-2xl border border-[#e2e8f0] py-20 text-center shadow-sm shadow-black/[0.02]">
            <Inbox className="w-12 h-12 text-[#cbd5e1] mx-auto mb-4" />
            <p className="text-[#94a3b8] text-sm font-medium">
              {inquiries.length === 0 ? "Belum ada pesan masuk." : "Tidak ada pesan yang cocok."}
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {filtered.map((inq) => (
              <div
                key={inq.id}
                className={`bg-white border rounded-2xl transition-all duration-200 shadow-sm shadow-black/[0.02] ${
                  inq.is_read ? "border-[#e2e8f0]" : "border-[#1d4ed8]/20 ring-1 ring-[#1d4ed8]/5"
                }`}
              >
                <button
                  onClick={() => toggleExpand(inq.id)}
                  className="w-full text-left px-6 py-4 flex items-center gap-4 hover:bg-[#f8f9fc]/60 transition-colors rounded-2xl"
                >
                  {/* Unread dot */}
                  <div className="w-2.5 flex-shrink-0">
                    {!inq.is_read && <div className="w-2.5 h-2.5 rounded-full bg-[#1d4ed8]" />}
                  </div>

                  {/* Avatar */}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold ${
                    inq.is_read ? "bg-[#f1f5f9] text-[#64748b]" : "bg-[#1d4ed8]/10 text-[#1d4ed8]"
                  }`}>
                    {inq.full_name.charAt(0).toUpperCase()}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`text-sm ${inq.is_read ? "font-medium text-[#334155]" : "font-bold text-[#0A1628]"}`}>
                        {inq.full_name}
                      </span>
                      <span className="text-[#cbd5e1]">·</span>
                      <span className="text-[#94a3b8] text-xs flex items-center gap-1">
                        <Building2 className="w-3 h-3" /> {inq.company_name}
                      </span>
                    </div>
                    {inq.subject && (
                      <p className={`text-sm mt-0.5 truncate ${inq.is_read ? "text-[#94a3b8]" : "text-[#64748b]"}`}>{inq.subject}</p>
                    )}
                  </div>

                  {/* Meta */}
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span className="text-[#94a3b8] text-xs flex items-center gap-1 whitespace-nowrap">
                      <Clock className="w-3 h-3" /> {formatDate(inq.created_at)}
                    </span>
                    {expandedId === inq.id ? (
                      <ChevronUp className="w-4 h-4 text-[#94a3b8]" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#cbd5e1]" />
                    )}
                  </div>
                </button>

                {expandedId === inq.id && (
                  <div className="px-6 pb-6 pt-2 border-t border-[#e2e8f0] ml-[3.25rem]">
                    <div className="flex flex-wrap gap-5 mb-4">
                      <a href={`mailto:${inq.email}`} className="text-[#64748b] text-sm flex items-center gap-1.5 hover:text-[#1d4ed8] transition-colors">
                        <Mail className="w-4 h-4" /> {inq.email}
                      </a>
                      {inq.phone && (
                        <a href={`tel:${inq.phone}`} className="text-[#64748b] text-sm flex items-center gap-1.5 hover:text-[#1d4ed8] transition-colors">
                          <Phone className="w-4 h-4" /> {inq.phone}
                        </a>
                      )}
                    </div>
                    <div className="bg-[#f8f9fc] rounded-xl p-5 border border-[#e2e8f0]">
                      <p className="text-[#334155] text-sm leading-relaxed whitespace-pre-wrap">{inq.message}</p>
                    </div>
                    {inq.is_read && (
                      <div className="flex items-center gap-1.5 mt-4 text-[#94a3b8] text-xs">
                        <Eye className="w-3.5 h-3.5" /> Sudah dibaca
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
