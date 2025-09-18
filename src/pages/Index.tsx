import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Auth from '@/components/Auth';
import Booking from '@/components/Booking';

const Index = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  const handleLogin = (userData: { name: string; email: string }) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleBookingClick = () => {
    if (user) {
      setIsBookingOpen(true);
    } else {
      setIsAuthOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header
        onLoginClick={() => setIsAuthOpen(true)}
        onBookingClick={handleBookingClick}
        isLoggedIn={!!user}
        userName={user?.name}
      />
      
      <main className="pt-16">
        <Hero onBookingClick={handleBookingClick} />
        <Services onBookingClick={handleBookingClick} />
        <About onBookingClick={handleBookingClick} />
        <Testimonials />
        <Contact onBookingClick={handleBookingClick} />
      </main>

      <footer className="bg-luxury-brown text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-cormorant font-bold mb-4">
                Bella Sobrancelhas
              </h3>
              <p className="text-white/80 leading-relaxed">
                Transformando olhares há mais de 5 anos com técnicas especializadas 
                e atendimento personalizado.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Horário de Funcionamento</h4>
              <div className="space-y-2 text-white/80 text-sm">
                <p>Segunda a Sexta: 9h às 18h</p>
                <p>Sábado: 8h às 16h</p>
                <p>Domingo: Fechado</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-white/80 text-sm">
                <p>📍 Rua das Flores, 123 - Centro</p>
                <p>📱 (11) 99999-9999</p>
                <p>✉️ contato@bellasobrancelhas.com</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60 text-sm">
            <p>&copy; 2024 Bella Sobrancelhas. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      <Auth
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onLogin={handleLogin}
      />

      {user && (
        <Booking
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
          userName={user.name}
        />
      )}
    </div>
  );
};

export default Index;
