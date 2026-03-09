

# PT. Poly Arrad Pusaka — "ARRAD Chemicals" Corporate Website

## Overview
A premium, modern corporate website for an Indonesian industrial chemical company specializing in water and wastewater treatment chemicals. The site will be built as a single-page landing experience with smooth scroll navigation, with the architecture ready to expand into multi-page routing later.

## Design System
- **Colors**: Deep navy (`#0A1628`), ocean blue (`#1E40AF`), aqua accent (`#06B6D4`), cool gray (`#64748B`), white, with subtle water-inspired gradients
- **Typography**: Clean, strong hierarchy — large bold headlines, refined body text
- **Visual style**: Subtle grid/line engineering patterns, soft glow accents, water-flow gradients, glassmorphism cards
- **Language**: Bahasa Indonesia throughout

## Site Structure (Single Page with Anchor Navigation)

### 1. Sticky Header & Navigation
- Transparent on hero, solid on scroll with blur backdrop
- Logo + nav links (Home, Tentang Kami, Industri, Produk, Layanan, Sertifikasi, Kontak)
- Mobile hamburger menu with slide-in drawer
- "Hubungi Kami" CTA button

### 2. Hero Section
- Animated gradient background with flowing water/fluid motion (CSS animations)
- Floating particle/line accents for industrial-tech feel
- Bold headline + subtitle about water treatment excellence
- Two CTAs: "Konsultasi Tim Kami" and "Jelajahi Solusi"
- Subtle parallax scroll effect

### 3. Brand Introduction
- Short, punchy company intro — established 1998, specialty chemicals
- Key stats with animated counters (25+ years, 100+ clients, 7 product lines)
- Clean two-column layout with decorative water-line accent

### 4. Why ARRAD / Value Proposition
- 6 value cards in a grid: Right chemicals, Right programs, Quality products, Quality control, On-time delivery, Best technical service
- Icon + title + short description per card
- Hover lift/glow animations
- Section with premium gradient background

### 5. Industries Served
- Visual grid of 8 industry cards (Power Plant, Hotel & Building, Pulp & Paper, Food, Chemical, Fertilizer, Electronics, Rubber & Tyre)
- Each with an icon and industry name, hover reveal effect
- Below: "Dipercaya oleh" trusted partners section — logo-style display of 11 major company names (Sinar Mas, Unilever, PLN, Pertamina, etc.) in a sleek marquee/grid

### 6. Product Categories
- 7 product category cards (Influent, Effluent, Boiler, Cooling, RO, Waste Water, Commodity Trading)
- Each card: icon, title, short summary, example products
- Expandable accordion or modal for detailed product info
- Staggered scroll-reveal animation
- Tab or filter interaction for browsing

### 7. Technical Services
- 4 premium service cards: Performance Monitoring, Quality Control System, Reporting, Training
- Icon + description + subtle hover animation
- Clean section with engineering-inspired background pattern

### 8. Treatment Activities / Operations
- Visual gallery-style grid showcasing field operations
- Cards with gradient overlays and descriptive text about site support, chemical handling, field implementation
- Dynamic, operational feel

### 9. Vision & Mission
- Split section — Vision as a large aspirational statement, Mission as concise professional bullet points
- Premium typography treatment with fade-in animations
- Decorative water-flow accent lines

### 10. Certifications & Trust
- Clean badge/card layout for KAN, NSF, Halal, ISO 9001:2015
- Professional presentation without overclaiming
- Subtle glow/border animations

### 11. Contact Section
- Two-column: company info (address, phone, fax, email) + inquiry form
- Form fields: Name, Company, Email, Phone, Message
- "Kirim Pesan" submit button
- Premium card layout with map placeholder

### 12. Footer
- 4-column: Company description, Quick Links, Product Links, Contact Info
- Copyright bar
- Deep navy background with subtle gradient

## Animations & Interactions
- Scroll-triggered fade-in/slide-up reveals on all sections
- Parallax on hero background layers
- Animated counters for statistics
- Card hover: lift + subtle glow
- Smooth scroll between sections
- Marquee animation for partner logos
- CSS-based fluid/water motion in hero (no heavy libraries)

## Component Architecture
- `Navbar` — sticky navigation
- `HeroSection` — animated hero
- `BrandIntro` — company intro + stats
- `WhyArrad` — value proposition grid
- `IndustriesSection` — industries + partners
- `ProductCategories` — product cards with expand
- `TechnicalServices` — service cards
- `TreatmentActivities` — operations gallery
- `VisionMission` — vision & mission display
- `Certifications` — trust badges
- `ContactSection` — info + form
- `Footer` — site footer
- Shared: `AnimatedSection` wrapper for scroll reveals, `StatCounter` for animated numbers

## Responsive Design
- Desktop: full grid layouts, large typography
- Tablet: adjusted grids (2-col where needed)
- Mobile: single column, hamburger nav, touch-friendly cards

