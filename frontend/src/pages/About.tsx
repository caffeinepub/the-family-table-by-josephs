import { useFadeIn } from '../lib/useFadeIn';
import { Leaf, Heart, Coffee, Users } from 'lucide-react';

function FadeSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useFadeIn<HTMLDivElement>();
  return (
    <div ref={ref} className={`fade-in-up ${className}`}>
      {children}
    </div>
  );
}

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 px-4 bg-brown overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/assets/generated/about-interior.dim_1200x800.png"
            alt="Restaurant interior"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="font-body text-sm text-terracotta tracking-widest uppercase mb-3">Our Story</p>
          <h1 className="font-heading text-5xl md:text-7xl font-semibold text-cream mb-5 leading-tight">
            The Family Table<br />
            <span className="italic text-terracotta">By Josephs</span>
          </h1>
          <p className="font-heading text-xl md:text-2xl italic text-cream/80">
            "Creating Memories With Your Family"
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeSection>
              <div className="rounded-3xl overflow-hidden shadow-warm-xl">
                <img
                  src="/assets/generated/about-interior.dim_1200x800.png"
                  alt="The Family Table interior"
                  className="w-full h-80 lg:h-[500px] object-cover"
                />
              </div>
            </FadeSection>
            <FadeSection>
              <p className="font-body text-sm text-terracotta tracking-widest uppercase mb-3">Who We Are</p>
              <h2 className="font-heading text-4xl md:text-5xl font-semibold text-brown mb-5 leading-tight">
                A Place Where<br />Every Meal Matters
              </h2>
              <p className="font-body text-brown-light leading-relaxed mb-4">
                Nestled in the heart of Bandra West, The Family Table By Josephs was born from a simple belief — that the best meals are the ones shared with the people you love. We opened our doors with a vision to create a space that feels less like a restaurant and more like an extension of your home.
              </p>
              <p className="font-body text-brown-light leading-relaxed mb-6">
                From our signature Ghee Roast Chicken to our freshly baked quiches and handcrafted mojitos, every item on our menu is a labour of love. We believe food has the power to bring people together, spark conversations, and create memories that last a lifetime.
              </p>
              <div className="inline-block px-6 py-3 bg-terracotta/10 border border-terracotta/30 rounded-2xl">
                <p className="font-heading text-xl italic text-terracotta">
                  "Creating Memories With Your Family"
                </p>
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-cream-dark">
        <div className="max-w-7xl mx-auto">
          <FadeSection className="text-center mb-12">
            <p className="font-body text-sm text-terracotta tracking-widest uppercase mb-2">What We Stand For</p>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-brown">
              Our Philosophy
            </h2>
          </FadeSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Leaf,
                title: 'Fresh, Quality Ingredients',
                desc: 'We believe great food starts with great ingredients. We source fresh, quality produce and meats to ensure every dish is as nourishing as it is delicious. No shortcuts, no compromises — just honest, wholesome cooking.',
              },
              {
                icon: Heart,
                title: 'Family-Focused Dining',
                desc: 'The Family Table was designed with families in mind. Whether you\'re celebrating a birthday, catching up with old friends, or simply enjoying a quiet Sunday brunch, our space is your space. We welcome everyone with open arms.',
              },
              {
                icon: Coffee,
                title: 'Cozy, Inviting Ambiance',
                desc: 'From the warm Edison bulb lighting to the rustic wooden tables and terracotta accents, every corner of The Family Table has been thoughtfully designed to make you feel at ease. Come as you are, stay as long as you like.',
              },
              {
                icon: Users,
                title: 'Community & Connection',
                desc: 'We\'re more than a restaurant — we\'re a community hub in Bandra West. We love seeing familiar faces, meeting new ones, and being part of the stories that unfold over a shared meal. This is your table too.',
              },
            ].map((item, i) => (
              <FadeSection key={i}>
                <div className="bg-cream rounded-3xl p-8 shadow-warm flex gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-terracotta/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-terracotta" />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-semibold text-brown mb-2">{item.title}</h3>
                    <p className="font-body text-sm text-brown-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us CTA */}
      <section className="py-16 px-4 bg-terracotta">
        <FadeSection>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-cream mb-4">
              Come Visit Us
            </h2>
            <p className="font-body text-cream/80 text-base mb-8">
              29th Road, Bandra West, Mumbai — Open daily, 8:00 AM to 10:00 PM
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919167340197"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-cream text-terracotta rounded-2xl font-body font-medium hover:bg-cream/90 transition-all duration-200 shadow-warm"
              >
                Book a Table
              </a>
              <a
                href="/menu"
                className="px-8 py-4 bg-terracotta-dark text-cream rounded-2xl font-body font-medium hover:bg-brown transition-all duration-200"
              >
                View Our Menu
              </a>
            </div>
          </div>
        </FadeSection>
      </section>
    </>
  );
}
