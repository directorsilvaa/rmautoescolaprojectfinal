'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import PreRegistrationModal from '@/components/PreRegistrationModal';
import { 
  Heart, 
  MessageCircle, 
  MapPin, 
  Phone, 
  Clock, 
  Instagram, 
  CheckCircle2,
  Shield,
  Target,
  Clock3,
  BookOpen
} from 'lucide-react';

const whatsappLink = 'https://wa.me/5592992845318';
const mapsLink = 'https://maps.google.com/?q=Avenida+Tefé+988+Japiim+Manaus+AM';
const instagramLink = 'https://www.instagram.com/rm.autoescola/';

const instagramPosts = [
  {
    id: 1,
    videoUrl: '/img/video01.mp4',
    caption: 'Mais uma turma concluindo o processo com sucesso! 🎉',
    likes: 124,
    comments: 18
  },
  {
    id: 2,
    videoUrl: '/img/video02.mp4',
    caption: 'Aulas práticas com os melhores instrutores 🚗',
    likes: 98,
    comments: 12
  },
  {
    id: 3,
    videoUrl: '/img/video03.mp4',
    caption: 'Parabéns aos novos motoristas aprovados! 👏',
    likes: 156,
    comments: 24
  },
  {
    id: 4,
    videoUrl: '/img/video04.mp4',
    caption: 'Estrutura completa para seu aprendizado 🏢',
    likes: 87,
    comments: 9
  }
];

