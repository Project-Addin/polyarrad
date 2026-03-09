import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Pesan Terkirim!", description: "Tim kami akan menghubungi Anda segera." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="kontak" className="py-24 md:py-32 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--aqua)) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold text-aqua tracking-[0.15em] uppercase mb-4 block">Kontak</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
              Konsultasikan Kebutuhan <span className="text-gradient">Anda</span>
            </h2>
            <p className="text-lg text-white/50">
              Tim ahli kami siap membantu Anda menemukan solusi kimia pengolahan air yang tepat.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Info */}
          <AnimatedSection className="lg:col-span-2">
            <div className="glass-card rounded-2xl p-8 h-full flex flex-col gap-6">
              <h3 className="text-xl font-bold text-white mb-2">PT. Poly Arrad Pusaka</h3>
              <div className="flex flex-col gap-5 flex-1">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-aqua mt-0.5 flex-shrink-0" />
                  <p className="text-white/60 text-sm leading-relaxed">
                    Jl. Rungkut Industri III No. 18-20,<br />
                    Surabaya 60293, Jawa Timur, Indonesia
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-aqua flex-shrink-0" />
                  <div>
                    <p className="text-white/60 text-sm">+62 31 843 7000</p>
                    <p className="text-white/40 text-xs">Fax: +62 31 843 7001</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-aqua flex-shrink-0" />
                  <p className="text-white/60 text-sm">info@arradchemicals.co.id</p>
                </div>
              </div>
              {/* Map placeholder */}
              <div className="rounded-xl bg-navy-light border border-white/5 h-40 flex items-center justify-center">
                <p className="text-white/20 text-sm">📍 Surabaya, Indonesia</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection className="lg:col-span-3" delay={150}>
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-5">
              <h3 className="text-xl font-bold text-white mb-4">Kirim Pesan</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-white/50 mb-1.5 block">Nama Lengkap</label>
                  <Input required placeholder="Nama Anda" className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-aqua/50" />
                </div>
                <div>
                  <label className="text-sm text-white/50 mb-1.5 block">Perusahaan</label>
                  <Input required placeholder="Nama Perusahaan" className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-aqua/50" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-white/50 mb-1.5 block">Email</label>
                  <Input required type="email" placeholder="email@perusahaan.com" className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-aqua/50" />
                </div>
                <div>
                  <label className="text-sm text-white/50 mb-1.5 block">Telepon</label>
                  <Input placeholder="+62 xxx xxxx xxxx" className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-aqua/50" />
                </div>
              </div>
              <div>
                <label className="text-sm text-white/50 mb-1.5 block">Pesan</label>
                <Textarea required rows={4} placeholder="Ceritakan kebutuhan pengolahan air Anda..." className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-aqua/50 resize-none" />
              </div>
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-ocean to-aqua text-white font-bold h-12 shadow-lg shadow-ocean/30 hover:shadow-aqua/40 transition-all duration-300 border-0"
              >
                {loading ? "Mengirim..." : <>Kirim Pesan <Send className="w-4 h-4 ml-1" /></>}
              </Button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
