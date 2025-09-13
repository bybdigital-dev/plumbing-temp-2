import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Star, Shield, Clock, DollarSign } from "lucide-react";
import heroImage from "@assets/generated_images/Professional_plumber_hero_image_051bccb2.png";

export default function Hero() {
  const trustBadges = [
    { icon: Clock, text: "24/7 Emergency" },
    { icon: DollarSign, text: "Upfront Pricing" },
    { icon: Shield, text: "Licensed & Insured" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-orange/5">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                Professional
                <span className="text-primary block">Plumbing Services</span>
                You Can Trust
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                Expert plumbing solutions with 24/7 emergency service. Licensed, insured, and committed to solving your plumbing problems quickly and efficiently.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-orange text-orange-foreground hover:bg-orange/90"
                data-testid="button-hero-quote"
                onClick={() => window.location.href = '/contact'}
              >
                <Phone className="h-5 w-5 mr-2" />
                Get Free Quote
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                data-testid="button-hero-services"
                onClick={() => window.location.href = '/services'}
              >
                View Services
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 pt-4">
              {trustBadges.map((badge) => (
                <Badge 
                  key={badge.text} 
                  variant="secondary" 
                  className="px-3 py-2 text-sm font-medium"
                  data-testid={`badge-${badge.text.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <badge.icon className="h-4 w-4 mr-2" />
                  {badge.text}
                </Badge>
              ))}
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-4 pt-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-orange text-orange" />
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">4.9/5</span> from 500+ customers
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img
                src={heroImage}
                alt="Professional plumber working on bathroom installation"
                className="w-full h-[400px] md:h-[500px] object-cover"
                data-testid="img-hero"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-4 -left-4 bg-background rounded-lg shadow-lg p-4 border">
              <div className="flex items-center space-x-3">
                <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                <div className="text-sm">
                  <div className="font-semibold text-foreground">Available Now</div>
                  <div className="text-muted-foreground">Emergency Response Ready</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}