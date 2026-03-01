import { useState } from 'react';
import { SiWhatsapp } from 'react-icons/si';

export default function FloatingWhatsApp() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {hovered && (
        <div className="bg-brown text-cream text-sm font-body px-3 py-2 rounded-xl shadow-warm-lg whitespace-nowrap animate-in fade-in slide-in-from-right-2 duration-200">
          Chat with us on WhatsApp
        </div>
      )}
      <a
        href="https://wa.me/919167340197"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label="Chat with us on WhatsApp"
        className="w-14 h-14 rounded-full bg-olive flex items-center justify-center shadow-warm-xl pulse-animation hover:scale-110 transition-transform duration-200"
      >
        <SiWhatsapp className="w-7 h-7 text-cream" />
      </a>
    </div>
  );
}
