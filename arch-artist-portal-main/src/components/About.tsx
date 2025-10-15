import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Heart, Users, Clock } from 'lucide-react';
import salonInterior from '@/assets/salon-interior.jpg';

interface AboutProps {
  onBookingClick: () => void;
}

const About = ({ onBookingClick }: AboutProps) => {
  const achievements = [
    {
      icon: Award,
      title: 'Certificação Profissional',
      description: 'Formação especializada em design de sobrancelhas e micropigmentação'
    },
    {
      icon: Users,
      title: '+500 Clientes Satisfeitas',
      description: 'Milhares de transformações realizadas com excelência'
    },
    {
      icon: Heart,
      title: 'Atendimento Humanizado',
      description: 'Cuidado personalizado para realçar sua beleza única'
    },
    {
      icon: Clock,
      title: '5+ Anos de Experiência',
      description: 'Tradição e inovação no cuidado com suas sobrancelhas'
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-premium">
              <img
                src={salonInterior}
                alt="Interior do salon Bella Sobrancelhas"
                className="w-full h-[600px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary p-6 rounded-2xl shadow-glow">
              <div className="text-center text-white">
                <div className="text-3xl font-cormorant font-bold">5+</div>
                <div className="text-sm">Anos de experiência</div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-foreground mb-6">
                Sobre a Bella Sobrancelhas
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Há mais de 5 anos, a <strong className="text-foreground">Bella Sobrancelhas</strong> tem 
                  sido referência em design e cuidados especializados para sobrancelhas na cidade.
                </p>
                <p>
                  Nossa missão é realçar a beleza natural de cada cliente através de técnicas 
                  profissionais e atendimento personalizado. Acreditamos que sobrancelhas bem 
                  cuidadas transformam completamente o olhar.
                </p>
                <p>
                  Com uma equipe especializada e produtos de alta qualidade, oferecemos desde 
                  o design clássico até técnicas avançadas como micropigmentação, sempre 
                  priorizando o conforto e a satisfação de nossos clientes.
                </p>
              </div>
            </div>

            {/* Achievements Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {achievements.map((achievement, index) => (
                <Card key={index} className="p-4 hover:shadow-soft transition-elegant">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-3">
                      <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full flex-shrink-0">
                        <achievement.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1 text-sm">
                          {achievement.title}
                        </h3>
                        <p className="text-muted-foreground text-xs leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Mission Statement */}
            <div className="bg-gradient-soft p-6 rounded-xl mb-8">
              <h3 className="text-xl font-cormorant font-bold text-foreground mb-3">
                Nossa Filosofia
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                "Cada rosto é único, e cada sobrancelha deve refletir a personalidade 
                e beleza natural da pessoa. Nosso trabalho é encontrar o design perfeito 
                que harmoniza com suas características, realçando sua autoestima e confiança."
              </p>
              <div className="mt-4 text-right">
                <span className="text-primary font-semibold">- Equipe Bella Sobrancelhas</span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="premium"
                size="lg"
                onClick={onBookingClick}
                className="flex-1"
              >
                Conhecer Nosso Trabalho
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="flex-1"
              >
                Ver Galeria
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;