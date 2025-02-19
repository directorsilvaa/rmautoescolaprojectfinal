'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PreRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PreRegistrationModal({ isOpen, onClose }: PreRegistrationModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    category: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-[90%] sm:max-w-md p-4 sm:p-6 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute right-2 sm:right-4 top-2 sm:top-4 text-gray-500 hover:text-gray-700 p-2"
        >
          <X size={24} />
        </button>

        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 pr-8">
          Escolha uma das nossas categorias
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Nome Completo*"
              className="w-full p-3 border rounded-lg text-base"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div>
            <input
              type="tel"
              placeholder="Telefone/Whatsapp*"
              className="w-full p-3 border rounded-lg text-base"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Email*"
              className="w-full p-3 border rounded-lg text-base"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div>
            <select
              className="w-full p-3 border rounded-lg text-base"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              required
            >
              <option value="">Selecione A Categoria</option>
              <option value="moto">Categoria A - Moto</option>
              <option value="carro">Categoria B - Carro</option>
              <option value="carro-moto">Categoria A/B - Carro/Moto</option>
              <option value="onibus">Categoria D - Ônibus</option>
            </select>
          </div>

          <Button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-lg text-base"
          >
            Enviar
          </Button>
        </form>
      </div>
    </div>
  );
}