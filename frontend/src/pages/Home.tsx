import { Link } from '@tanstack/react-router';
import { ChevronDown, Leaf, Users, Star, Heart, Clock, Sparkles } from 'lucide-react';
import ReservationForm from '../components/ReservationForm';
import { useFadeIn } from '../lib/useFadeIn';

const signatureDishes = [
  {
    name: 'Ghee Roast Chicken',
    desc: 'Spicy and tangy masala served with 2 buns',
    img: '/assets/generated/food-starters.dim_600x600.png',
    tag: 'Starters',
  },
  {
    name: 'Wood-Fired Pizza',
    desc: 'Crispy 11-inch pizzas with premium toppings',
    img: '/assets/generated/food-pizza.dim_600x600.png',
    tag: 'Pizza',
  },
  {
    name: 'Egg Specials',
    desc: 'Fluffy omelettes and scrambled eggs done right',
    img: '/assets/generated/food-eggs.dim_600x600.png',
    tag: 'Eggs',
  },
  {
    name: 'Gourmet Burgers',
    desc: 'Juicy patties with fresh toppings and sauces',
    img: '/assets/generated/food-burger.dim_600x600.png',
    tag: 'Burgers',
  },
];

const features = [
  { icon: Leaf, title: 'Fresh Ingredients', desc: 'We source the freshest local produce and quality meats for every dish.' },
  { icon: Users, title: 'Family Atmosphere', desc: 'A warm, welcoming space where every family feels right at home.' },
  { icon: Heart, title: 'Made With Love', desc: 'Every recipe is crafted with care, passion, and a whole lot of heart.' },
  { icon: Sparkles, title: 'Memorable Moments', desc: 'Creating lasting memories over great food and good company.' },
];

const testimonials = [
  {
    name: 'Priya S.',
    text: 'The Family Table is our go-to spot for Sunday brunches. The quiches are absolutely divine and the ambiance is so cozy!',
    stars: 5,
  },
  {
    name: 'Rahul M.',
    text: 'Best chicken ghee roast in Bandra! The staff is warm and the food always feels homemade. Highly recommend.',
    stars: 5,
  },
  {
    name: 'Ananya K.',
    text: 'We celebrated our anniversary here and it was perfect. The Buff Smashburger is a must-try. Will definitely be back!',
    stars: 5,
  },
];

const instagramImages = [
  '/assets/generated/food-pizza.dim_600x600.png',
  '/assets/generated/gallery-family.dim_800x600.png',
  '/assets/generated/food-coffee.dim_600x600.png',
  '/assets/generated/gallery-quiche.dim_800x600.png',
  '/assets/generated/food-mojito.dim_600x600.png',
  '/assets/generated/gallery-ambiance.dim_800x600.png',
];

function FadeSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useFadeIn<HTMLDivElement>();
  return (
    <div ref={ref} className={`fade-in-up ${className}`}>
      {children}
    </div>
  );
}

