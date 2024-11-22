import React from 'react';
import { Building2, Building, Home, Shield, Star, Timer, ArrowRight } from 'lucide-react';
import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';
import ServiceCard from './components/ServiceCard';

function App() {
  const services = [
    {
      Icon: Building2,
      title: "Skyskrapor",
      description: "Professionella rengöringslösningar för höghus och kommersiella byggnader",
      image: "https://plus.unsplash.com/premium_photo-1693966067360-f4035e7541e6?q?auto=format&fit=crop&q=80&w=2070",
      features: [
        "Reparbete för rengöring",
        "Högtryckstvätt",
        "Säkerhetscertifierat team",
        "Tillgängliga dygnet runt"
      ]
    },
    {
      Icon: Building,
      title: "Flerfamiljshus",
      description: "Regelbunden underhållsservice för bostadskomplex",
      image: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?auto=format&fit=crop&q=80&w=2070",
      features: [
        "Schemalagt underhåll",
        "Rengöring av gemensamma utrymmen",
        "Balkongglasrengöring",
        "Konkurrenskraftiga priser"
      ]
    },
    {
      Icon: Home,
      title: "Lyxvillor",
      description: "Premium rengöringstjänster för exklusiva bostäder",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=2071",
      features: [
        "Invändig & utvändig rengöring",
        "Rengöring av solpaneler",
        "Detaljerad ramverksrengöring",
        "Miljövänliga lösningar"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <div className="relative h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70 z-10"></div>
            <div className="grid grid-cols-3 h-full">
              <img
                src="https://images.unsplash.com/photo-1545127398-14699f92334b?auto=format&fit=crop&q=80&w=2070"
                alt="Fönsterputs skyskrapa"
                className="object-cover w-full h-full"
              />
              <img
                src="https://images.unsplash.com/photo-1669071192880-0a94316e6e09?auto=format&fit=crop&q=80&w=2070"
                alt="Flerfamiljshus"
                className="object-cover w-full h-full"
              />
              <img
                src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=2071"
                alt="Lyxvilla"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Professionell Fönsterputs<br />för Alla Höjder
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Specialiserade på höghus, skyskrapor och lyxfastigheter
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600"
          >
            Få Gratis Offert
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Våra Tjänster</h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Vi erbjuder specialiserade fönsterputslösningar för alla typer av fastigheter,
            med garanterat skinande resultat och fullständig kundnöjdhet.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Därför Väljer Ni Oss</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fullt Försäkrade</h3>
              <p className="text-gray-600">Omfattande täckning för er trygghet</p>
            </div>
            <div className="text-center">
              <Star className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600">Högutbildade och certifierade proffs</p>
            </div>
            <div className="text-center">
              <Timer className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Punktlig Service</h3>
              <p className="text-gray-600">Effektiva och punktliga rengöringslösningar</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Få en Gratis Offert</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Namn</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-post</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Meddelande</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                Skicka Meddelande
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-orange-500/10 rounded-full transform scale-110 -skew-x-6"></div>
                <h3 className="relative text-xl font-bold mb-4 text-orange-500 px-4 py-1">KristallKlart</h3>
              </div>
              <p className="text-gray-400">Professionell fönsterputs för alla era behov</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Kontakt</h3>
              <p className="text-gray-400">E-post: info@kristallklart.se</p>
              <p className="text-gray-400">Telefon: 08-123 45 67</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Öppettider</h3>
              <p className="text-gray-400">Måndag - Fredag: 08:00 - 18:00</p>
              <p className="text-gray-400">Lördag: 09:00 - 16:00</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} KristallKlart. Alla rättigheter förbehållna.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
