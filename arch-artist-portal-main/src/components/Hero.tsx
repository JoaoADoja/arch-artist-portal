import { Button } from '@/components/ui/button';
import { Star, Award, Users } from 'lucide-react';
import heroImage from '@/assets/hero-eyebrows.jpg';

interface HeroProps {
  onBookingClick: () => void;
}

const Hero = ({ onBookingClick }: HeroProps) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Sobrancelhas perfeitamente desenhadas"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-luxury-brown/30 gradient-soft opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-sm text-foreground font-medium">
              +500 clientes satisfeitas
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-cormorant font-bold text-foreground mb-6 leading-tight">
            Sobrancelhas
            <span className="block gradient-primary bg-clip-text text-transparent">
              Perfeitas
            </span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Transforme seu olhar com nossos tratamentos especializados em design de sobrancelhas. 
            Realce sua beleza natural com técnicas profissionais e atendimento personalizado.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              variant="premium"
              size="xl"
              onClick={onBookingClick}
              className="font-semibold"
            >
              Agendar Atendimento
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="bg-background/90 backdrop-blur-sm"
            >
              Ver Serviços
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3 mx-auto">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-cormorant font-bold text-foreground">5+</div>
              <div className="text-sm text-muted-foreground">Anos de experiência</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3 mx-auto">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-cormorant font-bold text-foreground">500+</div>
              <div className="text-sm text-muted-foreground">Clientes felizes</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3 mx-auto">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-cormorant font-bold text-foreground">5.0</div>
              <div className="text-sm text-muted-foreground">Avaliação média</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;