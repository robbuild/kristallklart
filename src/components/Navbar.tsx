import { Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <div className="relative flex items-center">
              <div className="absolute inset-0 bg-orange-500/10 rounded-full transform scale-110 -skew-x-6"></div>
              <div className="relative px-4 py-1">
                <span className="text-2xl font-bold text-orange-500">KristallKlart</span>
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-orange-500">Tjänster</a>
            <a href="#about" className="text-gray-700 hover:text-orange-500">Om Oss</a>
            <a href="#projects" className="text-gray-700 hover:text-orange-500">Projekt</a>
            <a href="#contact" className="text-gray-700 hover:text-orange-500">Kontakt</a>
            <a href="tel:+4670-887 28 81" className="flex items-center text-orange-500 font-semibold">
              <Phone className="w-4 h-4 mr-2" />
              070-887 28 81
            </a>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-orange-500">Tjänster</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-orange-500">Om Oss</a>
            <a href="#projects" className="block px-3 py-2 text-gray-700 hover:text-orange-500">Projekt</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-orange-500">Kontakt</a>
            <a href="tel:08-12345678" className="flex items-center px-3 py-2 text-orange-500 font-semibold">
              <Phone className="w-4 h-4 mr-2" />
              070-887 28 81
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}