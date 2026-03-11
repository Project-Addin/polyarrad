import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, User, Shield, Loader2, Check, Eye, EyeOff } from "lucide-react";

export default function AdminSettings() {
  const navigate = useNavigate();
  const { toast } = useToast();

  const [loading, setLoading] = useState(true);
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [savingProfile, setSavingProfile] = useState(false);
  const [profileSaved, setProfileSaved] = useState(false);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [savingPassword, setSavingPassword] = useState(false);
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) { navigate("/admin/login", { replace: true }); return; }

    const { data: isAdmin } = await supabase.rpc("has_role", { _user_id: session.user.id, _role: "admin" });
    if (!isAdmin) { await supabase.auth.signOut(); navigate("/admin/login", { replace: true }); return; }

    setEmail(session.user.email || "");

    const { data: profile } = await supabase
      .from("profiles")
      .select("display_name")
      .eq("id", session.user.id)
      .single();

    if (profile) setDisplayName(profile.display_name || "");
    setLoading(false);
  };

  const handleSaveProfile = async () => {
    setSavingProfile(true);
    setProfileSaved(false);
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return;

      // Update display name in profiles table
      const { error: profileError } = await supabase
        .from("profiles")
        .update({ display_name: displayName.trim() })
        .eq("id", session.user.id);

      if (profileError) throw profileError;

      // Update email if changed
      if (email !== session.user.email) {
        const { error: emailError } = await supabase.auth.updateUser({ email });
        if (emailError) throw emailError;
        toast({ title: "Email konfirmasi terkirim", description: "Periksa inbox email baru Anda untuk mengkonfirmasi perubahan." });
      }

      setProfileSaved(true);
      toast({ title: "Profil berhasil diperbarui" });
      setTimeout(() => setProfileSaved(false), 2000);
    } catch (err: any) {
      toast({ title: "Gagal menyimpan", description: err.message, variant: "destructive" });
    } finally {
      setSavingProfile(false);
    }
  };

  const handleUpdatePassword = async () => {
    if (newPassword.length < 8) {
      toast({ title: "Password terlalu pendek", description: "Minimal 8 karakter.", variant: "destructive" });
      return;
    }
    if (newPassword !== confirmPassword) {
      toast({ title: "Password tidak cocok", description: "Konfirmasi password harus sama.", variant: "destructive" });
      return;
    }

    setSavingPassword(true);
    try {
      // Verify current password by re-signing in
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.user.email) throw new Error("Sesi tidak valid");

      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: session.user.email,
        password: currentPassword,
      });
      if (signInError) throw new Error("Password saat ini salah");

      const { error } = await supabase.auth.updateUser({ password: newPassword });
      if (error) throw error;

      toast({ title: "Password berhasil diperbarui" });
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (err: any) {
      toast({ title: "Gagal mengubah password", description: err.message, variant: "destructive" });
    } finally {
      setSavingPassword(false);
    }
  };

  const passwordStrength = (() => {
    if (!newPassword) return 0;
    let s = 0;
    if (newPassword.length >= 8) s++;
    if (/[A-Z]/.test(newPassword)) s++;
    if (/[0-9]/.test(newPassword)) s++;
    if (/[^A-Za-z0-9]/.test(newPassword)) s++;
    return s;
  })();

  const strengthLabel = ["", "Lemah", "Cukup", "Kuat", "Sangat Kuat"][passwordStrength];
  const strengthColor = ["", "bg-red-400", "bg-yellow-400", "bg-blue-400", "bg-green-400"][passwordStrength];

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f4f6f9] flex items-center justify-center">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
      </div>
    );
  }

  const PasswordToggle = ({ show, onToggle }: { show: boolean; onToggle: () => void }) => (
    <button type="button" onClick={onToggle} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors">
      {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
    </button>
  );

  return (
    <div className="min-h-screen bg-[#f4f6f9]">
      {/* Header */}
      <header className="border-b border-border/60 bg-white sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center gap-4">
          <Link to="/admin" className="text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="flex items-center gap-3">
            <h1 className="text-foreground font-heading font-bold text-base">Pengaturan Akun</h1>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-8 space-y-6">
        {/* Profile Section */}
        <div className="bg-white rounded-xl border border-border/60 overflow-hidden">
          <div className="px-6 py-4 border-b border-border/40 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <User className="w-4 h-4 text-primary" />
            </div>
            <div>
              <h2 className="text-foreground font-semibold text-sm">Profil</h2>
              <p className="text-muted-foreground text-xs">Kelola informasi akun Anda</p>
            </div>
          </div>
          <div className="p-6 space-y-5">
            <div className="space-y-2">
              <Label htmlFor="displayName" className="text-sm font-medium text-foreground">Nama Akun</Label>
              <Input
                id="displayName"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="Masukkan nama akun"
                className="h-11 bg-[#f8f9fb] border-border/60 focus:border-primary focus:ring-primary/20"
              />
              <p className="text-xs text-muted-foreground">Nama yang ditampilkan di dashboard admin.</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-foreground">Alamat Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@example.com"
                className="h-11 bg-[#f8f9fb] border-border/60 focus:border-primary focus:ring-primary/20"
              />
              <p className="text-xs text-muted-foreground">Mengubah email akan memerlukan konfirmasi dari email baru.</p>
            </div>
            <div className="flex justify-end pt-2">
              <Button onClick={handleSaveProfile} disabled={savingProfile} className="h-10 px-6 gap-2">
                {savingProfile ? <Loader2 className="w-4 h-4 animate-spin" /> : profileSaved ? <Check className="w-4 h-4" /> : null}
                {profileSaved ? "Tersimpan" : "Simpan Perubahan"}
              </Button>
            </div>
          </div>
        </div>

        {/* Security Section */}
        <div className="bg-white rounded-xl border border-border/60 overflow-hidden">
          <div className="px-6 py-4 border-b border-border/40 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center">
              <Shield className="w-4 h-4 text-orange-600" />
            </div>
            <div>
              <h2 className="text-foreground font-semibold text-sm">Keamanan</h2>
              <p className="text-muted-foreground text-xs">Perbarui password akun Anda</p>
            </div>
          </div>
          <div className="p-6 space-y-5">
            <div className="space-y-2">
              <Label htmlFor="currentPassword" className="text-sm font-medium text-foreground">Password Saat Ini</Label>
              <div className="relative">
                <Input
                  id="currentPassword"
                  type={showCurrent ? "text" : "password"}
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="Masukkan password saat ini"
                  className="h-11 pr-10 bg-[#f8f9fb] border-border/60 focus:border-primary focus:ring-primary/20"
                />
                <PasswordToggle show={showCurrent} onToggle={() => setShowCurrent(!showCurrent)} />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="newPassword" className="text-sm font-medium text-foreground">Password Baru</Label>
              <div className="relative">
                <Input
                  id="newPassword"
                  type={showNew ? "text" : "password"}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Masukkan password baru"
                  className="h-11 pr-10 bg-[#f8f9fb] border-border/60 focus:border-primary focus:ring-primary/20"
                />
                <PasswordToggle show={showNew} onToggle={() => setShowNew(!showNew)} />
              </div>
              {newPassword && (
                <div className="space-y-1.5 pt-1">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className={`h-1 flex-1 rounded-full transition-colors ${i <= passwordStrength ? strengthColor : "bg-border/40"}`} />
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">Kekuatan: {strengthLabel}</p>
                </div>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-sm font-medium text-foreground">Konfirmasi Password Baru</Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirm ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Ulangi password baru"
                  className="h-11 pr-10 bg-[#f8f9fb] border-border/60 focus:border-primary focus:ring-primary/20"
                />
                <PasswordToggle show={showConfirm} onToggle={() => setShowConfirm(!showConfirm)} />
              </div>
              {confirmPassword && confirmPassword !== newPassword && (
                <p className="text-xs text-red-500">Password tidak cocok</p>
              )}
            </div>
            <div className="flex justify-end pt-2">
              <Button
                onClick={handleUpdatePassword}
                disabled={savingPassword || !currentPassword || !newPassword || !confirmPassword}
                variant="outline"
                className="h-10 px-6 gap-2 border-border hover:bg-foreground hover:text-background"
              >
                {savingPassword && <Loader2 className="w-4 h-4 animate-spin" />}
                Perbarui Password
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
