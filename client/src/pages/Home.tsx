import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote, ArrowRight, Wrench, AlertTriangle, Droplets, Zap, Hammer, Building } from "lucide-react";
import emergencyImage from "@assets/generated_images/Emergency_plumbing_service_image_108fb48c.png";
import bathroomImage from "@assets/generated_images/Bathroom_renovation_showcase_710f10ea.png";

export default function Home() {
  const services = [
    {
      icon: AlertTriangle,
      title: "Emergency Plumbing",
      description: "24/7 emergency plumbing services for urgent repairs and installations.",
      features: [
        "24/7 availability",
        "Rapid response time", 
        "Licensed professionals",
        "Upfront pricing"
      ],
      image: emergencyImage
    },
    {
      icon: Droplets,
      title: "Leak Detection",
      description: "Advanced leak detection technology to find and fix hidden leaks.",
      features: [
        "Non-invasive detection",
        "Latest technology",
        "Accurate location",
        "Minimal disruption"
      ]
    },
    {
      icon: Wrench,
      title: "Drain Cleaning",
      description: "Professional drain cleaning services to keep your pipes flowing.",
      features: [
        "High-pressure cleaning",
        "Camera inspection",
        "Root removal",
        "Preventive maintenance"
      ]
    },
    {
      icon: Zap,
      title: "Geyser Installation",
      description: "Expert geyser installation and repair services with warranty.",
      features: [
        "All geyser types",
        "Energy efficient options",
        "Full warranty",
        "Professional installation"
      ]
    },
    {
      icon: Hammer,
      title: "Bathroom Renovations", 
      description: "Complete bathroom renovations with modern fixtures and design.",
      features: [
        "Custom designs",
        "Quality fixtures",
        "Project management",
        "Timely completion"
      ],
      image: bathroomImage
    },
    {
      icon: Building,
      title: "Commercial Plumbing",
      description: "Comprehensive commercial plumbing services for businesses.",
      features: [
        "Office buildings",
        "Retail spaces",
        "Maintenance contracts",
        "Emergency response"
      ]
    }
  ];

  // todo: remove mock functionality - replace with real testimonials
  const testimonials = [
    {
      name: "John Smith",
      role: "Homeowner",
      avatar: "",
      rating: 5,
      text: "AquaPro saved the day when our geyser burst on a Sunday. They responded within 30 minutes and had everything fixed professionally. Highly recommended!"
    },
    {
      name: "Sarah Johnson", 
      role: "Business Owner",
      avatar: "",
      rating: 5,
      text: "We use AquaPro for all our office building maintenance. Their team is reliable, professional, and always delivers quality work on time."
    },
    {
      name: "Mike Davis",
      role: "Property Manager", 
      avatar: "",
      rating: 5,
      text: "Excellent service! They renovated our bathroom completely and the result exceeded our expectations. Fair pricing and great workmanship."
    }
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <Hero />

      {/* Services Preview Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our Professional Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From emergency repairs to complete renovations, we provide comprehensive plumbing solutions for homes and businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              data-testid="button-view-all-services"
              onClick={() => window.location.href = '/services'}
            >
              View All Services
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              What Our Customers Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. See what our satisfied customers have to say about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-elevate">
                <CardHeader className="space-y-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        className="h-4 w-4 fill-orange text-orange" 
                      />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-primary" />
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-foreground" data-testid={`text-testimonial-name-${index}`}>
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              Ready to Solve Your Plumbing Problems?
            </h2>
            <p className="text-lg text-primary-foreground/90">
              Don't let plumbing issues disrupt your day. Contact AquaPro for fast, reliable, and professional plumbing services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-orange text-orange-foreground hover:bg-orange/90"
                data-testid="button-cta-emergency"
                onClick={() => window.location.href = 'tel:+27111234567'}
              >
                Emergency Service: +27 11 123 4567
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                data-testid="button-cta-quote"
                onClick={() => window.location.href = '/contact'}
              >
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}