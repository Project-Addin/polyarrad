import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const inquirySchema = z.object({
  full_name: z.string().trim().min(1, "Nama wajib diisi").max(100),
  company_name: z.string().trim().min(1, "Perusahaan wajib diisi").max(200),
  email: z.string().trim().email("Format email tidak valid").max(255),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  subject: z.string().trim().max(200).optional().or(z.literal("")),
  message: z.string().trim().min(1, "Pesan wajib diisi").max(2000),
});

type InquiryForm = z.infer<typeof inquirySchema>;

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof InquiryForm, string>>>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setFieldErrors({});
    setSuccess(false);

    const formData = new FormData(e.currentTarget);
    const raw = {
      full_name: formData.get("full_name") as string,
      company_name: formData.get("company_name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    const result = inquirySchema.safeParse(raw);
    if (!result.success) {
      const errs: Partial<Record<keyof InquiryForm, string>> = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof InquiryForm;
        if (!errs[field]) errs[field] = issue.message;
      });
      setFieldErrors(errs);
      return;
    }

    setLoading(true);
    try {
      const { error: dbError } = await supabase
        .from("contact_inquiries")
        .insert({
          full_name: result.data.full_name,
          company_name: result.data.company_name,
          email: result.data.email,
          phone: result.data.phone || null,
          subject: result.data.subject || null,
          message: result.data.message,
        });

      if (dbError) throw dbError;

      setSuccess(true);
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setSuccess(false), 5000);
    } catch {
      setError("Gagal mengirim pesan. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = "bg-white/[0.03] border-white/[0.06] text-white placeholder:text-white/15 focus-visible:ring-ocean/30 focus-visible:border-ocean/20 h-11 text-[14px]";
  const labelClass = "text-[11px] text-white/25 mb-2 block font-medium tracking-[0.15em] uppercase";

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

          <AnimatedSection className="lg:col-span-3" delay={150}>
            <form onSubmit={handleSubmit} className="glass-panel-strong rounded-2xl p-8 md:p-10 space-y-5">
              {success && (
                <div className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <p className="text-emerald-300 text-[14px]">Pesan Anda berhasil terkirim! Tim kami akan segera menghubungi Anda.</p>
                </div>
              )}
              {error && (
                <div className="flex items-center gap-3 bg-destructive/10 border border-destructive/20 rounded-xl p-4">
                  <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0" />
                  <p className="text-destructive text-[14px]">{error}</p>
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Nama Lengkap *</label>
                  <Input name="full_name" required placeholder="Nama Anda" className={inputClass} />
                  {fieldErrors.full_name && <p className="text-destructive text-xs mt-1">{fieldErrors.full_name}</p>}
                </div>
                <div>
                  <label className={labelClass}>Perusahaan *</label>
                  <Input name="company_name" required placeholder="Nama Perusahaan" className={inputClass} />
                  {fieldErrors.company_name && <p className="text-destructive text-xs mt-1">{fieldErrors.company_name}</p>}
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Email *</label>
                  <Input name="email" type="email" required placeholder="email@perusahaan.com" className={inputClass} />
                  {fieldErrors.email && <p className="text-destructive text-xs mt-1">{fieldErrors.email}</p>}
                </div>
                <div>
                  <label className={labelClass}>Telepon</label>
                  <Input name="phone" placeholder="+62 xxx xxxx xxxx" className={inputClass} />
                </div>
              </div>
              <div>
                <label className={labelClass}>Subjek</label>
                <Input name="subject" placeholder="Topik pertanyaan Anda" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Pesan *</label>
                <Textarea name="message" required rows={4} placeholder="Ceritakan kebutuhan pengolahan air Anda..." className="bg-white/[0.03] border-white/[0.06] text-white placeholder:text-white/15 focus-visible:ring-ocean/30 focus-visible:border-ocean/20 resize-none text-[14px]" />
                {fieldErrors.message && <p className="text-destructive text-xs mt-1">{fieldErrors.message}</p>}
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
