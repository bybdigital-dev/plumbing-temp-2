import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Award, Users, Clock, MapPin, Phone } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Years of Experience", value: "15+", icon: Clock },
    { label: "Happy Customers", value: "2,500+", icon: Users },
    { label: "Projects Completed", value: "5,000+", icon: Award },
    { label: "Emergency Calls", value: "24/7", icon: Phone }
  ];

  const certifications = [
    "Licensed Plumbing Contractor",
    "Fully Insured & Bonded", 
    "PIRB Registered",
    "Green Plumbing Certified",
    "Emergency Response Certified"
  ];

  const serviceAreas = [
    "Johannesburg Central",
    "Sandton",
    "Rosebank", 
    "Randburg",
    "Fourways",
    "Midrand",
    "Edenvale",
    "Kempton Park"
  ];

  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-orange/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              About <span className="text-primary">AquaPro</span> Plumbing
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              For over 15 years, AquaPro has been Johannesburg's trusted plumbing partner, providing reliable, professional, and efficient plumbing services to homes and businesses across the city.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <Card key={stat.label} className="text-center hover-elevate">
                <CardContent className="pt-6 space-y-3">
                  <stat.icon className="h-8 w-8 text-primary mx-auto" />
                  <div className="text-2xl md:text-3xl font-bold text-foreground" data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2009 by master plumber Mike Johnson, AquaPro began as a small family business with a simple mission: to provide honest, reliable plumbing services to the Johannesburg community.
                </p>
                <p>
                  What started as a one-man operation has grown into a trusted team of licensed professionals, but we've never lost sight of our core values: integrity, quality workmanship, and exceptional customer service.
                </p>
                <p>
                  Today, we're proud to serve thousands of satisfied customers across Johannesburg, from emergency repairs to complete renovations. Every project, big or small, receives the same level of dedication and attention to detail.
                </p>
              </div>
              <Button 
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                data-testid="button-contact-us"
                onClick={() => window.location.href = '/contact'}
              >
                Contact Us Today
              </Button>
            </div>
            
            <div className="space-y-6">
              <Card className="hover-elevate">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-primary" />
                    <span>Our Mission</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To provide exceptional plumbing services that solve problems, exceed expectations, and build lasting relationships with our customers through honesty, reliability, and superior craftsmanship.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-elevate">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-primary" />
                    <span>Our Values</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Integrity in every interaction</li>
                    <li>• Quality workmanship guaranteed</li>
                    <li>• Transparent, upfront pricing</li>
                    <li>• Respect for your time and property</li>
                    <li>• Continuous learning and improvement</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Licensed & Certified
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We maintain the highest standards of professionalism and compliance with all industry regulations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {certifications.map((cert) => (
              <Badge 
                key={cert} 
                variant="secondary" 
                className="p-3 text-center justify-center h-auto"
                data-testid={`badge-cert-${cert.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Areas We Serve
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                AquaPro proudly serves Johannesburg and surrounding areas. Our strategically located team ensures rapid response times across all service areas.
              </p>
              
              <div className="grid grid-cols-2 gap-3">
                {serviceAreas.map((area) => (
                  <div key={area} className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="hover-elevate">
              <CardHeader>
                <CardTitle>Why Choose AquaPro?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                    <div>
                      <div className="font-medium text-foreground">Experience You Can Trust</div>
                      <div className="text-sm text-muted-foreground">15+ years serving the Johannesburg community</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                    <div>
                      <div className="font-medium text-foreground">24/7 Emergency Service</div>
                      <div className="text-sm text-muted-foreground">Always available when you need us most</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                    <div>
                      <div className="font-medium text-foreground">Upfront Pricing</div>
                      <div className="text-sm text-muted-foreground">No hidden fees or surprise charges</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                    <div>
                      <div className="font-medium text-foreground">Satisfaction Guaranteed</div>
                      <div className="text-sm text-muted-foreground">We stand behind our work 100%</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}