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
    <div className="min-h-screen bg-[#f4f6f9] flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-5">
            <Lock className="w-5 h-5 text-primary" />
          </div>
          <h1 className="text-2xl font-bold text-foreground font-heading">Admin Login</h1>
          <p className="text-muted-foreground text-sm mt-1.5">ARRAD Chemicals Dashboard</p>
        </div>

        <div className="bg-white rounded-2xl border border-border/60 shadow-sm p-7">
          <form onSubmit={handleLogin} className="space-y-5">
            {error && (
              <div className="flex items-center gap-3 bg-destructive/5 border border-destructive/15 rounded-lg p-3">
                <AlertCircle className="w-4 h-4 text-destructive flex-shrink-0" />
                <p className="text-destructive text-sm">{error}</p>
              </div>
            )}
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Email</label>
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@arradchemicals.co.id"
                className="h-11 text-sm bg-[#f8f9fb] border-border/60 focus-visible:ring-primary/30"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Password</label>
              <Input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="h-11 text-sm bg-[#f8f9fb] border-border/60 focus-visible:ring-primary/30"
              />
            </div>
            <Button
              type="submit"
              disabled={loading}
              className="w-full h-11 text-sm font-semibold rounded-lg"
            >
              {loading ? "Masuk..." : "Masuk"}
            </Button>
          </form>
        </div>

        <p className="text-center text-xs text-muted-foreground/50 mt-6">
          © {new Date().getFullYear()} ARRAD Chemicals
        </p>
      </div>
    </div>
  );
}
