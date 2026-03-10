import AnimatedSection from "./AnimatedSection";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import facilityImage from "@/assets/facility-warehouse.jpg";

export default function LocationSection() {
  return (
    <section id="lokasi" className="py-28 md:py-40 bg-card relative">
      <div className="container mx-auto px-6 md:px-10">
        <AnimatedSection>
          <div className="text-center mb-16 md:mb-20">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-8 h-px bg-ocean/40" />
              <span className="section-label">Lokasi Kami</span>
              <div className="w-8 h-px bg-ocean/40" />
            </div>
            <h2 className="text-3xl md:text-[2.75rem] font-bold text-foreground leading-[1.1] max-w-lg mx-auto">
              Kunjungi <span className="text-gradient">kantor kami</span>
            </h2>
          </div>
        </AnimatedSection>

        {/* Facility image strip */}
        <AnimatedSection>
          <div className="relative rounded-xl overflow-hidden aspect-[21/9] mb-12">
            <img
              src={facilityImage}
              alt="Gudang penyimpanan bahan kimia ARRAD Chemicals"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, transparent 40%, hsl(var(--background) / 0.6) 100%)",
              }}
            />
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Map */}
          <AnimatedSection>
            <div className="rounded-2xl overflow-hidden border border-border/60 h-[400px] lg:h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.5!2d112.77!3d-7.33!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMTknNDguMCJTIDExMsKwNDYnMTIuMCJF!5e0!3m2!1sen!2sid!4v1710000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi ARRAD Chemicals"
              />
            </div>
          </AnimatedSection>

          {/* Info */}
          <AnimatedSection delay={150}>
            <div className="bg-secondary/40 rounded-2xl border border-border/60 p-8 md:p-10 h-full flex flex-col justify-center">
              <h3 className="text-xl font-bold text-foreground mb-8">
                PT. Poly Arrad Pusaka
              </h3>

              <div className="space-y-7">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-ocean/8 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-ocean" />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-foreground/60 uppercase tracking-wider mb-1">Alamat</p>
                    <p className="text-foreground/80 text-[15px] leading-[1.7]">
                      Jl. Rungkut Industri III No. 18-20,
                      <br />
                      Surabaya 60293, Jawa Timur, Indonesia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-ocean/8 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-ocean" />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-foreground/60 uppercase tracking-wider mb-1">Telepon</p>
                    <p className="text-foreground/80 text-[15px]">+62 31 843 7000</p>
                    <p className="text-muted-foreground text-[13px] mt-0.5">Fax: +62 31 843 7001</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-ocean/8 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-ocean" />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-foreground/60 uppercase tracking-wider mb-1">Email</p>
                    <p className="text-foreground/80 text-[15px]">info@arradchemicals.co.id</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-ocean/8 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-ocean" />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-foreground/60 uppercase tracking-wider mb-1">Jam Operasional</p>
                    <p className="text-foreground/80 text-[15px]">Senin – Jumat: 08:00 – 17:00 WIB</p>
                    <p className="text-muted-foreground text-[13px] mt-0.5">Sabtu – Minggu: Tutup</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
