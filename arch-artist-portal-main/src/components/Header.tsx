import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Calendar, User } from 'lucide-react';

interface HeaderProps {
  onLoginClick: () => void;
  onBookingClick: () => void;
  isLoggedIn: boolean;
  userName?: string;
}

const Header = ({ onLoginClick, onBookingClick, isLoggedIn, userName }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Início', href: '#home' },
    { label: 'Serviços', href: '#services' },
    { label: 'Sobre', href: '#about' },
    { label: 'Depoimentos', href: '#testimonials' },
    { label: 'Contato', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-cormorant font-bold text-luxury-brown">
              Bella Sobrancelhas
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-smooth font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-muted-foreground">
                  Olá, {userName}
                </span>
                <Button
                  variant="premium"
                  size="sm"
                  onClick={onBookingClick}
                  className="gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  Agendar
                </Button>
              </div>
            ) : (
              <Button
                variant="elegant"
                size="sm"
                onClick={onLoginClick}
                className="gap-2"
              >
                <User className="w-4 h-4" />
                Entrar
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-smooth font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-border">
                {isLoggedIn ? (
                  <div className="space-y-2">
                    <span className="text-sm text-muted-foreground block">
                      Olá, {userName}
                    </span>
                    <Button
                      variant="premium"
                      size="sm"
                      onClick={onBookingClick}
                      className="w-full gap-2"
                    >
                      <Calendar className="w-4 h-4" />
                      Agendar
                    </Button>
                  </div>
                ) : (
                  <Button
                    variant="elegant"
                    size="sm"
                    onClick={onLoginClick}
                    className="w-full gap-2"
                  >
                    <User className="w-4 h-4" />
                    Entrar
                  </Button>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;