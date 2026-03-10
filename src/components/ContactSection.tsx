import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
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

  const inputClass = "bg-background border-border text-foreground placeholder:text-muted-foreground/40 focus-visible:ring-ocean/30 focus-visible:border-ocean/30 h-11 text-[14px]";
  const labelClass = "text-[12px] text-muted-foreground mb-2 block font-medium tracking-wide";

  return (
    <section id="kontak" className="py-28 md:py-40 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16 md:mb-20">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-8 h-px bg-ocean/40" />
              <span className="section-label">Hubungi Kami</span>
              <div className="w-8 h-px bg-ocean/40" />
            </div>
            <h2 className="text-3xl md:text-[2.75rem] font-bold text-foreground leading-[1.1] max-w-lg mx-auto">
              Konsultasikan kebutuhan <span className="text-gradient">Anda</span>
            </h2>
            <p className="text-muted-foreground text-[16px] mt-4 max-w-md mx-auto">
              Isi formulir di bawah dan tim kami akan menghubungi Anda dalam 1×24 jam kerja.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border/60 p-8 md:p-12 space-y-6 max-w-3xl mx-auto shadow-sm">
            {success && (
              <div className="flex items-center gap-3 bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <p className="text-emerald-700 text-[14px]">Pesan Anda berhasil terkirim! Tim kami akan segera menghubungi Anda.</p>
              </div>
            )}
            {error && (
              <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-xl p-4">
                <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0" />
                <p className="text-destructive text-[14px]">{error}</p>
              </div>
            )}

            <div className="grid sm:grid-cols-2 gap-5">
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
            <div className="grid sm:grid-cols-2 gap-5">
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
              <Textarea name="message" required rows={5} placeholder="Ceritakan kebutuhan pengolahan air Anda..." className="bg-background border-border text-foreground placeholder:text-muted-foreground/40 focus-visible:ring-ocean/30 focus-visible:border-ocean/30 resize-none text-[14px]" />
              {fieldErrors.message && <p className="text-destructive text-xs mt-1">{fieldErrors.message}</p>}
            </div>
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-ocean text-white font-semibold h-12 hover:bg-ocean/90 transition-all duration-300 border-0 text-[14px] rounded-lg shadow-md shadow-ocean/15"
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
    </section>
  );
}