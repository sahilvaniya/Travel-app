import { useState, type FormEvent } from "react";

const services = [
  {
    icon: "✈️",
    title: "Airport Transfer",
    desc: "Reliable and punctual airport pick-up & drop service, available 24/7.",
  },
  {
    icon: "🏙️",
    title: "City Rides",
    desc: "Comfortable city cab rides at affordable prices across all local routes.",
  },
  {
    icon: "🛣️",
    title: "Outstation Trips",
    desc: "Long-distance travel made easy with our safe and experienced drivers.",
  },
  {
    icon: "💍",
    title: "Wedding Car",
    desc: "Make your special day memorable with our premium decorated car service.",
  },
  {
    icon: "🏕️",
    title: "Tour Packages",
    desc: "Custom tour packages for pilgrimages, hill stations, and more.",
  },
  {
    icon: "🏢",
    title: "Corporate Travel",
    desc: "Professional cab service for your corporate travel needs.",
  },
];

const testimonials = [
  {
    name: "Ravi Shah",
    review:
      "Nilesh bhai is a very professional and polite driver. The car was clean and we reached on time. Highly recommend Jay Mogal Cab Service!",
    stars: 5,
  },
  {
    name: "Priya Mehta",
    review:
      "Excellent service for airport drop. Very punctual and the ride was super smooth. Will definitely book again!",
    stars: 5,
  },
  {
    name: "Amit Patel",
    review:
      "We booked for an outstation trip to Dwarka. Nilesh ji made the journey comfortable and safe. Great experience!",
    stars: 5,
  },
];

