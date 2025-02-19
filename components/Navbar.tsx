'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const whatsappLink = 'https://wa.me/5592992845318';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center z-20">
            <span className="text-2xl font-bold text-red-600">RM</span>
            <span className="ml-1 text-xs text-yellow-400">AUTOESCOLA</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="#inicio" 
              className={`hover:text-red-600 transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Início
            </Link>
            <Link 
              href="#sobre" 
              className={`hover:text-red-600 transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Sobre
            </Link>
            <Link 
              href="#treinamento" 
              className={`hover:text-red-600 transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Centro de Treinamento
            </Link>
            <Link 
              href="#contato" 
              className={`hover:text-red-600 transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Contato
            </Link>
            <Button
              className="bg-red-600 hover:bg-red-700 text-white"
              onClick={() => window.open(whatsappLink, '_blank')}
            >
              Fale Conosco
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-red-600 z-20 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden fixed inset-0 bg-white z-10 transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col space-y-4 px-4 pt-20">
            <Link 
              href="#inicio" 
              className="text-gray-700 hover:text-red-600 transition-colors py-2 text-lg"
              onClick={closeMenu}
            >
              Início
            </Link>
            <Link 
              href="#sobre" 
              className="text-gray-700 hover:text-red-600 transition-colors py-2 text-lg"
              onClick={closeMenu}
            >
              Sobre
            </Link>
            <Link 
              href="#treinamento" 
              className="text-gray-700 hover:text-red-600 transition-colors py-2 text-lg"
              onClick={closeMenu}
            >
              Centro de Treinamento
            </Link>
            <Link 
              href="#contato" 
              className="text-gray-700 hover:text-red-600 transition-colors py-2 text-lg"
              onClick={closeMenu}
            >
              Contato
            </Link>
            <Button
              className="bg-red-600 hover:bg-red-700 text-white w-full py-4 text-lg mt-4"
              onClick={() => {
                window.open(whatsappLink, '_blank');
                closeMenu();
              }}
            >
              Fale Conosco
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}