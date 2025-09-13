import ServiceCard from "@/components/ServiceCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  AlertTriangle, 
  Droplets, 
  Wrench, 
  Zap, 
  Hammer, 
  Building,
  Clock,
  Shield,
  DollarSign,
  CheckCircle,
  Phone
} from "lucide-react";
import emergencyImage from "@assets/generated_images/Emergency_plumbing_service_image_108fb48c.png";
import bathroomImage from "@assets/generated_images/Bathroom_renovation_showcase_710f10ea.png";

export default function Services() {
  const services = [
    {
      icon: AlertTriangle,
      title: "Emergency Plumbing",
      description: "24/7 emergency plumbing services for urgent repairs and installations. We respond quickly to burst pipes, blocked drains, and other plumbing emergencies.",
      features: [
        "24/7 availability",
        "Rapid response time under 30 minutes",
        "Licensed professionals",
        "Upfront pricing with no hidden fees",
        "Emergency leak stoppage",
        "Burst pipe repair"
      ],
      image: emergencyImage
    },
    {
      icon: Droplets,
      title: "Leak Detection & Repair",
      description: "Advanced leak detection technology to find and fix hidden leaks without damaging your property. Save water and prevent costly damage.",
      features: [
        "Non-invasive electronic detection",
        "Thermal imaging technology",
        "Acoustic leak detection",
        "Minimal property disruption",
        "Comprehensive leak reports",
        "Insurance claim assistance"
      ]
    },
    {
      icon: Wrench,
      title: "Drain Cleaning",
      description: "Professional drain cleaning services using high-pressure water jetting and camera inspection to clear blockages and maintain your drainage system.",
      features: [
        "High-pressure water jetting",
        "CCTV drain camera inspection",
        "Root removal and prevention",
        "Grease trap cleaning",
        "Preventive maintenance plans",
        "Odor elimination"
      ]
    },
    {
      icon: Zap,
      title: "Geyser Installation & Repair",
      description: "Expert geyser installation, repair, and maintenance services. We work with all geyser types and offer energy-efficient solutions.",
      features: [
        "All geyser types and brands",
        "Energy efficient recommendations",
        "Full manufacturer warranty",
        "Professional installation",
        "Geyser maintenance services",
        "Emergency geyser replacement"
      ]
    },
    {
      icon: Hammer,
      title: "Bathroom Renovations",
      description: "Complete bathroom renovations from design to completion. Transform your bathroom with modern fixtures and professional plumbing installation.",
      features: [
        "Custom bathroom designs",
        "Quality fixtures and fittings",
        "Project management",
        "Timely completion",
        "Waterproofing services",
        "Compliance with building codes"
      ],
      image: bathroomImage
    },
    {
      icon: Building,
      title: "Commercial Plumbing",
      description: "Comprehensive commercial plumbing services for offices, retail spaces, and industrial facilities. Maintenance contracts and emergency support available.",
      features: [
        "Office building maintenance",
        "Retail space plumbing",
        "Industrial facility services",
        "Maintenance contracts available",
        "Emergency response teams",
        "Compliance certifications"
      ]
    }
  ];

  const guarantees = [
    {
      icon: CheckCircle,
      title: "Quality Guarantee",
      description: "All work backed by our comprehensive warranty"
    },
    {
      icon: Clock,
      title: "On-Time Service",
      description: "We arrive when scheduled and complete work promptly"
    },
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully licensed contractors with comprehensive insurance"
    },
    {
      icon: DollarSign,
      title: "Upfront Pricing",
      description: "Clear, transparent pricing with no hidden fees"
    }
  ];

  const serviceProcess = [
    {
      step: "1",
      title: "Contact Us",
      description: "Call us or fill out our online form to describe your plumbing issue"
    },
    {
      step: "2", 
      title: "Assessment",
      description: "Our expert technician arrives and provides a thorough assessment"
    },
    {
      step: "3",
      title: "Quote",
      description: "We provide upfront, transparent pricing before starting any work"
    },
    {
      step: "4",
      title: "Solution",
      description: "Professional repair or installation with quality guarantee"
    }
  ];

  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-orange/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Professional <span className="text-primary">Plumbing Services</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              From emergency repairs to complete installations, AquaPro provides comprehensive plumbing solutions for residential and commercial properties across Johannesburg.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-orange text-orange-foreground hover:bg-orange/90"
                data-testid="button-emergency-service"
              >
                <Phone className="h-5 w-5 mr-2" />
                24/7 Emergency: +27 11 123 4567
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                data-testid="button-get-quote"
              >
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer a complete range of plumbing services to meet all your residential and commercial needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Guarantees */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our Service Guarantees
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              When you choose AquaPro, you're choosing quality, reliability, and peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((guarantee) => (
              <Card key={guarantee.title} className="text-center hover-elevate">
                <CardContent className="pt-6 space-y-4">
                  <guarantee.icon className="h-12 w-12 text-primary mx-auto" />
                  <h3 className="text-xl font-semibold text-foreground">
                    {guarantee.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {guarantee.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              How We Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our streamlined process ensures efficient service delivery from first contact to project completion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceProcess.map((process, index) => (
              <Card key={process.step} className="relative hover-elevate">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl flex items-center justify-center mx-auto mb-4">
                    {process.step}
                  </div>
                  <CardTitle className="text-lg">{process.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    {process.description}
                  </p>
                </CardContent>
                
                {/* Arrow for desktop */}
                {index < serviceProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-6 text-primary">
                    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Services CTA */}
      <section className="py-16 bg-orange">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <Badge variant="secondary" className="mb-4">
              24/7 Emergency Service
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-orange-foreground">
              Plumbing Emergency? We're Here to Help!
            </h2>
            <p className="text-lg text-orange-foreground/90">
              Don't let a plumbing emergency ruin your day. Our emergency response team is available 24/7 to handle urgent plumbing issues.
            </p>
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              data-testid="button-emergency-call"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Emergency Line: +27 11 123 4567
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}