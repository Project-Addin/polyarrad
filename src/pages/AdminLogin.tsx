import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AlertCircle, Lock } from "lucide-react";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) checkAdminAndRedirect(session.user.id);
    });
  }, []);

  const checkAdminAndRedirect = async (userId: string) => {
    const { data } = await supabase.rpc("has_role", { _user_id: userId, _role: "admin" });
    if (data) navigate("/admin", { replace: true });
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const { data, error: authError } = await supabase.auth.signInWithPassword({ email, password });
      if (authError) throw authError;

      const { data: isAdmin } = await supabase.rpc("has_role", { _user_id: data.user.id, _role: "admin" });
      if (!isAdmin) {
        await supabase.auth.signOut();
        setError("Akun Anda tidak memiliki akses admin.");
        return;
      }

      navigate("/admin", { replace: true });
    } catch (err: any) {
      setError(err.message === "Invalid login credentials" ? "Email atau password salah." : err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-navy flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/[0.06] mb-6">
            <Lock className="w-6 h-6 text-white/40" />
          </div>
          <h1 className="text-2xl font-bold text-white font-heading">Admin Login</h1>
          <p className="text-white/30 text-sm mt-2">ARRAD Chemicals Dashboard</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          {error && (
            <div className="flex items-center gap-3 bg-destructive/10 border border-destructive/20 rounded-xl p-3">
              <AlertCircle className="w-4 h-4 text-destructive flex-shrink-0" />
              <p className="text-destructive text-sm">{error}</p>
            </div>
          )}
          <div>
            <label className="text-[11px] text-white/25 mb-2 block font-medium tracking-[0.15em] uppercase">Email</label>
            <Input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@arradchemicals.co.id"
              className="bg-white/[0.03] border-white/[0.06] text-white placeholder:text-white/15 focus-visible:ring-ocean/30 h-11 text-sm"
            />
          </div>
          <div>
            <label className="text-[11px] text-white/25 mb-2 block font-medium tracking-[0.15em] uppercase">Password</label>
            <Input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="bg-white/[0.03] border-white/[0.06] text-white placeholder:text-white/15 focus-visible:ring-ocean/30 h-11 text-sm"
            />
          </div>
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-white text-foreground font-semibold h-11 hover:bg-white/90 rounded-full text-sm"
          >
            {loading ? "Masuk..." : "Masuk"}
          </Button>
        </form>
      </div>
    </div>
  );
}
