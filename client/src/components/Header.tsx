import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Wrench } from "lucide-react";

export default function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link href={href}>
      <button
        className={`px-3 py-2 text-sm font-medium transition-colors hover-elevate rounded-md ${
          location === href
            ? "text-primary bg-primary/10"
            : "text-foreground hover:text-primary"
        }`}
        data-testid={`link-nav-${children?.toString().toLowerCase()}`}
      >
        {children}
      </button>
    </Link>
  );

  return (
    <header className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/98 backdrop-blur-md shadow-sm' 
        : 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'
    }`}>
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center space-x-2 hover-elevate p-2 rounded-md" data-testid="link-logo">
            <Wrench className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-primary">AquaPro</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navigation.map((item) => (
            <NavLink key={item.name} href={item.href}>
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* CTA and Mobile Menu */}
        <div className="flex items-center space-x-4">
          <Button 
            className="hidden sm:flex bg-orange text-orange-foreground hover:bg-orange/90" 
            data-testid="button-get-quote"
            onClick={() => window.location.href = 'tel:+27111234567'}
          >
            <Phone className="h-4 w-4 mr-2" />
            Get a Quote
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" data-testid="button-mobile-menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <div className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <button
                      className={`w-full text-left px-3 py-2 text-sm font-medium transition-colors hover-elevate rounded-md ${
                        location === item.href
                          ? "text-primary bg-primary/10"
                          : "text-foreground hover:text-primary"
                      }`}
                      onClick={() => setIsOpen(false)}
                      data-testid={`link-mobile-${item.name.toLowerCase()}`}
                    >
                      {item.name}
                    </button>
                  </Link>
                ))}
                <Button 
                  className="w-full mt-4 bg-orange text-orange-foreground hover:bg-orange/90"
                  data-testid="button-mobile-quote"
                  onClick={() => {
                    window.location.href = 'tel:+27111234567';
                    setIsOpen(false);
                  }}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Get a Quote
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}