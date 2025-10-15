import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Clock, Instagram, Facebook, Mail } from 'lucide-react';

interface ContactProps {
  onBookingClick: () => void;
}

const Contact = ({ onBookingClick }: ContactProps) => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      details: ['Rua das Flores, 123', 'Centro - São Paulo/SP', 'CEP: 01234-567']
    },
    {
      icon: Phone,
      title: 'Telefone',
      details: ['(11) 99999-9999', '(11) 3333-3333']
    },
    {
      icon: Clock,
      title: 'Horário de Funcionamento',
      details: ['Segunda a Sexta: 9h às 18h', 'Sábado: 8h às 16h', 'Domingo: Fechado']
    }
  ];

  const socialLinks = [
    { icon: Instagram, label: '@bellasobrancelhas', href: '#' },
    { icon: Facebook, label: 'Bella Sobrancelhas', href: '#' },
    { icon: Mail, label: 'contato@bellasobrancelhas.com', href: '#' }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-foreground mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos prontas para cuidar das suas sobrancelhas. Agende seu horário ou tire suas dúvidas
          </p>
        </div>

       

              <div className="space-y-2">
                <Label htmlFor="service">Serviço de Interesse</Label>
                <select
                  id="service"
                  className="w-full h-12 px-3 rounded-md border border-input bg-background text-sm ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="design">Design de Sobrancelhas</option>
                  <option value="henna">Henna</option>
                  <option value="micropigmentacao">Micropigmentação</option>
                  <option value="consulta">Consulta</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                  id="message"
                  placeholder="Conte-nos como podemos ajudar..."
                  rows={4}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="premium" className="flex-1">
                  Enviar Mensagem
                </Button>
                <Button
                  variant="luxury"
                  className="flex-1"
                  onClick={onBookingClick}
                >
                  Agendar Agora
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 hover:shadow-soft transition-elegant">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {info.title}
                    </h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </Card>
            ))}

            {/* Social Links */}
            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-4">
                Siga-nos nas Redes Sociais
              </h3>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-smooth group"
                  >
                    <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                      <social.icon className="w-5 h-5" />
                    </div>
                    <span className="text-sm">{social.label}</span>
                  </a>
                ))}
              </div>
            </Card>

            {/* Map Placeholder */}
            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-4">
                Nossa Localização
              </h3>
              <div className="bg-muted rounded-lg h-48 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p className="text-sm">Mapa interativo em breve</p>
                  <p className="text-xs">Centro de São Paulo</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
