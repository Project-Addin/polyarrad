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
    <section id="kontak" className="py-24 md:py-36 bg-navy relative overflow-hidden">
      <div className="absolute top-0 right-[20%] w-[400px] h-[400px] bg-ocean/4 rounded-full blur-[200px]" />

      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-20 max-w-6xl">
          {/* Left — info */}
          <AnimatedSection>
            <div>
              <span className="text-aqua/35 text-[11px] font-semibold tracking-[0.25em] uppercase block mb-6">Kontak</span>
              <h2 className="text-3xl md:text-[2.5rem] font-bold text-white leading-[1.12] mb-10">
                Konsultasikan<br />kebutuhan <span className="text-gradient">Anda</span>
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-white/50 font-semibold text-[13px] mb-3">PT. Poly Arrad Pusaka</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-white/15 mt-0.5 flex-shrink-0" />
                      <p className="text-white/30 text-[14px] leading-[1.7]">
                        Jl. Rungkut Industri III No. 18-20,<br />
                        Surabaya 60293, Jawa Timur
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-white/15 flex-shrink-0" />
                      <p className="text-white/30 text-[14px]">+62 31 843 7000</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-white/15 flex-shrink-0" />
                      <p className="text-white/30 text-[14px]">info@arradchemicals.co.id</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right — form */}
          <AnimatedSection delay={150}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] text-white/20 mb-2 block font-medium tracking-[0.15em] uppercase">Nama</label>
                  <Input required placeholder="Nama Anda" className="bg-white/[0.03] border-white/[0.06] text-white placeholder:text-white/12 focus-visible:ring-ocean/30 focus-visible:border-ocean/20 h-11 text-[14px] rounded-lg" />
                </div>
                <div>
                  <label className="text-[11px] text-white/20 mb-2 block font-medium tracking-[0.15em] uppercase">Perusahaan</label>
                  <Input required placeholder="Nama Perusahaan" className="bg-white/[0.03] border-white/[0.06] text-white placeholder:text-white/12 focus-visible:ring-ocean/30 focus-visible:border-ocean/20 h-11 text-[14px] rounded-lg" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] text-white/20 mb-2 block font-medium tracking-[0.15em] uppercase">Email</label>
                  <Input required type="email" placeholder="email@perusahaan.com" className="bg-white/[0.03] border-white/[0.06] text-white placeholder:text-white/12 focus-visible:ring-ocean/30 focus-visible:border-ocean/20 h-11 text-[14px] rounded-lg" />
                </div>
                <div>
                  <label className="text-[11px] text-white/20 mb-2 block font-medium tracking-[0.15em] uppercase">Telepon</label>
                  <Input placeholder="+62 xxx xxxx xxxx" className="bg-white/[0.03] border-white/[0.06] text-white placeholder:text-white/12 focus-visible:ring-ocean/30 focus-visible:border-ocean/20 h-11 text-[14px] rounded-lg" />
                </div>
              </div>
              <div>
                <label className="text-[11px] text-white/20 mb-2 block font-medium tracking-[0.15em] uppercase">Pesan</label>
                <Textarea required rows={4} placeholder="Ceritakan kebutuhan pengolahan air Anda..." className="bg-white/[0.03] border-white/[0.06] text-white placeholder:text-white/12 focus-visible:ring-ocean/30 focus-visible:border-ocean/20 resize-none text-[14px] rounded-lg" />
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
