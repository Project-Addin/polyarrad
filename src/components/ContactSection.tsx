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
    <section id="kontak" className="py-28 md:py-40 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--aqua)) 0.5px, transparent 0)`,
        backgroundSize: '64px 64px'
      }} />
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-ocean/4 rounded-full blur-[200px]" />

      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-aqua/40" />
            <span className="text-[11px] font-semibold text-aqua/50 tracking-[0.2em] uppercase">Kontak</span>
          </div>
          <h2 className="text-3xl md:text-[2.75rem] font-bold text-white leading-[1.1] mb-16 md:mb-20 max-w-lg">
            Konsultasikan kebutuhan <span className="text-gradient">Anda</span>
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl">
          {/* Info */}
          <AnimatedSection className="lg:col-span-2">
            <div className="space-y-8">
              <h3 className="text-lg font-bold text-white">PT. Poly Arrad Pusaka</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-4 h-4 text-white/20 mt-1 flex-shrink-0" />
                  <p className="text-white/35 text-[14px] leading-[1.7]">
                    Jl. Rungkut Industri III No. 18-20,<br />
                    Surabaya 60293, Jawa Timur, Indonesia
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-4 h-4 text-white/20 flex-shrink-0" />
                  <div>
                    <p className="text-white/35 text-[14px]">+62 31 843 7000</p>
                    <p className="text-white/15 text-[12px] mt-0.5">Fax: +62 31 843 7001</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-4 h-4 text-white/20 flex-shrink-0" />
                  <p className="text-white/35 text-[14px]">info@arradchemicals.co.id</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection className="lg:col-span-3" delay={150}>
            <form onSubmit={handleSubmit} className="glass-panel-strong rounded-2xl p-8 md:p-10 space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] text-white/25 mb-2 block font-medium tracking-[0.15em] uppercase">Nama Lengkap</label>
                  <Input required placeholder="Nama Anda" className="bg-white/[0.03] border-white/[0.06] text-white placeholder:text-white/15 focus-visible:ring-ocean/30 focus-visible:border-ocean/20 h-11 text-[14px]" />
                </div>
                <div>
                  <label className="text-[11px] text-white/25 mb-2 block font-medium tracking-[0.15em] uppercase">Perusahaan</label>
                  <Input required placeholder="Nama Perusahaan" className="bg-white/[0.03] border-white/[0.06] text-white placeholder:text-white/15 focus-visible:ring-ocean/30 focus-visible:border-ocean/20 h-11 text-[14px]" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] text-white/25 mb-2 block font-medium tracking-[0.15em] uppercase">Email</label>
                  <Input required type="email" placeholder="email@perusahaan.com" className="bg-white/[0.03] border-white/[0.06] text-white placeholder:text-white/15 focus-visible:ring-ocean/30 focus-visible:border-ocean/20 h-11 text-[14px]" />
                </div>
                <div>
                  <label className="text-[11px] text-white/25 mb-2 block font-medium tracking-[0.15em] uppercase">Telepon</label>
                  <Input placeholder="+62 xxx xxxx xxxx" className="bg-white/[0.03] border-white/[0.06] text-white placeholder:text-white/15 focus-visible:ring-ocean/30 focus-visible:border-ocean/20 h-11 text-[14px]" />
                </div>
              </div>
              <div>
                <label className="text-[11px] text-white/25 mb-2 block font-medium tracking-[0.15em] uppercase">Pesan</label>
                <Textarea required rows={4} placeholder="Ceritakan kebutuhan pengolahan air Anda..." className="bg-white/[0.03] border-white/[0.06] text-white placeholder:text-white/15 focus-visible:ring-ocean/30 focus-visible:border-ocean/20 resize-none text-[14px]" />
              </div>
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-white text-foreground font-semibold h-12 hover:bg-white/90 transition-all duration-300 border-0 text-[14px] rounded-full"
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