const destinations = [
  {
    route: "Ahmedabad ⇆ Gandhidham",
    tagline: "The Kutch Connection",
    tripType: "Oneway & Round Trip",
    startingFrom: "₹ 3000",
    sedanPrice: "₹ 3000",
    suvPrice: "₹ 4000",
    img: "../public/images/gandhidham_img.jpg",
    imageAlt: "Gandhidham Gate", 
  },
  {
    route: "Ahmedabad ⇆ Bhuj",
    tagline: "The Kutch Connection",
    tripType: "Oneway & Round Trip",
    startingFrom: "₹ 3500",
    sedanPrice: "₹ 3500",
    suvPrice: "₹ 4500",
    img: "../public/images/bhuj_img.jpg",
    imageAlt: "White Rann of Kutch near Bhuj", 
  },
  {
    route: "Ahmedabad ⇆ Vadodara",
    tagline: "The Intercity Express",
    tripType: "Oneway & Round Trip",
    startingFrom: "₹ 1,499",
    sedanPrice: "₹ 1,499",
    suvPrice: "₹ 1,999",
    img: "../public/images/vadodra_img.webp",
    imageAlt: "Old palace in Vadodara", 
  },
  {
    route: "Ahmedabad ⇆ Anand",
    tagline: "The Quick Commute",
    tripType: "Oneway & Round Trip",
    startingFrom: "₹ 1,299",
    sedanPrice: "₹ 1,299",
    suvPrice: "₹ 1,799",
    img: "../public/images/anand_img.jfif",
    imageAlt: "Anand city image", 
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    from: "",
    to: "",
    date: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const message = `🚕 *New Booking Request - Jay Mogal Cab Service*\n\n👤 *Name:* ${form.name}\n📞 *Phone:* ${form.phone}\n📍 *From:* ${form.from}\n🏁 *To:* ${form.to}\n📅 *Travel Date:* ${form.date}\n\n_Sent via Jay Mogal Cab Service Website_`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/919106177858?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setForm({ name: "", phone: "", from: "", to: "", date: "" });
  };

  return (
    <div className="font-sans text-gray-800 bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-yellow-400 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-3xl">🚕</span>
            <div>
              <h1 className="text-lg font-black text-gray-900 leading-tight">
                Jay Mogal Cab Service
              </h1>
              <p className="text-xs text-gray-700 font-medium">By Nilesh</p>
            </div>
          </div>

          <ul className="hidden md:flex gap-6 text-sm font-bold text-gray-900">
            <li>
              <a href="#home" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white transition">
                Services
              </a>
            </li>
            <li>
              <a href="#destinations" className="hover:text-white transition">
                Destinations
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white transition">
                About
              </a>
            </li>
            <li>
              <a href="#booking" className="hover:text-white transition">
                Book Now
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>

          <a
            href="tel:9106177858"
            className="hidden md:flex items-center gap-2 bg-gray-900 text-yellow-400 px-4 py-2 rounded-full text-sm font-bold hover:bg-gray-700 transition"
          >
            📞 9106177858
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-gray-900"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-yellow-300 px-4 pb-4">
            <ul className="flex flex-col gap-3 text-sm font-bold text-gray-900">
              {["home", "services", "destinations", "about", "booking", "contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link}`}
                      onClick={() => setMenuOpen(false)}
                      className="capitalize block py-1 border-b border-yellow-400"
                    >
                      {link === "booking"
                        ? "Book Now"
                        : link.charAt(0).toUpperCase() + link.slice(1)}
                    </a>
                  </li>
                ),
              )}
              <li>
                <a
                  href="tel:9106177858"
                  className="flex items-center gap-2 bg-gray-900 text-yellow-400 px-4 py-2 rounded-full mt-2 w-fit font-bold"
                >
                  📞 9106177858
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>

      <section
        id="home"
        className="min-h-screen bg-gradient-to-br from-yellow-400 via-yellow-300 to-orange-300 flex items-center pt-20"
      >
        <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block bg-gray-900 text-yellow-400 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
              🏆 Trusted Cab Service
            </span>
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight mb-4">
              Jay Mogal <br />
              <span className="text-white drop-shadow">Cab Service</span>
            </h1>
            <p className="text-gray-800 text-lg mb-3 font-semibold">
              Your safe, comfortable & affordable travel partner in Gujarat.
            </p>
            <p className="text-gray-700 mb-6">
              Driven by <strong>Nilesh</strong> — a trusted name for city rides,
              outstation trips, airport transfers, and tour packages. Available
              24/7 just for you!
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#booking"
                className="bg-gray-900 text-yellow-400 px-6 py-3 rounded-full font-black text-lg hover:bg-gray-700 transition shadow-xl"
              >
                📋 Book a Ride
              </a>
              <a
                href="tel:9106177858"
                className="bg-white text-gray-900 px-6 py-3 rounded-full font-black text-lg hover:bg-gray-100 transition shadow-xl border-2 border-gray-900"
              >
                📞 Call Now
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-6">
              <div className="text-center">
                <p className="text-3xl font-black text-gray-900">500+</p>
                <p className="text-sm text-gray-700 font-semibold">
                  Happy Customers
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-black text-gray-900">10+</p>
                <p className="text-sm text-gray-700 font-semibold">
                  Years Experience
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-black text-gray-900">50+</p>
                <p className="text-sm text-gray-700 font-semibold">
                  Destinations
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-black text-gray-900">24/7</p>
                <p className="text-sm text-gray-700 font-semibold">
                  Available
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="relative">
              <div
                className="text-[180px] md:text-[220px] drop-shadow-2xl select-none animate-bounce"
                style={{ animationDuration: "3s" }}
              >
                🚕
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gray-900 text-yellow-400 px-4 py-2 rounded-full font-black text-sm whitespace-nowrap shadow-lg">
                📞 9106177858
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gray-900 text-yellow-400 py-3 overflow-hidden">
        <div
          className="flex gap-12 whitespace-nowrap"
          style={{ animation: "marquee 18s linear infinite" }}
        >
          {Array(4)
            .fill(null)
            .map((_, i) => (
              <span key={i} className="font-bold text-sm tracking-wider">
                🚕 Jay Mogal Cab Service &nbsp;|&nbsp; 📞 9106177858 &nbsp;|&nbsp;
                🧑‍✈️ Nilesh &nbsp;|&nbsp; ✅ Safe &amp; Reliable &nbsp;|&nbsp;
                🛣️ Outstation Available &nbsp;|&nbsp; ✈️ Airport Transfers
                &nbsp;|&nbsp; 💍 Wedding Cars &nbsp;&nbsp;&nbsp;
              </span>
            ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-yellow-500 font-bold uppercase tracking-widest text-sm">
              What We Offer
            </span>
            <h2 className="text-4xl font-black text-gray-900 mt-2">
              Our Services
            </h2>
            <p className="text-gray-500 mt-2 max-w-xl mx-auto">
              From local city rides to long outstation journeys, we&apos;ve got you
              covered every mile of the way.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition hover:-translate-y-1 border-b-4 border-yellow-400"
              >
                <div className="text-5xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {s.title}
                </h3>
                <p className="text-gray-500 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="destinations" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-yellow-500 font-bold uppercase tracking-widest text-sm">
              Popular Routes
            </span>
            <h2 className="text-4xl font-black text-gray-900 mt-2">
              Top Destinations
            </h2>
            <p className="text-gray-500 mt-2 max-w-xl mx-auto">
              Explore Gujarat and beyond with Jay Mogal Cab Service —
              comfortable rides to the most sought-after places.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((d, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group hover:-translate-y-1 bg-white border border-yellow-100"
              >
                <div className="h-48 overflow-hidden bg-gray-200 relative">
                  <img
                    src={d.img}
                    alt={d.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://via.placeholder.com/640x400?text=" + encodeURIComponent(d.route);
                    }}
                  />
                  <div className="absolute top-3 left-3 bg-gray-900/85 text-yellow-400 text-xs font-bold px-3 py-1 rounded-full">
                    Popular Route
                  </div>
                </div>
                <div className="p-5 bg-white">
                  <h3 className="font-black text-gray-900 text-lg leading-snug">{d.route}</h3>
                  <p className="text-yellow-600 font-bold text-sm mt-1">{d.tagline}</p>
                  <p className="text-gray-600 text-sm mt-3">📍 {d.tripType}</p>

                  <div className="mt-4 rounded-2xl bg-yellow-50 border border-yellow-200 p-4 space-y-2">
                    <p className="text-sm text-gray-700">
                      Starting from: <span className="font-black text-gray-900">{d.startingFrom}</span>
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 font-medium">Sedan</span>
                      <span className="font-black text-gray-900">{d.sedanPrice}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 font-medium">SUV</span>
                      <span className="font-black text-gray-900">{d.suvPrice}</span>
                    </div>
                  </div>

                  <a
                    href="#booking"
                    className="mt-4 inline-block w-full text-center bg-yellow-400 text-gray-900 font-bold text-sm px-4 py-3 rounded-full hover:bg-yellow-500 transition"
                  >
                    Book Your Ride
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
        className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-56 h-56 rounded-full bg-yellow-400 flex items-center justify-center text-[110px] shadow-2xl border-8 border-yellow-300">
                🧑‍✈️
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 px-5 py-2 rounded-full font-black text-sm whitespace-nowrap shadow-lg">
                ⭐ Top Rated Driver
              </div>
            </div>
          </div>
          <div>
            <span className="text-yellow-400 font-bold uppercase tracking-widest text-sm">
              Meet Your Driver
            </span>
            <h2 className="text-4xl font-black mt-2 mb-4">Nilesh</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Welcome to <strong className="text-yellow-400">Jay Mogal Cab Service</strong>{" "}
              — proudly owned and operated by{" "}
              <strong className="text-yellow-400">Nilesh</strong>. With over{" "}
              <strong>10 years of driving experience</strong>, Nilesh is known for
              his courteous behaviour, safe driving, and in-depth knowledge of
              routes across Gujarat and beyond.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Whether it&apos;s an early morning airport transfer, a last-minute city
              ride, or a long outstation journey — Nilesh ensures every trip is
              comfortable, safe, and on time. Customer satisfaction is his top
              priority.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="bg-gray-700 rounded-xl px-4 py-3 text-center">
                <p className="text-2xl font-black text-yellow-400">10+</p>
                <p className="text-xs text-gray-300">Years Exp.</p>
              </div>
              <div className="bg-gray-700 rounded-xl px-4 py-3 text-center">
                <p className="text-2xl font-black text-yellow-400">500+</p>
                <p className="text-xs text-gray-300">Happy Clients</p>
              </div>
              <div className="bg-gray-700 rounded-xl px-4 py-3 text-center">
                <p className="text-2xl font-black text-yellow-400">1L+</p>
                <p className="text-xs text-gray-300">KM Driven</p>
              </div>
            </div>
            <a
              href="tel:9106177858"
              className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 font-black px-6 py-3 rounded-full hover:bg-yellow-300 transition text-lg shadow-lg"
            >
              📞 Call Nilesh: 9106177858
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-yellow-500 font-bold uppercase tracking-widest text-sm">
              Customer Reviews
            </span>
            <h2 className="text-4xl font-black text-gray-900 mt-2">
              What People Say
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition border-t-4 border-yellow-400"
              >
                <div className="flex gap-1 mb-3">
                  {Array(t.stars)
                    .fill("⭐")
                    .map((s, j) => (
                      <span key={j}>{s}</span>
                    ))}
                </div>
                <p className="text-gray-600 text-sm italic mb-4">&quot;{t.review}&quot;</p>
                <p className="font-bold text-gray-900">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-yellow-500 font-bold uppercase tracking-widest text-sm">
              Ready to Travel?
            </span>
            <h2 className="text-4xl font-black text-gray-900 mt-2">
              Book Your Ride
            </h2>
            <p className="text-gray-500 mt-2">
              Fill in your details and we will get in touch with you shortly.
            </p>
          </div>
          <div className="bg-gradient-to-br from-yellow-400 to-orange-300 rounded-3xl p-8 shadow-2xl">
            {submitted ? (
              <div className="text-center py-10">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="text-2xl font-black text-gray-900 mb-2">
                  Booking Request Sent!
                </h3>
                <p className="text-gray-800">
                  Thank you! We will call you soon at your number.
                </p>
                <p className="text-gray-900 font-bold mt-3">📞 9106177858</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-1">
                      Your Name
                    </label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder="Enter your name"
                      className="w-full rounded-xl px-4 py-3 bg-white text-gray-900 font-medium shadow focus:outline-none focus:ring-2 focus:ring-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-1">
                      Phone Number
                    </label>
                    <input
                      required
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      placeholder="Your mobile number"
                      className="w-full rounded-xl px-4 py-3 bg-white text-gray-900 font-medium shadow focus:outline-none focus:ring-2 focus:ring-gray-900"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-1">
                      From
                    </label>
                    <input
                      required
                      value={form.from}
                      onChange={(e) =>
                        setForm({ ...form, from: e.target.value })
                      }
                      placeholder="Pickup location"
                      className="w-full rounded-xl px-4 py-3 bg-white text-gray-900 font-medium shadow focus:outline-none focus:ring-2 focus:ring-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-1">
                      To
                    </label>
                    <input
                      required
                      value={form.to}
                      onChange={(e) => setForm({ ...form, to: e.target.value })}
                      placeholder="Drop location"
                      className="w-full rounded-xl px-4 py-3 bg-white text-gray-900 font-medium shadow focus:outline-none focus:ring-2 focus:ring-gray-900"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-1">
                    Travel Date
                  </label>
                  <input
                    required
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full rounded-xl px-4 py-3 bg-white text-gray-900 font-medium shadow focus:outline-none focus:ring-2 focus:ring-gray-900"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gray-900 text-yellow-400 py-4 rounded-xl font-black text-lg hover:bg-gray-700 transition shadow-lg mt-2"
                >
                  🚕 Confirm Booking
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-yellow-400 font-bold uppercase tracking-widest text-sm">
            Get In Touch
          </span>
          <h2 className="text-4xl font-black mt-2 mb-4">Contact Us</h2>
          <p className="text-gray-400 max-w-lg mx-auto mb-10">
            Have a question or want to book directly? Reach out to us anytime —
            we&apos;re available 24/7!
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <a
              href="tel:9106177858"
              className="flex flex-col items-center bg-gray-800 hover:bg-yellow-400 hover:text-gray-900 transition rounded-2xl px-8 py-6 shadow-lg group w-52"
            >
              <span className="text-4xl mb-3">📞</span>
              <p className="font-bold text-sm text-gray-400 group-hover:text-gray-700">
                Call Now
              </p>
              <p className="font-black text-yellow-400 group-hover:text-gray-900 text-lg">
                9106177858
              </p>
            </a>
            <a
              href="https://wa.me/919106177858"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center bg-gray-800 hover:bg-green-400 hover:text-gray-900 transition rounded-2xl px-8 py-6 shadow-lg group w-52"
            >
              <span className="text-4xl mb-3">💬</span>
              <p className="font-bold text-sm text-gray-400 group-hover:text-gray-700">
                WhatsApp
              </p>
              <p className="font-black text-green-400 group-hover:text-gray-900 text-lg">
                Chat With Us
              </p>
            </a>
            <div className="flex flex-col items-center bg-gray-800 rounded-2xl px-8 py-6 shadow-lg w-52">
              <span className="text-4xl mb-3">🧑‍✈️</span>
              <p className="font-bold text-sm text-gray-400">Driver</p>
              <p className="font-black text-yellow-400 text-lg">Nilesh</p>
            </div>
            <div className="flex flex-col items-center bg-gray-800 rounded-2xl px-8 py-6 shadow-lg w-52">
              <span className="text-4xl mb-3">🕐</span>
              <p className="font-bold text-sm text-gray-400">Availability</p>
              <p className="font-black text-yellow-400 text-lg">24 / 7</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-2xl">🚕</span>
            <h3 className="text-white font-black text-xl">Jay Mogal Cab Service</h3>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-3">
            <div>
              <p className="text-sm">
                👤 <span className="text-yellow-400 font-bold">Nilesh</span>
              </p>
              <p className="text-sm">
                📞{" "}
                <a
                  href="tel:9106177858"
                  className="text-yellow-400 font-bold hover:underline"
                >
                  9106177858
                </a>
              </p>
            </div>
            <div className="hidden sm:block text-gray-600">|</div>
            <div>
              <p className="text-sm">
                👤 <span className="text-yellow-400 font-bold">Suresh</span>
              </p>
              <p className="text-sm">
                📞{" "}
                <a
                  href="tel:9106178900"
                  className="text-yellow-400 font-bold hover:underline"
                >
                  9106178900
                </a>
              </p>
            </div>
          </div>
          <p className="text-xs mt-4 text-gray-600">
            © {new Date().getFullYear()} Jay Mogal Cab Service. All rights
            reserved.
          </p>
        </div>
      </footer>

      <a
        href="tel:9106177858"
        className="fixed bottom-6 right-6 bg-yellow-400 text-gray-900 rounded-full w-16 h-16 flex items-center justify-center text-3xl shadow-2xl hover:bg-yellow-300 transition z-50 animate-pulse"
      >
        📞
      </a>
    </div>
  );
}
