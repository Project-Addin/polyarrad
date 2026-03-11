import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AlertCircle, ArrowLeft, Mail, Loader2, CheckCircle2 } from "lucide-react";

export default function AdminForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const [resendCountdown, setResendCountdown] = useState(0);

  const isValidEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

  const startCountdown = () => {
    setResendCountdown(60);
    const interval = setInterval(() => {
      setResendCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!isValidEmail(email)) {
      setError("Format email tidak valid.");
      return;
    }

    setLoading(true);
    try {
      const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/admin/reset-password`,
      });
      if (resetError) throw resetError;
      setSent(true);
      startCountdown();
    } catch (err: any) {
      setError(err.message || "Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (resendCountdown > 0) return;
    setError(null);
    setLoading(true);
    try {
      const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/admin/reset-password`,
      });
      if (resetError) throw resetError;
      startCountdown();
    } catch (err: any) {
      setError(err.message || "Gagal mengirim ulang. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fc] flex items-center justify-center px-4">
      <div className="w-full max-w-[420px]">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#0A1628] mb-5 shadow-lg shadow-[#0A1628]/20">
            <Mail className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-[#0A1628] tracking-tight">Lupa Password</h1>
          <p className="text-[#64748b] text-sm mt-1.5">
            {sent
              ? "Kami telah mengirim link reset password ke email Anda"
              : "Masukkan email Anda untuk menerima link reset password"}
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-[#e2e8f0] shadow-sm shadow-black/[0.04] p-8">
          {!sent ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              {error && (
                <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-3.5">
                  <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-red-700 text-sm leading-relaxed">{error}</p>
                </div>
              )}

              <div className="space-y-1.5">
                <label className="text-sm font-medium text-[#334155] block">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8]" />
                  <Input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@arradchemicals.co.id"
                    className="h-12 pl-10 text-sm bg-[#f8f9fc] border-[#e2e8f0] rounded-xl placeholder:text-[#94a3b8] focus-visible:ring-[#1d4ed8]/20 focus-visible:border-[#1d4ed8]"
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full h-12 text-sm font-semibold rounded-xl bg-[#0A1628] hover:bg-[#0f1f3d] text-white shadow-md shadow-[#0A1628]/15 transition-all"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Mengirim...
                  </span>
                ) : (
                  "Kirim Link Reset"
                )}
              </Button>
            </form>
          ) : (
            <div className="space-y-5">
              <div className="flex flex-col items-center text-center gap-3 py-2">
                <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#334155]">Email terkirim!</p>
                  <p className="text-xs text-[#64748b] mt-1">
                    Periksa inbox <span className="font-medium text-[#334155]">{email}</span> dan klik link untuk reset password.
                  </p>
                </div>
              </div>

              {error && (
                <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-3.5">
                  <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-red-700 text-sm leading-relaxed">{error}</p>
                </div>
              )}

              <Button
                type="button"
                onClick={handleResend}
                disabled={loading || resendCountdown > 0}
                variant="outline"
                className="w-full h-12 text-sm font-semibold rounded-xl border-[#e2e8f0] text-[#334155] hover:bg-[#f1f5f9] transition-all"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Mengirim ulang...
                  </span>
                ) : resendCountdown > 0 ? (
                  `Kirim ulang dalam ${resendCountdown}s`
                ) : (
                  "Kirim ulang email"
                )}
              </Button>
            </div>
          )}

          <div className="mt-5 text-center">
            <Link
              to="/admin/login"
              className="inline-flex items-center gap-1.5 text-sm text-[#1d4ed8] hover:text-[#1e40af] font-medium transition-colors hover:underline"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Kembali ke login
            </Link>
          </div>
        </div>

        <p className="text-center text-xs text-[#94a3b8] mt-8">
          © {new Date().getFullYear()} ARRAD Chemicals. All rights reserved.
        </p>
      </div>
    </div>
  );
}