const StatisticCounter = ({ end, suffix = '', label }: { end: number, suffix?: string, label: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number;
    const duration = 2000; // 2 seconds

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [end]);

  return (
    <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="text-4xl font-bold text-red-600 mb-2">
        {count}{suffix}
      </div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
};

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Navbar />
      <PreRegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      {/* Hero Section */}
      <section id="inicio" className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/img/background.png"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-yellow-400">[ NA RM AUTOESCOLA VOCÊ CONCLUI SEU ]</span>
            <br />
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="typing-text inline-block">
                <span className="text-white">processo em </span>
                <span className="text-red-600">90 dias</span>
              </div>
            </div>
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg rounded-full"
              onClick={() => window.open(whatsappLink, '_blank')}
            >
              Entre em contato
            </Button>
            <Button
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full"
              onClick={() => setIsModalOpen(true)}
            >
              Pré cadastro
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 text-white">
          <div className="flex flex-col items-center justify-center space-y-2">
            <p className="text-sm font-medium tracking-wider">ROLE PARA VER MAIS</p>
            <div className="animate-bounce">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Quem Somos Section */}
      <section id="sobre" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/img/quemsomos.png"
                alt="Quem Somos RM Autoescola"
                width={600}
                height={400}
                className="object-cover rounded-2xl shadow-xl"
              />
            </div>
            
            <div className="space-y-6">
              <span className="inline-block px-4 py-2 bg-red-50 rounded-full text-red-600 text-sm font-medium">
                Quem Somos
              </span>
              <h2 className="text-4xl font-bold">Sua jornada para a habilitação começa aqui</h2>
              <p className="text-gray-600 text-lg">
                Há mais de 4 anos, a RM Autoescola tem sido referência em formação de
                condutores. Nossa missão é proporcionar um aprendizado seguro, eficiente e
                personalizado, garantindo que cada aluno alcance seus objetivos com excelência.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-red-600" />
                  </div>
                  <span className="text-gray-700">Metodologia moderna e eficiente</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-red-600" />
                  </div>
                  <span className="text-gray-700">Instrutores altamente qualificados</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-red-600" />
                  </div>
                  <span className="text-gray-700">Ambiente acolhedor e profissional</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-red-600" />
                  </div>
                  <span className="text-gray-700">Suporte personalizado</span>
                </div>
              </div>

              <Button
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg rounded-full"
                onClick={() => window.open(whatsappLink, '_blank')}
              >
                Conheça nossa estrutura
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <StatisticCounter end={7500} suffix="+" label="Alunos Formados" />
            <StatisticCounter end={3} suffix="+" label="Anos de Experiência" />
            <StatisticCounter end={98} suffix="%" label="Taxa de Aprovação" />
            <StatisticCounter end={100} suffix="%" label="Satisfação" />
          </div>
        </div>
      </section>

      {/* Por que nos escolher Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-red-50 rounded-full text-red-600 text-sm font-medium mb-4">
              Por que nos escolher?
            </span>
            <h2 className="text-4xl font-bold mb-6">Excelência em cada detalhe</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Descubra por que somos a escolha certa para sua habilitação
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Credibilidade</h3>
              <p className="text-gray-600">+ 4 anos de experiência e mais de 1.500 alunos formados</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Aprovação Garantida</h3>
              <p className="text-gray-600">98% de taxa de aprovação em primeira tentativa</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6">
                <Clock3 className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Agilidade</h3>
              <p className="text-gray-600">Processo completo em apenas 90 dias</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6">
                <BookOpen className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Metodologia Exclusiva</h3>
              <p className="text-gray-600">Material didático atualizado e aulas práticas personalizadas</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg rounded-full"
              onClick={() => window.open(whatsappLink, '_blank')}
            >
              Fale Conosco
            </Button>
          </div>
        </div>
      </section>

      {/* Centro de Treinamento Section */}
      <section id="treinamento" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-red-50 rounded-full text-red-600 text-sm font-medium mb-4">
              Centro de Treinamento
            </span>
            <h2 className="text-4xl font-bold mb-6">Estrutura Completa para seu Aprendizado</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Conheça nossa estrutura moderna e completa, projetada para oferecer o melhor ambiente de aprendizado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/img/campo1.jpeg"
                  alt="Sala de Aula"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>

            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/img/campo2.jpeg"
                  alt="Simulador"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>

            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/img/campo3.jpeg"
                  alt="Frota"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>

            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/img/campo4.jpeg"
                  alt="Área de Treinamento"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg rounded-full"
              onClick={() => window.open(whatsappLink, '_blank')}
            >
              Agende uma Visita
            </Button>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-red-50 rounded-full text-red-600 text-sm font-medium mb-4">
              Instagram
            </span>
            <h2 className="text-4xl font-bold mb-6">Siga nosso Instagram</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Acompanhe nosso dia a dia, dicas e conquistas dos nossos alunos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {instagramPosts.map((post) => (
              <div key={post.id} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-square">
                  <video
                    src={post.videoUrl}
                    className="w-full h-full object-cover"
                    loop
                    muted
                    playsInline
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => {
                      e.currentTarget.pause();
                      e.currentTarget.currentTime = 0;
                    }}
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center p-4">
                      <div className="flex justify-center gap-6 mb-4">
                        <div className="flex items-center gap-2">
                          <Heart className="w-5 h-5" />
                          <span>{post.likes}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MessageCircle className="w-5 h-5" />
                          <span>{post.comments}</span>
                        </div>
                      </div>
                      <p className="text-sm">{post.caption}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
              onClick={() => window.open(instagramLink, '_blank')}
            >
              Siga-nos no Instagram
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-red-50 rounded-full text-red-600 text-sm font-medium mb-4">
              Contato
            </span>
            <h2 className="text-4xl font-bold mb-6">Entre em Contato</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Estamos aqui para ajudar você a conquistar sua habilitação
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Unidade Centro</h3>
              <p className="text-gray-600 mb-6">Atendimento e aulas práticas</p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-red-600 w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Avenida Tefé, 988</p>
                    <p className="text-gray-600">Japiim, Manaus - AM, 69078000</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="text-red-600 w-5 h-5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">(92) 99284-5318</p>
                    <p className="text-gray-600">Horário comercial</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="text-red-600 w-5 h-5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">08:00 - 18:00</p>
                    <p className="text-gray-600">Segunda à Sexta</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 md:mt-8">
                <Button 
                  className="w-full bg-red-600 hover:bg-red-700 text-white"
                  onClick={() => window.open(whatsappLink, '_blank')}
                >
                  Fale com um Especialista
                </Button>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden h-[300px] md:h-[400px]">
              <Image
                src="/img/fachada.png"
                alt="Localização RM Autoescola"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <Button 
                  className="w-full bg-white hover:bg-gray-100 text-gray-900"
                  onClick={() => window.open(mapsLink, '_blank')}
                >
                  Como Chegar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          {/* Top Footer */}
          <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div className="space-y-6">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-red-600">RM</span>
                <span className="text-yellow-400 ml-1 text-xs">AUTOESCOLA</span>
              </div>
              <p className="text-gray-400 text-sm">
                Sua jornada para a habilitação começa aqui. Há mais de 4 anos formando condutores com excelência e segurança.
              </p>
              <div className="flex space-x-4">
                <a 
                  href={instagramLink}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Links Rápidos</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="#inicio" className="text-gray-400 hover:text-white transition-colors">
                    Início
                  </Link>
                </li>
                <li>
                  <Link href="#sobre" className="text-gray-400 hover:text-white transition-colors">
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link href="#servicos" className="text-gray-400 hover:text-white transition-colors">
                    Serviços
                  </Link>
                </li>
                <li>
                  <Link href="#contato" className="text-gray-400 hover:text-white transition-colors">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Serviços</h3>
              <ul className="space-y-4">
                <li className="text-gray-400">Primeira Habilitação</li>
                <li className="text-gray-400">Renovação de CNH</li>
                <li className="text-gray-400">Mudança de Categoria</li>
                <li className="text-gray-400">Aulas Práticas</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contato</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-400">
                  <MapPin className="w-5 h-5 text-red-600" />
                  <span>Avenida Tefé, 988, Japiim</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <Phone className="w-5 h-5 text-red-600" />
                  <span>(92) 99284-5318</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <Clock className="w-5 h-5 text-red-600" />
                  <span>Seg - Sex: 08:00 - 18:00</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 py-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} RM Autoescola. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}