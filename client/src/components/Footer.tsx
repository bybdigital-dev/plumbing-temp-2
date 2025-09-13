import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Wrench, Phone, Mail, MapPin, Facebook, Twitter, Instagram, MessageSquare } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    "Emergency Plumbing",
    "Leak Detection", 
    "Drain Cleaning",
    "Geyser Installation",
    "Bathroom Renovations",
    "Commercial Plumbing"
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", name: "Facebook" },
    { icon: Twitter, href: "#", name: "Twitter" },
    { icon: Instagram, href: "#", name: "Instagram" },
  ];

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Wrench className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-primary">AquaPro</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Professional plumbing services with 24/7 emergency support. Licensed, insured, and trusted by thousands of customers across Johannesburg.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-foreground font-medium">+27 11 123 4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-foreground font-medium">info@aquapro.co.za</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">Johannesburg, South Africa</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <button 
                      className="text-sm text-muted-foreground hover:text-primary transition-colors hover-elevate p-1 rounded"
                      data-testid={`link-footer-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link.name}
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-muted-foreground block">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Emergency */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Emergency Service</h3>
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Available 24/7 for emergency plumbing repairs
              </p>
              <Button 
                className="w-full bg-orange text-orange-foreground hover:bg-orange/90"
                data-testid="button-footer-emergency"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Now: +27 11 123 4567
              </Button>
              <Button 
                variant="outline" 
                className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                data-testid="button-footer-whatsapp"
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                WhatsApp Us
              </Button>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-foreground">Follow Us</h4>
              <div className="flex space-x-2">
                {socialLinks.map((social) => (
                  <Button
                    key={social.name}
                    variant="ghost"
                    size="icon"
                    className="hover-elevate"
                    data-testid={`button-social-${social.name.toLowerCase()}`}
                  >
                    <social.icon className="h-4 w-4" />
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Footer Bottom */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © 2024 AquaPro Plumbing. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <button className="text-muted-foreground hover:text-primary transition-colors hover-elevate p-1 rounded">
              Privacy Policy
            </button>
            <button className="text-muted-foreground hover:text-primary transition-colors hover-elevate p-1 rounded">
              Terms of Service
            </button>
            <button className="text-muted-foreground hover:text-primary transition-colors hover-elevate p-1 rounded">
              Cookie Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}