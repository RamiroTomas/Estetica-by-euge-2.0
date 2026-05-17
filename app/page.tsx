'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Script from 'next/script';
import { 
  Instagram, 
  MapPin, 
  Star, 
  ChevronRight, 
  Clock, 
  Menu,
  X,
  Calendar as CalendarIcon
} from 'lucide-react';
import Image from 'next/image';

export default function NailSalonPage() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isPriceListOpen, setIsPriceListOpen] = React.useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = React.useState(false);
  const [galleryIndex, setGalleryIndex] = React.useState(0);

  const galleryImages = [1, 2, 3, 4, 5, 6];

  React.useEffect(() => {
    // Gallery interval
    const interval = setInterval(() => {
      setGalleryIndex((prev) => prev + 1);
    }, 10000);
    
    return () => {
      clearInterval(interval);
    };
  }, []);

  const priceList = [
    {
      category: "ESMALTADO SEMIPERMANENTE",
      seña: "$345",
      items: [
        { label: "Esmaltado Semi", price: "$690" },
        { label: "Lisas", price: "$690" },
        { label: "Diseño en 2 uñas", price: "$750" },
        { label: "Diseño en 3 o más uñas", price: "$790" }
      ]
    },
    {
      category: "PIES",
      seña: "$350",
      items: [
        { label: "Estética de pies", price: "$750" },
        { label: "Pies lisos", price: "$700" },
        { label: "Pies con diseño", price: "$790" }
      ]
    },
    {
      category: "KAPPING EN GEL + SEMIPERMANENTE",
      seña: "$395",
      items: [
        { label: "Lisas", price: "$790" },
        { label: "Diseño en 2 uñas", price: "$850" },
        { label: "Diseño en 3 o más uñas", price: "$890" }
      ]
    },
    {
      category: "DISEÑOS CON PEDRERIA",
      items: [
        { label: "Costo extra", price: "" }
      ]
    }
  ];

  const timeSlots = ["10:00", "11:30", "13:00", "15:30", "17:00", "18:30"];

  return (
    <div className="flex-1 overflow-y-auto overflow-x-hidden bg-beige selection:bg-lilac selection:text-charcoal">
      {/* Price List Modal */}
      <AnimatePresence>
        {isPriceListOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-charcoal/60 backdrop-blur-sm"
            onClick={() => setIsPriceListOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-beige w-full max-w-lg p-1 rounded-2xl relative shadow-2xl border border-forest/10"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsPriceListOpen(false)}
                className="absolute top-6 right-6 text-forest/30 hover:text-lilac transition-colors z-20"
              >
                <X size={24} />
              </button>

              <div className="bg-beige px-8 py-10 rounded-2xl text-center">
                <div className="relative mb-8 inline-block">
                  <h2 className="serif text-5xl md:text-6xl text-forest leading-none uppercase tracking-tighter">Lista de Precios</h2>
                </div>

                <div className="space-y-8 mt-12 bg-warm-gray/30 p-6 md:p-8 rounded-3xl text-left overflow-y-auto max-h-[60vh] no-scrollbar">
                  {priceList.map((section, idx) => (
                    <div key={idx} className="space-y-3">
                      <h3 className="text-xs font-black tracking-widest text-forest/60 uppercase">{section.category}</h3>
                      {section.seña && (
                        <p className="text-[10px] font-bold text-sage uppercase tracking-widest">SEÑA: {section.seña}</p>
                      )}
                      <div className="space-y-2">
                        {section.items.map((item, i) => (
                          <div key={i} className="flex justify-between items-end border-b border-forest/5 pb-1">
                            <span className="text-sm serif italic text-forest/80">{item.label}</span>
                            <span className="text-sm font-bold text-forest tracking-wider">{item.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div className="pt-4 text-center">
                    <p className="text-[8px] uppercase tracking-[0.4em] text-cream/30">ESTETICA.BY.EUGE</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Booking Modal */}
      <AnimatePresence>
        {isBookingModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center p-0 md:p-4 bg-charcoal/80 backdrop-blur-md"
            onClick={() => setIsBookingModalOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white w-full max-w-4xl h-full md:h-[90vh] rounded-none md:rounded-3xl relative shadow-2xl overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsBookingModalOpen(false)}
                className="absolute top-4 right-4 text-charcoal/50 hover:text-lilac transition-colors z-50 bg-white/80 p-2 rounded-full backdrop-blur-sm"
              >
                <X size={24} />
              </button>
              
              <div className="w-full h-full pt-12 md:pt-0">
                <iframe
                  src="https://esteticabyeuge.setmore.com"
                  width="100%"
                  height="100%"
                  style={{ border: "none" }}
                  title="Reservas Estética by Euge"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 border-b border-beige/5 bg-forest/80 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-md bg-forest">
            <Image 
              src="/logo.png" 
              alt="Estetica by Euge Logo" 
              fill 
              className="object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="text-sm md:text-lg font-semibold tracking-widest uppercase text-beige">ESTETICA BY EUGE</span>
        </div>
        
        <div className="hidden md:flex gap-8 text-[10px] lg:text-xs font-semibold tracking-tighter uppercase text-beige/70">
          <a href="#inicio" className="hover:text-lilac transition-colors">Inicio</a>
          <a href="#servicios" className="hover:text-lilac transition-colors">Servicios</a>
          <a href="#galeria" className="hover:text-lilac transition-colors">Galería</a>
          <a href="#contacto" className="hover:text-lilac transition-colors">Contacto</a>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsBookingModalOpen(true)}
            className="bg-lilac text-forest px-4 md:px-6 py-2 text-[10px] md:text-xs uppercase tracking-widest hover:bg-forest hover:text-lilac transition-all duration-300 font-bold shadow-md rounded-sm"
          >
            Reserva Ahora
          </button>
          <button 
            className="md:hidden text-beige"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-40 bg-white pt-20 px-6 md:hidden"
        >
          <div className="flex flex-col gap-6 text-xl serif italic text-center">
            <a href="#inicio" onClick={() => setIsMenuOpen(false)}>Inicio</a>
            <a href="#servicios" onClick={() => setIsMenuOpen(false)}>Servicios</a>
            <a href="#galeria" onClick={() => setIsMenuOpen(false)}>Galería</a>
            <a href="#contacto" onClick={() => setIsMenuOpen(false)}>Contacto</a>
          </div>
        </motion.div>
      )}

      <main>
        {/* Hero Section - Edge to edge layout */}
        <section id="inicio" className="relative min-h-[calc(100vh-64px)] grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
          {/* Left Text content */}
          <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16 bg-beige relative">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <span className="text-sage font-bold serif italic text-lg md:text-xl mb-4 block">Un espacio pensado para mimarte</span>
              <h1 className="text-5xl md:text-8xl serif font-light leading-[0.85] mb-8 text-charcoal">
                Estilo &<br />
                <span className="text-forest">Diferencia</span>
              </h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-sm md:text-base text-charcoal/70 mb-10 max-w-sm leading-relaxed"
              >
                Especialista con mas de 6 años de experiencia en manicura rusa, kapping y esmaltado semipermanente.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 sm:items-center"
              >
                <button 
                  onClick={() => setIsBookingModalOpen(true)}
                  className="bg-forest text-cream px-10 py-5 text-[10px] uppercase tracking-widest hover:bg-lilac hover:text-forest transition-all text-center font-bold shadow-xl rounded-sm"
                >
                  Agendar Mi Cita
                </button>
                <div className="flex items-center gap-3 text-[10px] font-bold text-forest/60">
                  <div className="w-12 h-px bg-lilac"></div>
                  +6 Años Creando Arte
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Image - Edge to edge */}
          <div className="relative bg-warm-gray overflow-hidden min-h-[400px] lg:min-h-full">
            <motion.div 
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0"
            >
              <Image 
                src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80&w=1000"
                alt="Nail Art Design"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-beige/10 mix-blend-multiply"></div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute bottom-10 right-10 glass p-8 w-80 shadow-2xl z-10 border-lilac/30"
            >
              <h3 className="serif text-2xl italic mb-3 text-forest">Garantía Euge</h3>
              <p className="text-xs italic text-charcoal leading-relaxed mb-6">
                &quot;El nivel de detalle es insuperable. Mi lugar de confianza para Kapping y Semipermanente.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-lilac flex items-center justify-center text-xs font-bold text-forest">EF</div>
                <div>
                  <p className="text-sm font-bold text-forest leading-none">María G.</p>
                  <p className="text-[10px] text-sage font-bold uppercase tracking-tighter mt-1">Cliente Frecuente</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories Section - Replacing grid with a "View Full Prices" CTA */}
        <section id="servicios" className="py-32 px-6 md:px-12 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-end mb-20 gap-8 relative z-10 text-center md:text-left">
            <div>
              <span className="text-forest font-black serif italic text-lg mb-2 block tracking-widest">Mis Precios</span>
              <h2 className="text-5xl md:text-7xl serif font-light text-forest leading-tight">Manos y <span className="text-lilac">Pies</span></h2>
            </div>
            <div className="md:text-right flex flex-col items-center md:items-end">
              <p className="text-xs text-forest/40 max-w-xs mb-6 uppercase tracking-[0.3em] font-bold">
                Detalle, cuidado y calidad en cada sesion
              </p>
              <button 
                onClick={() => setIsPriceListOpen(true)}
                className="inline-flex items-center gap-3 bg-forest text-lilac px-10 py-5 text-xs uppercase tracking-[0.2em] font-black hover:bg-lilac hover:text-forest transition-all"
              >
                Ver Lista de Precios <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                title: "Manicura Rusa", 
                desc: "Limpieza anatómica total para un crecimiento saludable y estético.",
                img: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80&w=800"
              },
              { 
                title: "Kapping Profesional", 
                desc: "Capa protectora de gel para uñas que necesitan fuerza extra sin perder naturalidad.",
                img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800"
              },
              { 
                title: "Esmaltado Semi", 
                desc: "Color vibrante y duradero con un acabado profesional perfecto.",
                img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800"
              },
              { 
                title: "Estética de Pies", 
                desc: "Cuidado integral para tus pies, dejándolos suaves, sanos y prolijos.",
                img: "https://images.unsplash.com/photo-1519415510236-83170f82b7c3?auto=format&fit=crop&q=80&w=800"
              },
              { 
                title: "Diseño de Autor", 
                desc: "Nail art personalizado. Desde minimalismo elegante hasta creaciones complejas.",
                img: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=800"
              }
            ].map((cat, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group relative h-[450px] overflow-hidden rounded-3xl"
              >
                <Image src={cat.img} alt={cat.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-forest/40 group-hover:bg-forest/60 transition-colors"></div>
                <div className="absolute bottom-0 left-0 w-full p-8 text-cream">
                  <h3 className="serif text-3xl italic mb-3">{cat.title}</h3>
                  <p className="text-sm opacity-80 leading-relaxed font-light">{cat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Gallery Section - Soft Lilac (Violetita) */}
        <section id="galeria" className="py-24 bg-[#F8F7FF] overflow-hidden">
          <div className="px-6 md:px-12 max-w-7xl mx-auto mb-16 text-center">
             <span className="text-lilac font-black uppercase tracking-[0.5em] text-[10px] mb-4 block">Mira nuestro feed</span>
            <h2 className="text-4xl md:text-6xl serif font-light text-forest italic leading-none">Galería de Trabajos</h2>
          </div>
          
          <div className="relative h-[550px] overflow-hidden group">
            <motion.div 
              animate={{ 
                x: `-${(galleryIndex % galleryImages.length) * 350}px` 
              }}
              transition={{ 
                duration: 0.8,
                ease: [0.32, 0.72, 0, 1]
              }}
              className="flex gap-6 px-6"
            >
              {[...galleryImages, ...galleryImages, ...galleryImages].map((img, idx) => (
                <div 
                  key={idx} 
                  className="flex-shrink-0 w-80 h-[500px] relative bg-white rounded-3xl overflow-hidden shadow-xl border border-forest/5"
                >
                  <Image 
                    src={`https://picsum.photos/seed/nail-art-${img}/600/900`}
                    alt={`Trabajo realizado ${img}`}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials - Deep Forest Green */}
        <section className="py-32 bg-forest text-lilac overflow-hidden relative">
          <div className="absolute top-0 right-0 opacity-10 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
            <span className="text-[250px] serif italic leading-none text-lilac">&quot;</span>
          </div>
          
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <div className="flex justify-center gap-1 mb-10">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} size={18} className="fill-lilac text-lilac" />)}
            </div>
            <p className="text-2xl md:text-5xl serif italic leading-tight mb-12 text-cream">
              &quot;El nivel de detalle es increíble. Nunca me habían cuidado las manos con tanta delicadeza. Es mi lugar favorito.&quot;
            </p>
            <div className="flex items-center justify-center gap-6">
              <div className="w-16 h-px bg-lilac/20"></div>
              <div>
                <p className="text-lg font-bold tracking-widest uppercase text-lilac leading-none mb-2">Sofía Martínez</p>
                <p className="text-xs uppercase text-lilac/50 font-bold tracking-[0.2em]">Cliente Recurrente</p>
              </div>
              <div className="w-16 h-px bg-lilac/20"></div>
            </div>
          </div>
        </section>

        {/* Contact & Map Section - Lighter Section */}
        <section id="contacto" className="grid grid-cols-1 lg:grid-cols-2 bg-beige relative overflow-hidden">
          {/* Blurred Background Placeholder */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-20 blur-3xl">
            <Image 
              src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80&w=1000"
              alt="Background Blur"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-8 md:p-24 flex flex-col justify-center items-center lg:items-start text-center lg:text-left border-b lg:border-b-0 lg:border-r border-forest/5 relative z-10">
            <div className="max-w-md">
              <span className="text-sage font-bold serif italic text-xl mb-4 block tracking-widest">Encuéntranos</span>
              <h2 className="text-5xl md:text-6xl serif font-light mb-12 text-forest leading-none italic">Estudio Euge</h2>
              
              <div className="space-y-10">
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-forest/5 flex items-center justify-center text-forest">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase font-black tracking-widest mb-2 text-forest/40">Dirección</h4>
                    <p className="text-lg serif font-medium text-forest">La Paz, Canelones, Uruguay</p>
                  </div>
                </div>
                
                <a 
                  href="https://www.instagram.com/estetica.by.euge/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col lg:flex-row items-center lg:items-start gap-6 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-full bg-forest/5 flex items-center justify-center text-forest group-hover:bg-forest group-hover:text-lilac transition-all">
                    <Instagram size={24} />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase font-black tracking-widest mb-2 text-forest/40 group-hover:text-forest transition-colors">Instagram</h4>
                    <p className="text-lg font-bold text-forest underline decoration-lilac underline-offset-4">@estetica.by.euge</p>
                  </div>
                </a>
                
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-forest/5 flex items-center justify-center text-forest">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase font-black tracking-widest mb-2 text-forest/40">Horarios</h4>
                    <p className="text-lg font-bold text-forest">Agenda disponible Lun - Sáb</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="h-[500px] lg:h-auto relative overflow-hidden flex items-center justify-center bg-warm-gray">
             <div className="absolute inset-0 opacity-60">
                <Image 
                  src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&q=80&w=1000"
                  alt="Studio Detail"
                  fill
                  className="object-cover transition-transform duration-[3000ms] hover:scale-110"
                  referrerPolicy="no-referrer"
                />
             </div>
             <div className="relative z-10 glass p-10 text-center max-w-[340px] rounded-[3rem] border-lilac/30 shadow-2xl">
                <MapPin className="mx-auto text-forest mb-6" size={40} />
                <h3 className="serif text-3xl italic mb-3 text-forest">El estudio</h3>
                <p className="text-xs text-charcoal/60 mb-8 uppercase tracking-[0.2em] font-black">La Paz, Canelones</p>
                <a 
                  href="https://maps.app.goo.gl/1UTrNYiKqqUQs7Uy6?g_st=ic" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-forest text-lilac w-full py-5 px-4 text-[11px] uppercase tracking-widest font-black hover:bg-lilac hover:text-forest transition-colors rounded-2xl whitespace-nowrap overflow-hidden text-ellipsis text-center block"
                >
                  Ver Ruta en Google Maps
                </a>
             </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-beige text-forest border-t border-forest/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="p-12 border-b lg:border-b-0 lg:border-r border-forest/5 flex flex-col justify-between items-start text-left">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-sage mb-8 font-black">Estetica by Euge</h4>
              <p className="text-sm opacity-60 serif italic leading-relaxed">
                Arte y delicadeza en cada detalle. Especialistas en el cuidado integral de tus manos en La Paz.
              </p>
            </div>
            <div className="flex gap-6 mt-12">
              <a href="https://www.instagram.com/estetica.by.euge/" target="_blank" rel="noopener noreferrer">
                <Instagram size={18} className="text-forest/40 hover:text-forest cursor-pointer transition-colors" />
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-2 p-12 border-b lg:border-b-0 lg:border-r border-forest/5 relative group overflow-hidden h-72 md:h-auto">
             <div className="absolute inset-0 opacity-10 bg-center bg-cover transition-transform duration-[2000ms] group-hover:scale-125" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80&w=1000")'}}></div>
             <div className="relative z-10 h-full flex flex-col justify-end">
                <span className="text-[10px] uppercase tracking-[0.5em] mb-3 text-sage font-black">Agenda Disponible</span>
                <h4 className="serif text-4xl md:text-6xl font-light italic text-forest leading-none">Eleva tu estilo <br/> hoy mismo</h4>
             </div>
          </div>

          <div className="p-12 bg-lilac/5 flex flex-col justify-between">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-forest mb-8 font-black">Contacto</h4>
              <p className="text-2xl serif font-light italic mb-2 tracking-wide">Instagram DM</p>
              <p className="text-[10px] opacity-40 uppercase tracking-[0.3em] font-black">ESTETICA.BY.EUGE</p>
            </div>
          </div>
        </div>
        
        <div className="p-8 text-center border-t border-forest/5 bg-warm-gray/10">
          <p className="text-[9px] uppercase tracking-[0.5em] opacity-30 font-black">&copy; 2024 Estética by Euge. Nail Salon & Studio.</p>
        </div>
      </footer>

      {/* Reservation FAB for Mobile */}
      <div className="fixed bottom-8 right-8 z-40 md:hidden">
        <button 
          onClick={() => setIsBookingModalOpen(true)}
          className="w-16 h-16 rounded-full bg-forest text-lilac shadow-2xl flex items-center justify-center border-2 border-lilac/30 scale-110 active:scale-95 transition-transform"
        >
          <CalendarIcon size={28} />
        </button>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
