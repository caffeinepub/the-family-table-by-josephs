import { Phone, MapPin, Clock, Instagram, MessageCircle } from 'lucide-react';
import { SiWhatsapp, SiInstagram } from 'react-icons/si';
import { useFadeIn } from '../lib/useFadeIn';

function FadeSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useFadeIn<HTMLDivElement>();
  return (
    <div ref={ref} className={`fade-in-up ${className}`}>
      {children}
    </div>
  );
}

const hours = [
  { day: 'Monday – Friday', time: '8:00 AM – 10:00 PM' },
  { day: 'Saturday', time: '8:00 AM – 11:00 PM' },
  { day: 'Sunday', time: '8:00 AM – 10:00 PM' },
];

export default function Contact() {
  return (
    <>
      {/* Header */}
      <section className="py-16 px-4 bg-brown text-center">
        <p className="font-body text-sm text-terracotta tracking-widest uppercase mb-2">Get In Touch</p>
        <h1 className="font-heading text-5xl md:text-6xl font-semibold text-cream mb-4">
          Find Us
        </h1>
        <p className="font-body text-cream/70 text-base max-w-xl mx-auto">
          We'd love to see you. Come visit us in Bandra West, Mumbai.
        </p>
      </section>

      <section className="py-16 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left: Info Cards */}
            <div className="space-y-6">
              {/* Address */}
              <FadeSection>
                <div className="bg-cream rounded-3xl p-7 shadow-warm">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-terracotta/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-terracotta" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-brown mb-1">Our Address</h3>
                      <p className="font-body text-sm text-brown-light leading-relaxed">
                        3R6J+J44 Epitome, 29th Rd,<br />
                        Bandra West, Mumbai,<br />
                        Maharashtra 400050
                      </p>
                    </div>
                  </div>
                </div>
              </FadeSection>

              {/* Opening Hours */}
              <FadeSection>
                <div className="bg-cream rounded-3xl p-7 shadow-warm">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-terracotta/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-terracotta" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-xl font-semibold text-brown mb-3">Opening Hours</h3>
                      <div className="space-y-2">
                        {hours.map((h, i) => (
                          <div key={i} className="flex justify-between items-center">
                            <span className="font-body text-sm text-brown">{h.day}</span>
                            <span className="font-body text-sm font-medium text-terracotta">{h.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeSection>

              {/* Contact Buttons */}
              <FadeSection>
                <div className="bg-cream rounded-3xl p-7 shadow-warm">
                  <h3 className="font-heading text-xl font-semibold text-brown mb-4">Contact Us</h3>
                  <div className="flex flex-col gap-3">
                    <a
                      href="tel:+919167340197"
                      className="flex items-center gap-3 px-5 py-3.5 bg-cream-dark rounded-2xl hover:bg-terracotta/10 transition-colors group"
                    >
                      <div className="w-9 h-9 rounded-xl bg-terracotta/10 flex items-center justify-center group-hover:bg-terracotta/20 transition-colors">
                        <Phone className="w-4 h-4 text-terracotta" />
                      </div>
                      <div>
                        <p className="font-body text-xs text-brown-light">Call Us</p>
                        <p className="font-body text-sm font-medium text-brown">+91 91673 40197</p>
                      </div>
                    </a>
                    <a
                      href="https://wa.me/919167340197"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-5 py-3.5 bg-olive/10 rounded-2xl hover:bg-olive/20 transition-colors group"
                    >
                      <div className="w-9 h-9 rounded-xl bg-olive/20 flex items-center justify-center">
                        <SiWhatsapp className="w-4 h-4 text-olive" />
                      </div>
                      <div>
                        <p className="font-body text-xs text-brown-light">WhatsApp Us</p>
                        <p className="font-body text-sm font-medium text-brown">+91 91673 40197</p>
                      </div>
                    </a>
                    <a
                      href="https://www.instagram.com/thefamilytablebandra"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-5 py-3.5 bg-terracotta/10 rounded-2xl hover:bg-terracotta/20 transition-colors group"
                    >
                      <div className="w-9 h-9 rounded-xl bg-terracotta/20 flex items-center justify-center">
                        <SiInstagram className="w-4 h-4 text-terracotta" />
                      </div>
                      <div>
                        <p className="font-body text-xs text-brown-light">Follow Us</p>
                        <p className="font-body text-sm font-medium text-brown">@thefamilytablebandra</p>
                      </div>
                    </a>
                  </div>
                </div>
              </FadeSection>
            </div>

            {/* Right: Map */}
            <FadeSection className="h-full">
              <div className="bg-cream rounded-3xl overflow-hidden shadow-warm-lg h-full min-h-[400px]">
                <iframe
                  title="The Family Table By Josephs Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.3!2d72.8296!3d19.0596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9b888888889%3A0x0!2s3R6J%2BJ44+Epitome%2C+29th+Rd%2C+Bandra+West%2C+Mumbai%2C+Maharashtra+400050!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '400px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* Book a Table CTA */}
      <section className="py-14 px-4 bg-cream-dark">
        <FadeSection>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-4xl font-semibold text-brown mb-3">
              Ready to Visit?
            </h2>
            <p className="font-body text-brown-light text-base mb-7">
              Book your table in advance and we'll make sure everything is perfect for you.
            </p>
            <a
              href="https://wa.me/919167340197?text=Hi%2C%20I%27d%20like%20to%20book%20a%20table%20at%20The%20Family%20Table%20By%20Josephs."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-terracotta text-cream rounded-2xl font-body font-medium text-base hover:bg-terracotta-dark transition-all duration-200 shadow-warm"
            >
              <MessageCircle className="w-5 h-5" />
              Book via WhatsApp
            </a>
          </div>
        </FadeSection>
      </section>
    </>
  );
}