export default function Home() {
  const scrollToReservation = () => {
    document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/generated/hero-banner.dim_1440x700.png"
            alt="The Family Table By Josephs"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brown/60 via-brown/40 to-brown/70" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="font-body text-sm text-cream/80 tracking-widest uppercase mb-4 animate-in fade-in duration-700">
            Bandra West, Mumbai
          </p>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-semibold text-cream mb-5 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700">
            Where Every Meal<br />
            <span className="italic text-terracotta">Feels Like Home</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-cream/85 mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            A Cozy Place For Family & Friends
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Link
              to="/menu"
              className="px-8 py-4 bg-terracotta text-cream rounded-2xl font-body font-medium text-base hover:bg-terracotta-dark transition-all duration-200 shadow-warm-lg hover:shadow-warm-xl hover:-translate-y-0.5"
            >
              Explore Menu
            </Link>
            <button
              onClick={scrollToReservation}
              className="px-8 py-4 bg-cream/15 backdrop-blur-sm text-cream border border-cream/40 rounded-2xl font-body font-medium text-base hover:bg-cream/25 transition-all duration-200"
            >
              Book a Table
            </button>
          </div>
        </div>
        <button
          onClick={() => document.getElementById('signature')?.scrollIntoView({ behavior: 'smooth' })}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/60 hover:text-cream transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </section>

      {/* Signature Dishes */}
      <section id="signature" className="py-20 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <FadeSection className="text-center mb-12">
            <p className="font-body text-sm text-terracotta tracking-widest uppercase mb-2">Our Favourites</p>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-brown">
              Signature Dishes
            </h2>
          </FadeSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {signatureDishes.map((dish, i) => (
              <FadeSection key={i}>
                <div className="bg-cream rounded-3xl overflow-hidden shadow-warm card-hover group">
                  <div className="relative overflow-hidden h-52">
                    <img
                      src={dish.img}
                      alt={dish.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-terracotta text-cream text-xs font-body px-3 py-1 rounded-full">
                      {dish.tag}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-xl font-semibold text-brown mb-1">{dish.name}</h3>
                    <p className="font-body text-sm text-brown-light">{dish.desc}</p>
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>
          <FadeSection className="text-center mt-10">
            <Link
              to="/menu"
              className="inline-block px-8 py-3 border-2 border-terracotta text-terracotta rounded-2xl font-body font-medium hover:bg-terracotta hover:text-cream transition-all duration-200"
            >
              View Full Menu
            </Link>
          </FadeSection>
        </div>
      </section>

      {/* Why Families Love Us */}
      <section className="py-20 px-4 bg-cream-dark">
        <div className="max-w-7xl mx-auto">
          <FadeSection className="text-center mb-12">
            <p className="font-body text-sm text-terracotta tracking-widest uppercase mb-2">Our Promise</p>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-brown">
              Why Families Love Us
            </h2>
          </FadeSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <FadeSection key={i}>
                <div className="bg-cream rounded-3xl p-7 shadow-warm text-center card-hover">
                  <div className="w-14 h-14 rounded-2xl bg-terracotta/10 flex items-center justify-center mx-auto mb-4">
                    <f.icon className="w-7 h-7 text-terracotta" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-brown mb-2">{f.title}</h3>
                  <p className="font-body text-sm text-brown-light leading-relaxed">{f.desc}</p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Stories */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <FadeSection className="text-center mb-12">
            <p className="font-body text-sm text-terracotta tracking-widest uppercase mb-2">Testimonials</p>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-brown">
              Customer Stories
            </h2>
          </FadeSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <FadeSection key={i}>
                <div className="bg-cream-dark rounded-3xl p-7 shadow-warm card-hover">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 text-terracotta fill-terracotta" />
                    ))}
                  </div>
                  <p className="font-body text-sm text-brown leading-relaxed mb-5 italic">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-terracotta/20 flex items-center justify-center">
                      <span className="font-heading text-sm font-semibold text-terracotta">
                        {t.name[0]}
                      </span>
                    </div>
                    <p className="font-body text-sm font-medium text-brown">{t.name}</p>
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Preview */}
      <section className="py-20 px-4 bg-cream-dark">
        <div className="max-w-7xl mx-auto">
          <FadeSection className="text-center mb-10">
            <p className="font-body text-sm text-terracotta tracking-widest uppercase mb-2">Follow Along</p>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-brown mb-2">
              @thefamilytablebandra
            </h2>
            <p className="font-body text-brown-light text-sm">Follow us on Instagram for daily food inspiration</p>
          </FadeSection>
          <FadeSection>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {instagramImages.map((img, i) => (
                <a
                  key={i}
                  href="https://www.instagram.com/thefamilytablebandra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative overflow-hidden rounded-2xl aspect-square group"
                >
                  <img
                    src={img}
                    alt={`Instagram post ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-brown/0 group-hover:bg-brown/30 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-2xl">♥</span>
                  </div>
                </a>
              ))}
            </div>
          </FadeSection>
          <FadeSection className="text-center mt-8">
            <a
              href="https://www.instagram.com/thefamilytablebandra"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-terracotta text-cream rounded-2xl font-body font-medium hover:bg-terracotta-dark transition-all duration-200 shadow-warm"
            >
              Follow on Instagram
            </a>
          </FadeSection>
        </div>
      </section>

      {/* Reservation CTA Banner */}
      <section className="py-16 px-4 bg-brown">
        <FadeSection>
          <div className="max-w-3xl mx-auto text-center">
            <Clock className="w-10 h-10 text-terracotta mx-auto mb-4" />
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-cream mb-3">
              Ready to Make Memories?
            </h2>
            <p className="font-body text-cream/70 text-base mb-8">
              Reserve your table today and let us take care of the rest.
            </p>
            <button
              onClick={scrollToReservation}
              className="px-10 py-4 bg-terracotta text-cream rounded-2xl font-body font-medium text-base hover:bg-terracotta-dark transition-all duration-200 shadow-warm-lg"
            >
              Book a Table Now
            </button>
          </div>
        </FadeSection>
      </section>

      {/* Reservation Form */}
      <ReservationForm />
    </>
  );
}
