import { useState, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { useFadeIn } from '../lib/useFadeIn';

const galleryImages = [
  { src: '/assets/generated/gallery-family.dim_800x600.png', alt: 'Happy family dining', caption: 'Family Moments' },
  { src: '/assets/generated/gallery-quiche.dim_800x600.png', alt: 'Freshly baked quiche', caption: 'Freshly Baked Quiches' },
  { src: '/assets/generated/gallery-ambiance.dim_800x600.png', alt: 'Cozy restaurant ambiance', caption: 'Our Cozy Ambiance' },
  { src: '/assets/generated/gallery-flatlay.dim_800x600.png', alt: 'Food flat lay', caption: 'A Feast for the Eyes' },
  { src: '/assets/generated/food-pizza.dim_600x600.png', alt: 'Wood-fired pizza', caption: 'Our Signature Pizzas' },
  { src: '/assets/generated/food-starters.dim_600x600.png', alt: 'Chicken starters', caption: 'Crispy Starters' },
  { src: '/assets/generated/food-coffee.dim_600x600.png', alt: 'Latte art coffee', caption: 'Artisan Coffee' },
  { src: '/assets/generated/food-mojito.dim_600x600.png', alt: 'Fresh mojito', caption: 'Refreshing Mojitos' },
  { src: '/assets/generated/food-chai.dim_600x600.png', alt: 'Masala chai', caption: 'Chai Specials' },
  { src: '/assets/generated/food-salad.dim_600x600.png', alt: 'Fresh salad', caption: 'Fresh Salads' },
  { src: '/assets/generated/food-eggs.dim_600x600.png', alt: 'Egg specials', caption: 'Egg Specials' },
  { src: '/assets/generated/food-burger.dim_600x600.png', alt: 'Gourmet burger', caption: 'Gourmet Burgers' },
];

function FadeSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useFadeIn<HTMLDivElement>();
  return (
    <div ref={ref} className={`fade-in-up ${className}`}>
      {children}
    </div>
  );
}

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prev = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i - 1 + galleryImages.length) % galleryImages.length : null));
  }, []);

  const next = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i + 1) % galleryImages.length : null));
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'Escape') closeLightbox();
    },
    [prev, next]
  );

  // Masonry-style column distribution
  const col1 = galleryImages.filter((_, i) => i % 3 === 0);
  const col2 = galleryImages.filter((_, i) => i % 3 === 1);
  const col3 = galleryImages.filter((_, i) => i % 3 === 2);

  return (
    <>
      {/* Header */}
      <section className="py-16 px-4 bg-brown text-center">
        <p className="font-body text-sm text-terracotta tracking-widest uppercase mb-2">Our Story in Photos</p>
        <h1 className="font-heading text-5xl md:text-6xl font-semibold text-cream mb-4">
          Gallery
        </h1>
        <p className="font-body text-cream/70 text-base max-w-xl mx-auto">
          A glimpse into the warmth, flavours, and memories we create every day.
        </p>
      </section>

      {/* Masonry Grid */}
      <section className="py-14 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <FadeSection>
            {/* Desktop: 3 columns masonry */}
            <div className="hidden md:grid grid-cols-3 gap-4">
              {[col1, col2, col3].map((col, colIdx) => (
                <div key={colIdx} className="flex flex-col gap-4">
                  {col.map((img) => {
                    const globalIdx = galleryImages.findIndex((g) => g.src === img.src);
                    return (
                      <GalleryItem
                        key={img.src}
                        img={img}
                        index={globalIdx}
                        onClick={openLightbox}
                      />
                    );
                  })}
                </div>
              ))}
            </div>

            {/* Mobile: 2 columns */}
            <div className="md:hidden grid grid-cols-2 gap-3">
              {galleryImages.map((img, i) => (
                <GalleryItem key={img.src} img={img} index={i} onClick={openLightbox} />
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-brown/95 backdrop-blur-sm flex items-center justify-center lightbox-enter"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-cream/10 hover:bg-cream/20 flex items-center justify-center text-cream transition-colors z-10"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-cream/10 hover:bg-cream/20 flex items-center justify-center text-cream transition-colors z-10"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image */}
          <div
            className="max-w-4xl max-h-[85vh] mx-16 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].alt}
              className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-warm-xl"
            />
            <p className="font-heading text-lg italic text-cream/80 mt-4">
              {galleryImages[lightboxIndex].caption}
            </p>
            <p className="font-body text-xs text-cream/40 mt-1">
              {lightboxIndex + 1} / {galleryImages.length}
            </p>
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-cream/10 hover:bg-cream/20 flex items-center justify-center text-cream transition-colors z-10"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </>
  );
}

interface GalleryItemProps {
  img: { src: string; alt: string; caption: string };
  index: number;
  onClick: (index: number) => void;
}

function GalleryItem({ img, index, onClick }: GalleryItemProps) {
  return (
    <div
      className="relative overflow-hidden rounded-2xl cursor-pointer group shadow-warm"
      onClick={() => onClick(index)}
    >
      <img
        src={img.src}
        alt={img.alt}
        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-brown/0 group-hover:bg-brown/40 transition-colors duration-300 flex items-end justify-between p-4">
        <p className="font-heading text-base italic text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {img.caption}
        </p>
        <div className="w-8 h-8 rounded-full bg-cream/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ZoomIn className="w-4 h-4 text-cream" />
        </div>
      </div>
    </div>
  );
}
