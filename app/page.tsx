'use client';

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronDown, Car, Calendar, Award, Users, Clock, ArrowRight, Phone, MapPin, Mail, CheckCircle2, ChevronLeft, ChevronRight, Instagram, Shield, Target, BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [showText, setShowText] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPreRegister, setShowPreRegister] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    category: ''
  });

  const whatsappLink = "https://api.whatsapp.com/send/?phone=559292845318&text=Olá,%20Vim%20através%20do%20site.%20Poderia%20me%20ajudar?&type=phone_number&app_absent=0";
  const mapsLink = "https://www.google.com/maps/place/RM+Auto+Escola+Centro+De+Treinamento+-+Crespo/@-3.1297926,-59.9892042,17z/data=!3m1!4b1!4m6!3m5!1s0x926c05b51e957135:0xeab6a9acd44d253c!8m2!3d-3.1297926!4d-59.9892042!16s%2Fg%2F11sdvp9txs?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D";

  const handlePreRegister = () => {
    setShowPreRegister(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      category: ''
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    setShowText(true);

    let currentCard = 0;
    const interval = setInterval(() => {
      setActiveCard(currentCard);
      currentCard = (currentCard + 1) % benefits.length;
    }, 3000);

    const slideInterval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
      clearInterval(slideInterval);
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % trainingImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + trainingImages.length) % trainingImages.length);
  };

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  const trainingImages = [
    {
      src: "/img/1.jpeg",
      alt: "Pista de treinamento",
      description: "Pista de treinamento com sinalização completa"
    },
    {
      src: "/img/2.jpeg",
      alt: "Frota de veículos",
      description: "Frota moderna e diversificada"
    },
    {
      src: "/img/3.jpeg",
      alt: "Treinamento prático",
      description: "Área de treinamento prático"
    },
    {
      src: "/img/4.jpeg",
      alt: "Estrutura",
      description: "Estrutura completa para seu aprendizado"
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Processo Rápido",
      description: "Conclusão em apenas 90 dias com acompanhamento personalizado",
      color: "from-red-500/10 to-transparent"
    },
    {
      icon: Car,
      title: "Frota Moderna",
      description: "Veículos novos e equipados para melhor aprendizado",
      color: "from-blue-500/10 to-transparent"
    },
    {
      icon: Award,
      title: "Instrutores Qualificados",
      description: "Profissionais experientes e certificados",
      color: "from-green-500/10 to-transparent"
    },
    {
      icon: Users,
      title: "Suporte Completo",
      description: "Atendimento humanizado em todas as etapas",
      color: "from-purple-500/10 to-transparent"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Pré-cadastro",
      description: "Faça seu cadastro inicial online"
    },
    {
      number: "02",
      title: "Documentação",
      description: "Envie os documentos necessários"
    },
    {
      number: "03",
      title: "Aulas Teóricas",
      description: "Participe das aulas teóricas"
    },
    {
      number: "04",
      title: "Aulas Práticas",
      description: "Inicie as aulas práticas"
    }
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Credibilidade",
      description: "+ 4 anos de experiência e mais de 1.500 alunos formados"
    },
    {
      icon: Target,
      title: "Aprovação Garantida",
      description: "98% de taxa de aprovação em primeira tentativa"
    },
    {
      icon: Clock,
      title: "Agilidade",
      description: "Processo completo em apenas 90 dias"
    },
    {
      icon: BookOpen,
      title: "Metodologia Exclusiva",
      description: "Material didático atualizado e aulas práticas personalizadas"
    }
  ];

  const achievements = [
    { number: "7.5k+", label: "Alunos Formados" },
    { number: "15+", label: "Anos de Experiência" },
    { number: "98%", label: "Taxa de Aprovação" },
    { number: "100%", label: "Satisfação" }
  ];

  const features = [
    "Metodologia moderna e eficiente",
    "Instrutores altamente qualificados",
    "Ambiente acolhedor e profissional",
    "Suporte personalizado"
  ];

  const pricingPlans = [
    {
      title: "Primeira Habilitação A",
      category: "Categoria A - Motocicleta",
      prices: {
        vista: "R$ 900,00",
        boleto1: {
          total: "R$ 1.200,00",
          details: "R$400,00 + 2x R$400,00"
        },
        boleto2: {
          total: "R$ 1.200,00",
          details: "R$300,00 + 3x R$300,00"
        }
      }
    },
    {
      title: "Primeira Habilitação AB",
      category: "Categoria AB - Carro e Moto",
      prices: {
        vista: "R$ 1.750,00",
        boleto1: {
          total: "R$ 2.100,00",
          details: "R$800,00 + 2x R$650,00"
        },
        boleto2: {
          total: "R$ 2.100,00",
          details: "R$525,00 + 3x R$525,00"
        }
      }
    },
    {
      title: "Primeira Habilitação B",
      category: "Categoria B - Carro",
      prices: {
        vista: "R$ 1.300,00",
        boleto1: {
          total: "R$ 1.520,00",
          details: "R$600,00 + 2x R$460,00"
        },
        boleto2: {
          total: "R$ 1.520,00",
          details: "R$380,00 + 3x R$380,00"
        }
      }
    }
  ];

  return (
    <main className="bg-white">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 py-3 shadow-lg backdrop-blur-sm' : 'bg-transparent py-4'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="text-white font-bold text-2xl flex items-center">
              <span className="text-red-600">RM</span>
              <span className="text-yellow-400 ml-1 text-xs">AUTOESCOLA</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link 
                href="#inicio" 
                className="text-white text-sm font-medium hover:text-red-500 transition-colors relative group"
              >
                Início
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link 
                href="#sobre" 
                className="text-white text-sm font-medium hover:text-red-500 transition-colors relative group"
              >
                Sobre
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link 
                href="#servicos" 
                className="text-white text-sm font-medium hover:text-red-500 transition-colors relative group"
              >
                Serviços
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link 
                href="#duvidas" 
                className="text-white text-sm font-medium hover:text-red-500 transition-colors relative group"
              >
                Dúvidas
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Button 
                className="bg-red-600 hover:bg-red-700 text-white rounded-full px-6 transition-transform hover:scale-105"
                onClick={() => window.open(whatsappLink, '_blank')}
              >
                Contato
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section id="inicio" className="relative h-screen flex items-center justify-center bg-black">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60 z-10" />
          <div className="relative w-full h-full">
            <Image
              src="/img/background.png"
              alt="Driving school background"
              fill
              className="object-cover opacity-80"
              priority
            />
          </div>
        </div>
        <div className="relative z-20 text-center text-white px-4 max-w-5xl mx-auto">
          <h1 className="text-xl md:text-2xl font-light mb-4 tracking-wider text-yellow-400 fade-in">
            [ NA RM AUTOESCOLA VOCÊ CONCLUI SEU ]
          </h1>
          <div className="flex items-center justify-center gap-6 text-4xl md:text-7xl font-bold overflow-hidden">
            <div className="flex gap-4 items-center">
              <span className="word-animation word-animation-delay-1">processo</span>
              <span className="word-animation word-animation-delay-2">em</span>
              <span className="text-red-600 ml-6 slide-in">90 dias</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 justify-center mt-12">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8 py-6 text-lg transition-transform hover:scale-105"
              onClick={() => window.open(whatsappLink, '_blank')}
            >
              Entre em contato
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20 rounded-full px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
              onClick={() => setShowPreRegister(true)}
            >
              Pré cadastro
            </Button>
          </div>
        </div>
        <div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white text-center cursor-pointer transition-transform hover:translate-y-1"
          onClick={scrollToContent}
        >
          <p className="mb-2 text-sm tracking-wider">ROLE PARA VER MAIS</p>
          <ChevronDown className="animate-bounce mx-auto" size={24} />
        </div>
      </section>

      <Dialog open={showPreRegister} onOpenChange={setShowPreRegister}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Escolha uma das nossas categorias</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Input
              placeholder="Nome Completo*"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <Input
              placeholder="Telefone/Whatsapp*"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
            <Input
              placeholder="Email*"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <Select
              value={formData.category}
              onValueChange={(value) => setFormData({ ...formData, category: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione A Categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="moto">Categoria A - Moto</SelectItem>
                <SelectItem value="carro">Categoria B - Carro</SelectItem>
                <SelectItem value="carro-moto">Categoria A/B - Carro/Moto</SelectItem>
                <SelectItem value="onibus">Categoria D - Ônibus</SelectItem>
              </SelectContent>
            </Select>
            <Button 
              className="w-full bg-red-600 hover:bg-red-700 text-white"
              onClick={handlePreRegister}
            >
              Enviar
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative z-20 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/img/quemsomos.png"
                  alt="Quem Somos RM Autoescola"
                  width={600}
                  height={400}
                  className="object-cover w-full h-[500px]"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 z-10 w-72 h-72 bg-red-50 rounded-full" />
              <div className="absolute -top-6 -left-6 z-10 w-48 h-48 bg-yellow-50 rounded-full" />
            </div>

            <div className="relative z-20">
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-red-50 rounded-full">
                  <span className="text-red-600 font-medium">Quem Somos</span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900">
                  Sua jornada para a habilitação começa aqui
                </h2>
                <p className="text-gray-600 text-lg">
                  Há mais de 4 anos, a RM Autoescola tem sido referência em formação de condutores. 
                  Nossa missão é proporcionar um aprendizado seguro, eficiente e personalizado, 
                  garantindo que cada aluno alcance seus objetivos com excelência.
                </p>
                
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="text-red-600 w-5 h-5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8 py-6 text-lg mt-6"
                  onClick={() => window.open(whatsappLink, '_blank')}
                >
                  Conheça nossa estrutura
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-4xl font-bold text-red-600 mb-2 transform transition-transform duration-300 group-hover:scale-110">
                  {achievement.number}
                </div>
                <div className="text-gray-600">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white text-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-50" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 slide-up">
            <span className="inline-block px-4 py-2 bg-red-50 rounded-full text-red-600 text-sm font-medium mb-4">
              Nossa Estrutura
            </span>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Centro de Treinamento
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
             Nossa autoescola possui centro de treinamento próprio, 
             amplo espaçoso e ideal que vai te proporcionar a tão almejada aprovação. 🚀🚀🚀.

              Faça parte do autoescola que mais aprova em Manaus!
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto slide-up slide-up-delay-1">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl hover-scale">
              <Image
                src={trainingImages[currentSlide].src}
                alt={trainingImages[currentSlide].alt}
                fill
                className="object-cover transition-all duration-500 image-fade"
              />
              <div className="absolute inset-0 gradient-overlay" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white text-xl font-medium">
                  {trainingImages[currentSlide].description}
                </p>
              </div>
            </div>

            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-red-600/90 hover:bg-red-700 text-white p-3 rounded-full backdrop-blur-sm transition-all hover:scale-110 shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-red-600/90 hover:bg-red-700 text-white p-3 rounded-full backdrop-blur-sm transition-all hover:scale-110 shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="flex justify-center mt-6 gap-2">
              {trainingImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-red-600 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="slide-up slide-up-delay-1">
              <Card className="bg-white border border-gray-100 p-6 shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-red-600 to-red-700 rounded-lg text-white transform transition-transform group-hover:rotate-6">
                    <Car className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Pista Sinalizada</h3>
                    <p className="text-gray-600">
                      Ambiente realista com sinalização completa para melhor preparação
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="slide-up slide-up-delay-2">
              <Card className="bg-white border border-gray-100 p-6 shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-red-600 to-red-700 rounded-lg text-white transform transition-transform group-hover:rotate-6">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Instrutores Dedicados</h3>
                    <p className="text-gray-600">
                      Profissionais experientes para acompanhar seu progresso
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="slide-up slide-up-delay-3">
              <Card className="bg-white border border-gray-100 p-6 shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-red-600 to-red-700 rounded-lg text-white transform transition-transform group-hover:rotate-6">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Estrutura Completa</h3>
                    <p className="text-gray-600">
                      Toda infraestrutura necessária para seu aprendizado
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div className="text-center mt-12 slide-up slide-up-delay-3">
            <Button 
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-full px-8 py-6 text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => window.open(whatsappLink, '_blank')}
            >
              Agende uma Visita
            </Button>
          </div>
        </div>
      </section>

      <section id="processo" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-red-50 rounded-full text-red-600 text-sm font-medium mb-4">
              Processo Simplificado
            </span>
            <h2 className="text-4xl font-bold mb-6">Como funciona?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Conquistar sua habilitação nunca foi tão fácil. Conheça nosso processo passo a passo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <Card className="bg-white border border-gray-100 p-8 text-center hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-red-50 rounded-full -mr-12 -mt-12 opacity-50" />
                  <span className="text-5xl font-bold text-red-600 mb-6 block">{step.number}</span>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                  <ArrowRight className="absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 text-red-600" />
                </Card>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[2px] bg-red-200" />
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
              onClick={() => window.open(whatsappLink, '_blank')}
            >
              Comece Agora
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
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
            {whyChooseUs.map((item, index) => (
              <div key={index} className="group">
                <Card className="p-6 hover:shadow-xl transition-all duration-300 bg-white border-gray-100 h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-8 h-8 text-red-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
              onClick={() => window.open(whatsappLink, '_blank')}
            >
              Fale Conosco </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Escolha seu curso</h2>
            <p className="text-gray-600">
              Oferecemos diferentes categorias de habilitação para atender suas necessidades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Car className="w-6 h-6 text-red-600" />
                    <div>
                      <h3 className="text-lg font-bold">{plan.title}</h3>
                      <p className="text-sm text-gray-600">{plan.category}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-600">À VISTA</p>
                      <p className="text-2xl font-bold">{plan.prices.vista}</p>
                    </div>

                    <div className="border-t pt-4">
                      <p className="text-sm text-gray-600">BOLETO 1 + 2</p>
                      <p className="text-xl font-semibold">{plan.prices.boleto1.total}</p>
                      <p className="text-sm text-gray-500">{plan.prices.boleto1.details}</p>
                    </div>

                    <div className="border-t pt-4">
                      <p className="text-sm text-gray-600">BOLETO 1 + 3</p>
                      <p className="text-xl font-semibold">{plan.prices.boleto2.total}</p>
                      <p className="text-sm text-gray-500">{plan.prices.boleto2.details}</p>
                    </div>

                    <div className="border-t pt-4">
                      <p className="text-sm text-gray-600">CARTÃO</p>
                      <p className="text-base font-semibold">ATÉ 12X COM JUROS</p>
                      <p className="text-xs text-gray-500 mt-1">
                        Não incluso taxas DETRAN, CLÍNICA, LADV e TOXICOLÓGICO
                      </p>
                    </div>
                  </div>

                  <Button 
                    className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white"
                    onClick={() => window.open(whatsappLink, '_blank')}
                  >
                    Saiba Mais
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Dúvidas sobre nossos serviços?</p>
            <Button 
              className="bg-gray-900 hover:bg-gray-800 text-white"
              onClick={() => window.open(whatsappLink, '_blank')}
            >
              Fale Conosco
            </Button>
          </div>
        </div>
      </section>

      <section id="contato" className="py-24 bg-gray-50">
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
    </main>
  );
}
