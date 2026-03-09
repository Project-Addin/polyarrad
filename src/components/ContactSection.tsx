import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Send, ArrowRight } from "lucide-react";
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
    <section id="kontak" className="py-28 md:py-36 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.025]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--aqua)) 1px, transparent 0)`,
        backgroundSize: '48px 48px'
      }} />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-ocean/8 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-aqua/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-aqua tracking-[0.2em] uppercase mb-5 block">Kontak</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
              Konsultasikan Kebutuhan <span className="text-gradient">Anda</span>
            </h2>
            <p className="text-lg text-white/45">
              Tim ahli kami siap membantu Anda menemukan solusi kimia pengolahan air yang tepat.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {/* Info */}
          <AnimatedSection className="lg:col-span-2">
            <div className="glass-card rounded-2xl p-9 h-full flex flex-col gap-7 hover:border-aqua/15 transition-all duration-500">
              <h3 className="text-xl font-bold text-white">PT. Poly Arrad Pusaka</h3>
              <div className="flex flex-col gap-6 flex-1">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-ocean/20 to-aqua/15 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-aqua" />
                  </div>
                  <p className="text-white/55 text-sm leading-relaxed pt-1.5">
                    Jl. Rungkut Industri III No. 18-20,<br />
                    Surabaya 60293, Jawa Timur, Indonesia
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-ocean/20 to-aqua/15 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-aqua" />
                  </div>
                  <div>
                    <p className="text-white/55 text-sm">+62 31 843 7000</p>
                    <p className="text-white/35 text-xs mt-0.5">Fax: +62 31 843 7001</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-ocean/20 to-aqua/15 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-aqua" />
                  </div>
                  <p className="text-white/55 text-sm">info@arradchemicals.co.id</p>
                </div>
              </div>
              {/* Map placeholder */}
              <div className="rounded-xl bg-navy-light border border-white/[0.04] h-40 flex items-center justify-center">
                <p className="text-white/20 text-sm">📍 Surabaya, Indonesia</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection className="lg:col-span-3" delay={150}>
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-9 space-y-6 hover:border-aqua/15 transition-all duration-500">
              <h3 className="text-xl font-bold text-white mb-2">Kirim Pesan</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-white/45 mb-2 block font-medium tracking-wide uppercase">Nama Lengkap</label>
                  <Input required placeholder="Nama Anda" className="bg-white/[0.04] border-white/[0.08] text-white placeholder:text-white/25 focus-visible:ring-aqua/40 focus-visible:border-aqua/30 h-12 transition-all duration-300" />
                </div>
                <div>
                  <label className="text-xs text-white/45 mb-2 block font-medium tracking-wide uppercase">Perusahaan</label>
                  <Input required placeholder="Nama Perusahaan" className="bg-white/[0.04] border-white/[0.08] text-white placeholder:text-white/25 focus-visible:ring-aqua/40 focus-visible:border-aqua/30 h-12 transition-all duration-300" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-white/45 mb-2 block font-medium tracking-wide uppercase">Email</label>
                  <Input required type="email" placeholder="email@perusahaan.com" className="bg-white/[0.04] border-white/[0.08] text-white placeholder:text-white/25 focus-visible:ring-aqua/40 focus-visible:border-aqua/30 h-12 transition-all duration-300" />
                </div>
                <div>
                  <label className="text-xs text-white/45 mb-2 block font-medium tracking-wide uppercase">Telepon</label>
                  <Input placeholder="+62 xxx xxxx xxxx" className="bg-white/[0.04] border-white/[0.08] text-white placeholder:text-white/25 focus-visible:ring-aqua/40 focus-visible:border-aqua/30 h-12 transition-all duration-300" />
                </div>
              </div>
              <div>
                <label className="text-xs text-white/45 mb-2 block font-medium tracking-wide uppercase">Pesan</label>
                <Textarea required rows={4} placeholder="Ceritakan kebutuhan pengolahan air Anda..." className="bg-white/[0.04] border-white/[0.08] text-white placeholder:text-white/25 focus-visible:ring-aqua/40 focus-visible:border-aqua/30 resize-none transition-all duration-300" />
              </div>
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-ocean to-aqua text-white font-bold h-14 shadow-2xl shadow-ocean/30 hover:shadow-aqua/40 hover:-translate-y-0.5 transition-all duration-300 border-0 text-[15px] tracking-wide"
              >
                {loading ? "Mengirim..." : (
                  <span className="flex items-center gap-2">
                    Kirim Pesan
                    <ArrowRight className="w-4 h-4" />
                  </span>
                )}
              </Button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
