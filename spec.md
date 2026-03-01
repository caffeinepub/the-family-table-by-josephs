# Specification

## Summary
**Goal:** Build a full premium multi-page restaurant website for "The Family Table By Josephs" with 5 pages, a complete real menu, WhatsApp booking, and a warm cozy theme.

**Planned changes:**
- Set up client-side routing for 5 pages: Home, About, Menu, Gallery, Contact
- Apply global warm theme: colors (#FFF6E9, #6B4F4F, #D17A5B, #6A8D73), Playfair Display/Cormorant Garamond headings, Lato/Inter body font, rounded UI, soft shadows, smooth scroll
- Sticky navbar with brand name left, nav links right, mobile hamburger menu, shadow on scroll
- Home page: hero banner with headline/subheadline/two CTAs, Signature Dishes (4 cards), "Why Families Love Us" (3–4 highlights), Customer Stories (2–3 testimonials), Instagram preview grid (6 tiles linking to Instagram), Reservation CTA banner; fade-in on scroll for all sections
- About page: restaurant story, family concept, tagline "Creating Memories With Your Family", fresh ingredients philosophy, cozy ambiance, interior image section
- Menu page: all 24 categories in exact order with all real items (names, descriptions, prices, vegetarian badges); horizontal scrollable category filter bar; rounded cards with placeholder food images, WhatsApp order button, hover scale animation; 3-col desktop / 2-col tablet / 1-col mobile grid
- Gallery page: masonry grid of 12 placeholder images; lightbox overlay with fade/zoom animation, close button, prev/next navigation
- Contact page: full address, Google Maps public iframe embed (plus code 3R6J+J44), Call Us button (tel:+919167340197), WhatsApp button, Instagram link, opening hours section
- WhatsApp Table Reservation form (accessible from Home CTA and as standalone section): 6 fields (Name, Phone, Date, Time, Guests, Special Requests), real-time validation, animated success message, redirect to pre-filled wa.me URL on submit
- Floating WhatsApp button (bottom-right, all pages) with pulse animation and hover tooltip
- Elegant footer on all pages: name, tagline, nav links, address, WhatsApp, Instagram, social icons, copyright
- Motoko backend storing all 24 menu categories and items; query endpoint; frontend fetches menu data from canister
- SEO meta tags: page title, meta description, Open Graph tags (og:title, og:description, og:image)

**User-visible outcome:** Visitors can browse a fully themed restaurant website, explore the complete menu with category filtering, view the gallery with lightbox, book a table via WhatsApp form, contact the restaurant, and access all info across mobile and desktop.
