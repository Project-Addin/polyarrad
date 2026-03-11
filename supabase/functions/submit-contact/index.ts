import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

// Simple in-memory rate limiter (per isolate lifetime)
const ipBuckets = new Map<string, number[]>();
const RATE_LIMIT = 5; // max submissions
const RATE_WINDOW_MS = 60 * 60 * 1000; // 1 hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (ipBuckets.get(ip) || []).filter(
    (t) => now - t < RATE_WINDOW_MS
  );
  if (timestamps.length >= RATE_LIMIT) {
    ipBuckets.set(ip, timestamps);
    return true;
  }
  timestamps.push(now);
  ipBuckets.set(ip, timestamps);
  return false;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    // Rate limit by IP
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("cf-connecting-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return new Response(
        JSON.stringify({
          error: "Terlalu banyak permintaan. Silakan coba lagi nanti.",
        }),
        {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const body = await req.json();

    // Server-side validation
    const { full_name, company_name, email, phone, subject, message } = body;

    if (
      !full_name ||
      typeof full_name !== "string" ||
      full_name.trim().length === 0 ||
      full_name.trim().length > 100
    ) {
      return new Response(
        JSON.stringify({ error: "Nama tidak valid (maks 100 karakter)." }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    if (
      !company_name ||
      typeof company_name !== "string" ||
      company_name.trim().length === 0 ||
      company_name.trim().length > 200
    ) {
      return new Response(
        JSON.stringify({
          error: "Nama perusahaan tidak valid (maks 200 karakter).",
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      !email ||
      typeof email !== "string" ||
      !emailRegex.test(email.trim()) ||
      email.trim().length > 255
    ) {
      return new Response(
        JSON.stringify({ error: "Format email tidak valid." }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    if (
      !message ||
      typeof message !== "string" ||
      message.trim().length === 0 ||
      message.trim().length > 2000
    ) {
      return new Response(
        JSON.stringify({ error: "Pesan tidak valid (maks 2000 karakter)." }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    if (phone && (typeof phone !== "string" || phone.trim().length > 30)) {
      return new Response(
        JSON.stringify({ error: "Nomor telepon tidak valid." }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    if (
      subject &&
      (typeof subject !== "string" || subject.trim().length > 200)
    ) {
      return new Response(
        JSON.stringify({ error: "Subjek tidak valid (maks 200 karakter)." }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Insert using service role to bypass RLS
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const { error: dbError } = await supabase
      .from("contact_inquiries")
      .insert({
        full_name: full_name.trim(),
        company_name: company_name.trim(),
        email: email.trim(),
        phone: phone?.trim() || null,
        subject: subject?.trim() || null,
        message: message.trim(),
      });

    if (dbError) {
      console.error("DB insert error:", dbError);
      return new Response(
        JSON.stringify({ error: "Gagal menyimpan pesan." }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Unexpected error:", err);
    return new Response(
      JSON.stringify({ error: "Terjadi kesalahan server." }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
