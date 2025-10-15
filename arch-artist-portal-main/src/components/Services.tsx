import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Scissors, Palette, Sparkles, Clock, MapPin, Heart } from 'lucide-react';
import threadingService from '@/assets/threading-service.jpg';
import designService from '@/assets/design-service.jpg';
import microbladeService from '@/assets/microblading-service.jpg';
import hennaService from '@/assets/henna-service.jpg';
import nanobladingReal from '@/assets/nanoblading-real.webp';

interface ServicesProps {
  onBookingClick: () => void;
}

const Services = ({ onBookingClick }: ServicesProps) => {
  const services = [
    {
      id: 1,
      icon: Scissors,
      title: 'Design de Sobrancelhas',
      description: 'Modelagem personalizada de acordo com o formato do seu rosto',
      price: 'R$ 45',
      duration: '45 min',
      image: designService,
      features: ['Análise facial', 'Remoção com pinça', 'Finalização com gel']
    },
    {
      id: 2,
      icon: Palette,
      title: 'Henna para Sobrancelhas',
      description: 'Coloração natural que realça e define suas sobrancelhas',
      price: 'R$ 60',
      duration: '60 min',
      image: hennaService,
      features: ['Coloração natural', 'Efeito duradouro', 'Cor personalizada']
    },
    {
      id: 3,
      icon: Sparkles,
      title: 'Micropigmentação',
      description: 'Técnica semipermanente para sobrancelhas naturais e definidas',
      price: 'R$ 350',
      duration: '2h 30min',
      image: nanobladingReal,
      features: ['Técnica fio a fio', 'Duração de 12-18 meses', 'Retoque incluso']
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Oferecemos tratamentos especializados para realçar a beleza natural das suas sobrancelhas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <Card key={service.id} className="group hover:shadow-premium transition-elegant overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-elegant"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  {service.price}
                </div>
              </div>
              
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {service.duration}
                  </div>
                </div>
                <CardTitle className="text-xl font-cormorant">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <Heart className="w-4 h-4 text-primary fill-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button
                  variant="premium"
                  className="w-full"
                  onClick={onBookingClick}
                >
                  Agendar Agora
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-card rounded-2xl p-8 shadow-soft">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-cormorant font-bold text-foreground mb-4">
                Por que escolher nossos serviços?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Localização Premium</h4>
                    <p className="text-muted-foreground text-sm">
                      Studio localizado no coração da cidade, com fácil acesso e estacionamento
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Técnicas Avançadas</h4>
                    <p className="text-muted-foreground text-sm">
                      Utilizamos as mais modernas técnicas e produtos de alta qualidade
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Atendimento Personalizado</h4>
                    <p className="text-muted-foreground text-sm">
                      Cada cliente recebe um tratamento único e personalizado
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="inline-block p-8 bg-gradient-primary rounded-full mb-4">
                <Sparkles className="w-12 h-12 text-white" />
              </div>
              <h4 className="text-xl font-cormorant font-bold text-foreground mb-2">
                Agende Sua Consulta
              </h4>
              <p className="text-muted-foreground mb-6">
                Descubra qual é o melhor tratamento para você
              </p>
              <Button
                variant="luxury"
                size="lg"
                onClick={onBookingClick}
              >
                Marcar Consulta Gratuita
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;