# Memory: index.md
Updated: now

# ARRAD Chemicals Design System

- **Brand**: PT. Poly Arrad Pusaka / ARRAD Chemicals
- **Language**: Bahasa Indonesia throughout
- **Theme**: Light corporate — white/light-blue body, dark navy hero + footer only
- **Colors**: Navy (#0A1628), Ocean Blue (213 94% 44%), Aqua (192 82% 42%), light-blue bg, soft-gray bg
- **Fonts**: Space Grotesk (display) + Inter (body)
- **Style**: Clean premium industrial, bright sections, white cards, subtle borders
- **Buttons**: rounded-lg (not pill), ocean-blue primary, outline secondary, proper spacing
- **Navbar**: transparent → white/90 on scroll with color-aware text
- **Hero**: Split layout — left text, right Spline 3D embed (desktop), ambient glow fallback (mobile)
- **Sections**: Hero(dark) → BrandIntro → WhyArrad → Industries(light-blue) → Products → Services → Treatment(light-blue) → Facility → VisionMission → Certs → Location(map+address) → Contact → Footer(dark)
- **Components**: AnimatedSection, StatCounter, FacilitySection (warehouse image), LocationSection (map only, no warehouse image)
- **Backend**: Lovable Cloud — contact_inquiries table, admin auth, RLS policies
- **Admin**: /admin/login, /admin — role-based (app_role enum)
