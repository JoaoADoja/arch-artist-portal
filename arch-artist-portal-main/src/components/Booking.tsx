import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Calendar, Clock, User, CheckCircle, ArrowLeft, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface BookingProps {
  isOpen: boolean;
  onClose: () => void;
  userName: string;
}

type BookingStep = 'service' | 'date' | 'time' | 'confirmation';

const Booking = ({ isOpen, onClose, userName }: BookingProps) => {
  const [currentStep, setCurrentStep] = useState<BookingStep>('service');
  const [selectedService, setSelectedService] = useState<any>(null);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const services = [
    {
      id: 1,
      name: 'Design de Sobrancelhas',
      duration: '45 min',
      price: 'R$ 45',
      description: 'Modelagem personalizada com remoção por pinça'
    },
    {
      id: 2,
      name: 'Henna para Sobrancelhas',
      duration: '60 min',
      price: 'R$ 60',
      description: 'Coloração natural duradoura'
    },
    {
      id: 3,
      name: 'Micropigmentação',
      duration: '2h 30min',
      price: 'R$ 350',
      description: 'Técnica semipermanente fio a fio'
    },
    {
      id: 4,
      name: 'Design + Henna',
      duration: '75 min',
      price: 'R$ 95',
      description: 'Combo design + coloração'
    }
  ];

  const availableDates = [
    { date: '2024-01-15', dayName: 'Segunda-feira', available: true },
    { date: '2024-01-16', dayName: 'Terça-feira', available: true },
    { date: '2024-01-17', dayName: 'Quarta-feira', available: false },
    { date: '2024-01-18', dayName: 'Quinta-feira', available: true },
    { date: '2024-01-19', dayName: 'Sexta-feira', available: true },
    { date: '2024-01-20', dayName: 'Sábado', available: true },
  ];

  const availableTimes = [
    { time: '09:00', available: true },
    { time: '10:00', available: true },
    { time: '11:00', available: false },
    { time: '14:00', available: true },
    { time: '15:00', available: true },
    { time: '16:00', available: true },
    { time: '17:00', available: false },
  ];

  const handleNext = () => {
    if (currentStep === 'service' && selectedService) {
      setCurrentStep('date');
    } else if (currentStep === 'date' && selectedDate) {
      setCurrentStep('time');
    } else if (currentStep === 'time' && selectedTime) {
      setCurrentStep('confirmation');
    }
  };

  const handleBack = () => {
    if (currentStep === 'date') {
      setCurrentStep('service');
    } else if (currentStep === 'time') {
      setCurrentStep('date');
    } else if (currentStep === 'confirmation') {
      setCurrentStep('time');
    }
  };

  const handleConfirmBooking = async () => {
    setIsLoading(true);
    
    // Simulate booking confirmation
    setTimeout(() => {
      setIsLoading(false);
      // Reset form
      setCurrentStep('service');
      setSelectedService(null);
      setSelectedDate('');
      setSelectedTime('');
      onClose();
      
      // Show success message (in a real app, you'd use a toast)
      alert('Agendamento confirmado! Você receberá uma confirmação por e-mail.');
    }, 2000);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  const stepTitles = {
    service: 'Escolha o Serviço',
    date: 'Selecione a Data',
    time: 'Escolha o Horário',
    confirmation: 'Confirme seu Agendamento'
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-cormorant text-center">
            {stepTitles[currentStep]}
          </DialogTitle>
          <div className="flex items-center justify-center gap-2 mt-4">
            {(['service', 'date', 'time', 'confirmation'] as BookingStep[]).map((step, index) => (
              <div
                key={step}
                className={`w-3 h-3 rounded-full ${
                  step === currentStep
                    ? 'bg-primary'
                    : index < (['service', 'date', 'time', 'confirmation'] as BookingStep[]).indexOf(currentStep)
                    ? 'bg-primary/60'
                    : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </DialogHeader>

        <div className="mt-6">
          {/* Service Selection */}
          {currentStep === 'service' && (
            <div className="space-y-4">
              <p className="text-muted-foreground text-center mb-6">
                Olá, {userName}! Qual serviço você gostaria de agendar?
              </p>
              <div className="grid gap-4">
                {services.map((service) => (
                  <Card
                    key={service.id}
                    className={`cursor-pointer transition-elegant hover:shadow-soft ${
                      selectedService?.id === service.id
                        ? 'ring-2 ring-primary shadow-premium'
                        : ''
                    }`}
                    onClick={() => setSelectedService(service)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground">
                            {service.name}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            {service.description}
                          </p>
                          <div className="flex items-center gap-4 mt-2">
                            <Badge variant="secondary" className="gap-1">
                              <Clock className="w-3 h-3" />
                              {service.duration}
                            </Badge>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-semibold text-primary">
                            {service.price}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Date Selection */}
          {currentStep === 'date' && (
            <div className="space-y-4">
              <div className="text-center mb-6">
                <h3 className="font-semibold text-foreground mb-2">
                  {selectedService?.name}
                </h3>
                <p className="text-muted-foreground">
                  Selecione a data do seu atendimento
                </p>
              </div>
              <div className="grid gap-3">
                {availableDates.map((date) => (
                  <Button
                    key={date.date}
                    variant={selectedDate === date.date ? 'premium' : 'outline'}
                    className={`justify-between h-auto p-4 ${
                      !date.available ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    onClick={() => date.available && setSelectedDate(date.date)}
                    disabled={!date.available}
                  >
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5" />
                      <div className="text-left">
                        <div className="font-semibold">
                          {formatDate(date.date)}
                        </div>
                        <div className="text-sm opacity-75">
                          {date.dayName}
                        </div>
                      </div>
                    </div>
                    <div>
                      {date.available ? (
                        <Badge variant="secondary">Disponível</Badge>
                      ) : (
                        <Badge variant="destructive">Indisponível</Badge>
                      )}
                    </div>
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Time Selection */}
          {currentStep === 'time' && (
            <div className="space-y-4">
              <div className="text-center mb-6">
                <h3 className="font-semibold text-foreground mb-2">
                  {formatDate(selectedDate)}
                </h3>
                <p className="text-muted-foreground">
                  Escolha o melhor horário para você
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {availableTimes.map((time) => (
                  <Button
                    key={time.time}
                    variant={selectedTime === time.time ? 'premium' : 'outline'}
                    className={`h-16 ${
                      !time.available ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    onClick={() => time.available && setSelectedTime(time.time)}
                    disabled={!time.available}
                  >
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <Clock className="w-4 h-4" />
                        <span className="font-semibold">{time.time}</span>
                      </div>
                      <div className="text-xs">
                        {time.available ? 'Disponível' : 'Ocupado'}
                      </div>
                    </div>
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Confirmation */}
          {currentStep === 'confirmation' && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-cormorant font-bold text-foreground mb-2">
                  Confirme seus dados
                </h3>
                <p className="text-muted-foreground">
                  Verifique as informações do seu agendamento
                </p>
              </div>

              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-5 h-5 text-primary" />
                    Resumo do Agendamento
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Cliente:</span>
                    <span className="font-semibold">{userName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Serviço:</span>
                    <span className="font-semibold">{selectedService?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Data:</span>
                    <span className="font-semibold">{formatDate(selectedDate)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Horário:</span>
                    <span className="font-semibold">{selectedTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duração:</span>
                    <span className="font-semibold">{selectedService?.duration}</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between text-lg">
                      <span className="font-semibold">Total:</span>
                      <span className="font-bold text-primary">{selectedService?.price}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground text-center">
                  📱 Você receberá uma confirmação por WhatsApp e e-mail<br />
                  💳 Pagamento pode ser feito no local ou via PIX
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={currentStep === 'service'}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Button>

          {currentStep === 'confirmation' ? (
            <Button
              variant="premium"
              onClick={handleConfirmBooking}
              disabled={isLoading}
              className="gap-2"
            >
              {isLoading ? 'Confirmando...' : 'Confirmar Agendamento'}
              <CheckCircle className="w-4 h-4" />
            </Button>
          ) : (
            <Button
              variant="premium"
              onClick={handleNext}
              disabled={
                (currentStep === 'service' && !selectedService) ||
                (currentStep === 'date' && !selectedDate) ||
                (currentStep === 'time' && !selectedTime)
              }
              className="gap-2"
            >
              Próximo
              <ArrowRight className="w-4 h-4" />
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Booking;