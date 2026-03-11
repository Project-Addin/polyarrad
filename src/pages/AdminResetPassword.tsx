import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AlertCircle, Lock, Loader2, CheckCircle2, Eye, EyeOff, ShieldCheck } from "lucide-react";

export default function AdminResetPassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [sessionReady, setSessionReady] = useState(false);
  const [sessionError, setSessionError] = useState(false);

  useEffect(() => {
    // Listen for the PASSWORD_RECOVERY event from the magic link
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === "PASSWORD_RECOVERY") {
        setSessionReady(true);
      }
    });

    // Also check if we already have a session (user clicked link and session is active)
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        setSessionReady(true);
      } else {
        // Check URL hash for recovery token
        const hash = window.location.hash;
        if (hash && hash.includes("type=recovery")) {
          // Session will be set by onAuthStateChange
        } else {
          setSessionError(true);
        }
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const getPasswordStrength = (pw: string) => {
    let score = 0;
    if (pw.length >= 8) score++;
    if (/[A-Z]/.test(pw)) score++;
    if (/[0-9]/.test(pw)) score++;
    if (/[^A-Za-z0-9]/.test(pw)) score++;
    return score;
  };

  const strengthLabel = (score: number) => {
    if (score <= 1) return { text: "Lemah", color: "bg-red-400" };
    if (score === 2) return { text: "Cukup", color: "bg-yellow-400" };
    if (score === 3) return { text: "Kuat", color: "bg-blue-400" };
    return { text: "Sangat Kuat", color: "bg-green-500" };
  };

  const strength = getPasswordStrength(password);
  const strengthInfo = strengthLabel(strength);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password.length < 8) {
      setError("Password minimal 8 karakter.");
      return;
    }
    if (strength < 2) {
      setError("Password terlalu lemah. Tambahkan huruf besar, angka, atau simbol.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Konfirmasi password tidak cocok.");
      return;
    }

    setLoading(true);
    try {
      const { error: updateError } = await supabase.auth.updateUser({ password });
      if (updateError) throw updateError;
      setSuccess(true);
      setTimeout(() => navigate("/admin/login", { replace: true }), 3000);
    } catch (err: any) {
      setError(err.message || "Gagal mengubah password. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  if (sessionError) {
    return (
      <div className="min-h-screen bg-[#f8f9fc] flex items-center justify-center px-4">
        <div className="w-full max-w-[420px] text-center">
          <div className="bg-white rounded-2xl border border-[#e2e8f0] shadow-sm shadow-black/[0.04] p-8">
            <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="w-6 h-6 text-red-500" />
            </div>
            <h2 className="text-lg font-bold text-[#0A1628] mb-2">Link Tidak Valid</h2>
            <p className="text-sm text-[#64748b] mb-5">
              Link reset password sudah kedaluwarsa atau tidak valid. Silakan minta link baru.
            </p>
            <Link to="/admin/forgot-password">
              <Button className="w-full h-12 text-sm font-semibold rounded-xl bg-[#0A1628] hover:bg-[#0f1f3d] text-white">
                Minta Link Baru
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f9fc] flex items-center justify-center px-4">
      <div className="w-full max-w-[420px]">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#0A1628] mb-5 shadow-lg shadow-[#0A1628]/20">
            {success ? (
              <CheckCircle2 className="w-6 h-6 text-white" />
            ) : (
              <ShieldCheck className="w-6 h-6 text-white" />
            )}
          </div>
          <h1 className="text-2xl font-bold text-[#0A1628] tracking-tight">
            {success ? "Password Berhasil Diubah" : "Reset Password"}
          </h1>
          <p className="text-[#64748b] text-sm mt-1.5">
            {success
              ? "Anda akan dialihkan ke halaman login..."
              : "Buat password baru untuk akun admin Anda"}
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-[#e2e8f0] shadow-sm shadow-black/[0.04] p-8">
          {success ? (
            <div className="flex flex-col items-center text-center gap-3 py-4">
              <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7 text-green-500" />
              </div>
              <p className="text-sm text-[#64748b]">
                Mengalihkan ke halaman login dalam 3 detik...
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {error && (
                <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-3.5">
                  <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-red-700 text-sm leading-relaxed">{error}</p>
                </div>
              )}

              <div className="space-y-1.5">
                <label className="text-sm font-medium text-[#334155] block">Password Baru</label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8]" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Minimal 8 karakter"
                    className="h-12 pl-10 pr-11 text-sm bg-[#f8f9fc] border-[#e2e8f0] rounded-xl placeholder:text-[#94a3b8] focus-visible:ring-[#1d4ed8]/20 focus-visible:border-[#1d4ed8]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#94a3b8] hover:text-[#475569] transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {password.length > 0 && (
                  <div className="space-y-1.5 mt-2">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className={`h-1 flex-1 rounded-full transition-colors ${
                            i <= strength ? strengthInfo.color : "bg-[#e2e8f0]"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-xs text-[#64748b]">Kekuatan: {strengthInfo.text}</p>
                  </div>
                )}
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-medium text-[#334155] block">Konfirmasi Password</label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8]" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Ulangi password baru"
                    className="h-12 pl-10 text-sm bg-[#f8f9fc] border-[#e2e8f0] rounded-xl placeholder:text-[#94a3b8] focus-visible:ring-[#1d4ed8]/20 focus-visible:border-[#1d4ed8]"
                  />
                </div>
                {confirmPassword.length > 0 && password !== confirmPassword && (
                  <p className="text-xs text-red-500 mt-1">Password tidak cocok</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={loading || !sessionReady}
                className="w-full h-12 text-sm font-semibold rounded-xl bg-[#0A1628] hover:bg-[#0f1f3d] text-white shadow-md shadow-[#0A1628]/15 transition-all"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Menyimpan...
                  </span>
                ) : !sessionReady ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Memverifikasi...
                  </span>
                ) : (
                  "Simpan Password Baru"
                )}
              </Button>
            </form>
          )}
        </div>

        <p className="text-center text-xs text-[#94a3b8] mt-8">
          © {new Date().getFullYear()} ARRAD Chemicals. All rights reserved.
        </p>
      </div>
    </div>
  );
}
