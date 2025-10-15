import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Maria Silva',
      service: 'Design de Sobrancelhas',
      rating: 5,
      comment: 'Simplesmente perfeito! Nunca tive sobrancelhas tão bem feitas. O atendimento é excepcional e o resultado superou todas as minhas expectativas.',
      date: '2 semanas atrás'
    },
    {
      id: 2,
      name: 'Ana Costa',
      service: 'Micropigmentação',
      rating: 5,
      comment: 'A micropigmentação ficou incrível! Acordo todos os dias com sobrancelhas perfeitas. Recomendo de olhos fechados, profissional muito competente.',
      date: '1 mês atrás'
    },
    {
      id: 3,
      name: 'Juliana Santos',
      service: 'Henna',
      rating: 5,
      comment: 'Adorei o resultado da henna! A cor ficou natural e duradoura. O ambiente é acolhedor e a profissional muito atenciosa. Voltarei sempre!',
      date: '3 semanas atrás'
    },
    {
      id: 4,
      name: 'Carla Oliveira',
      service: 'Design + Henna',
      rating: 5,
      comment: 'Melhor lugar para cuidar das sobrancelhas! Já sou cliente há 2 anos e sempre saio satisfeita. Profissionalismo e qualidade em cada atendimento.',
      date: '1 semana atrás'
    },
    {
      id: 5,
      name: 'Fernanda Lima',
      service: 'Design de Sobrancelhas',
      rating: 5,
      comment: 'Transformação completa! Minhas amigas não param de elogiar. A técnica é impecável e o cuidado com cada detalhe é impressionante.',
      date: '2 meses atrás'
    },
    {
      id: 6,
      name: 'Roberta Alves',
      service: 'Micropigmentação',
      rating: 5,
      comment: 'Investimento que valeu cada centavo! A micropigmentação está perfeita há 8 meses. Acordar bonita todos os dias não tem preço. Super recomendo!',
      date: '3 meses atrás'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-foreground mb-4">
            O que nossas clientes dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Depoimentos reais de clientes que confiaram em nossos serviços
          </p>
        </div>

        {/* Overall Rating */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-card px-6 py-4 rounded-full shadow-soft">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-2xl font-cormorant font-bold text-foreground">5.0</span>
            <span className="text-muted-foreground">• +500 avaliações</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="relative hover:shadow-premium transition-elegant">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="absolute -top-3 left-6">
                  <div className="bg-primary p-2 rounded-full">
                    <Quote className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4 mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-foreground mb-4 leading-relaxed">
                  "{testimonial.comment}"
                </p>

                {/* Client Info */}
                <div className="border-t border-border pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">
                        {testimonial.name}
                      </h4>
                      <p className="text-muted-foreground text-xs">
                        {testimonial.service}
                      </p>
                    </div>
                    <span className="text-muted-foreground text-xs">
                      {testimonial.date}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-cormorant font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Clientes Atendidas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-cormorant font-bold text-primary mb-2">5.0</div>
            <div className="text-muted-foreground">Avaliação Média</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-cormorant font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">Satisfação</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-cormorant font-bold text-primary mb-2">2k+</div>
            <div className="text-muted-foreground">Seguidores</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;