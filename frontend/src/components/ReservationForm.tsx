import { useState, useRef } from 'react';
import { CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  specialRequests: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  date?: string;
  time?: string;
  guests?: string;
}

export default function ReservationForm() {
  const [form, setForm] = useState<FormData>({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    specialRequests: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = 'Full name is required';
    if (!form.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^\+?[\d\s\-()]{7,}$/.test(form.phone)) newErrors.phone = 'Enter a valid phone number';
    if (!form.date) newErrors.date = 'Date is required';
    if (!form.time) newErrors.time = 'Time is required';
    if (!form.guests || parseInt(form.guests) < 1) newErrors.guests = 'Number of guests is required (min 1)';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitted(true);

    setTimeout(() => {
      const message = `New Table Booking – The Family Table By Josephs\n\nName: ${form.name}\nPhone: ${form.phone}\nDate: ${form.date}\nTime: ${form.time}\nGuests: ${form.guests}\nSpecial Request: ${form.specialRequests || 'None'}`;
      const encoded = encodeURIComponent(message);
      window.open(`https://wa.me/919167340197?text=${encoded}`, '_blank');
      setSubmitted(false);
      setForm({ name: '', phone: '', date: '', time: '', guests: '', specialRequests: '' });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const inputClass = (field: keyof FormErrors) =>
    `w-full px-4 py-3 rounded-xl border font-body text-sm text-brown bg-cream focus:outline-none focus:ring-2 focus:ring-terracotta/50 transition-all ${
      errors[field] ? 'border-red-400' : 'border-border'
    }`;

  return (
    <section id="reservation" className="py-16 px-4 bg-cream-dark">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <p className="font-body text-sm text-terracotta tracking-widest uppercase mb-2">Reserve Your Spot</p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-brown mb-3">
            Book a Table
          </h2>
          <p className="font-body text-brown-light text-base">
            Fill in the details below and we'll confirm via WhatsApp
          </p>
        </div>

        {submitted ? (
          <div className="bg-cream rounded-3xl p-10 shadow-warm-lg text-center success-bounce">
            <CheckCircle className="w-16 h-16 text-olive mx-auto mb-4" />
            <h3 className="font-heading text-3xl font-semibold text-brown mb-2">Booking Sent!</h3>
            <p className="font-body text-brown-light">
              Redirecting you to WhatsApp to confirm your reservation...
            </p>
          </div>
        ) : (
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-cream rounded-3xl p-8 shadow-warm-lg space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block font-body text-sm font-medium text-brown mb-1.5">
                  Full Name <span className="text-terracotta">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className={inputClass('name')}
                />
                {errors.name && <p className="mt-1 text-xs text-red-500 font-body">{errors.name}</p>}
              </div>
              <div>
                <label className="block font-body text-sm font-medium text-brown mb-1.5">
                  Phone Number <span className="text-terracotta">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  className={inputClass('phone')}
                />
                {errors.phone && <p className="mt-1 text-xs text-red-500 font-body">{errors.phone}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block font-body text-sm font-medium text-brown mb-1.5">
                  Date <span className="text-terracotta">*</span>
                </label>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className={inputClass('date')}
                />
                {errors.date && <p className="mt-1 text-xs text-red-500 font-body">{errors.date}</p>}
              </div>
              <div>
                <label className="block font-body text-sm font-medium text-brown mb-1.5">
                  Time <span className="text-terracotta">*</span>
                </label>
                <input
                  type="time"
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                  className={inputClass('time')}
                />
                {errors.time && <p className="mt-1 text-xs text-red-500 font-body">{errors.time}</p>}
              </div>
            </div>

            <div>
              <label className="block font-body text-sm font-medium text-brown mb-1.5">
                Number of Guests <span className="text-terracotta">*</span>
              </label>
              <input
                type="number"
                name="guests"
                value={form.guests}
                onChange={handleChange}
                min="1"
                max="50"
                placeholder="e.g. 4"
                className={inputClass('guests')}
              />
              {errors.guests && <p className="mt-1 text-xs text-red-500 font-body">{errors.guests}</p>}
            </div>

            <div>
              <label className="block font-body text-sm font-medium text-brown mb-1.5">
                Special Requests <span className="text-brown-light text-xs">(optional)</span>
              </label>
              <textarea
                name="specialRequests"
                value={form.specialRequests}
                onChange={handleChange}
                rows={3}
                placeholder="Dietary requirements, occasion, seating preference..."
                className="w-full px-4 py-3 rounded-xl border border-border font-body text-sm text-brown bg-cream focus:outline-none focus:ring-2 focus:ring-terracotta/50 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-terracotta text-cream rounded-2xl font-body font-medium text-base hover:bg-terracotta-dark transition-all duration-200 shadow-warm hover:shadow-warm-lg active:scale-[0.98]"
            >
              Confirm Booking via WhatsApp
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
