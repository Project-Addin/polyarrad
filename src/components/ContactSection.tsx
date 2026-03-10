import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
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
    <section id="kontak" className="py-32 md:py-40 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--aqua)) 0.5px, transparent 0)`,
        backgroundSize: '52px 52px'
      }} />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-ocean/6 rounded-full blur-[180px]" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-aqua/4 rounded-full blur-[140px]" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-bold text-aqua tracking-[0.25em] uppercase mb-6 block">Kontak</span>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-white leading-tight mb-5">
              Konsultasikan Kebutuhan <span className="text-gradient">Anda</span>
            </h2>
            <div className="section-divider mb-6" />
            <p className="text-white/40 text-[17px]">
              Tim ahli kami siap membantu Anda menemukan solusi kimia pengolahan air yang tepat.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {/* Info */}
          <AnimatedSection className="lg:col-span-2">
            <div className="glass-card-strong rounded-2xl p-9 h-full flex flex-col gap-8">
              <h3 className="text-xl font-bold text-white tracking-tight">PT. Poly Arrad Pusaka</h3>
              <div className="flex flex-col gap-6 flex-1">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-ocean/15 to-aqua/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-aqua/80" />
                  </div>
                  <p className="text-white/45 text-[14px] leading-[1.7] pt-1.5">
                    Jl. Rungkut Industri III No. 18-20,<br />
                    Surabaya 60293, Jawa Timur, Indonesia
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-ocean/15 to-aqua/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-aqua/80" />
                  </div>
                  <div>
                    <p className="text-white/45 text-[14px]">+62 31 843 7000</p>
                    <p className="text-white/25 text-[12px] mt-0.5">Fax: +62 31 843 7001</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-ocean/15 to-aqua/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-aqua/80" />
                  </div>
                  <p className="text-white/45 text-[14px]">info@arradchemicals.co.id</p>
                </div>
              </div>
              {/* Map placeholder */}
              <div className="rounded-xl bg-navy-light border border-white/[0.04] h-36 flex items-center justify-center">
                <p className="text-white/15 text-[13px]">📍 Surabaya, Indonesia</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection className="lg:col-span-3" delay={150}>
            <form onSubmit={handleSubmit} className="glass-card-strong rounded-2xl p-9 space-y-5">
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">Kirim Pesan</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] text-white/35 mb-2 block font-semibold tracking-[0.15em] uppercase">Nama Lengkap</label>
                  <Input required placeholder="Nama Anda" className="bg-white/[0.04] border-white/[0.06] text-white placeholder:text-white/20 focus-visible:ring-ocean/40 focus-visible:border-ocean/25 h-11 transition-all duration-300 text-[14px]" />
                </div>
                <div>
                  <label className="text-[10px] text-white/35 mb-2 block font-semibold tracking-[0.15em] uppercase">Perusahaan</label>
                  <Input required placeholder="Nama Perusahaan" className="bg-white/[0.04] border-white/[0.06] text-white placeholder:text-white/20 focus-visible:ring-ocean/40 focus-visible:border-ocean/25 h-11 transition-all duration-300 text-[14px]" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] text-white/35 mb-2 block font-semibold tracking-[0.15em] uppercase">Email</label>
                  <Input required type="email" placeholder="email@perusahaan.com" className="bg-white/[0.04] border-white/[0.06] text-white placeholder:text-white/20 focus-visible:ring-ocean/40 focus-visible:border-ocean/25 h-11 transition-all duration-300 text-[14px]" />
                </div>
                <div>
                  <label className="text-[10px] text-white/35 mb-2 block font-semibold tracking-[0.15em] uppercase">Telepon</label>
                  <Input placeholder="+62 xxx xxxx xxxx" className="bg-white/[0.04] border-white/[0.06] text-white placeholder:text-white/20 focus-visible:ring-ocean/40 focus-visible:border-ocean/25 h-11 transition-all duration-300 text-[14px]" />
                </div>
              </div>
              <div>
                <label className="text-[10px] text-white/35 mb-2 block font-semibold tracking-[0.15em] uppercase">Pesan</label>
                <Textarea required rows={4} placeholder="Ceritakan kebutuhan pengolahan air Anda..." className="bg-white/[0.04] border-white/[0.06] text-white placeholder:text-white/20 focus-visible:ring-ocean/40 focus-visible:border-ocean/25 resize-none transition-all duration-300 text-[14px]" />
              </div>
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-ocean to-aqua text-white font-bold h-12 shadow-xl shadow-ocean/25 hover:shadow-aqua/30 hover:-translate-y-0.5 transition-all duration-400 border-0 text-[14px] tracking-wide"
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
