import Gallery from "@/components/Gallery";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Camera, Award, Clock } from "lucide-react";

export default function GalleryPage() {
  const stats = [
    { icon: Camera, label: "Projects Completed", value: "500+" },
    { icon: Award, label: "Satisfied Customers", value: "100%" },
    { icon: Clock, label: "Years Experience", value: "15+" }
  ];

  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-orange/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Our Work <span className="text-primary">Gallery</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Take a look at some of our recent projects. From emergency repairs to complete bathroom renovations, see the quality craftsmanship that sets AquaPro apart.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl md:text-3xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <Badge variant="secondary" className="mb-4">
              Our Featured Work
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Quality Results You Can See
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every project we complete is a testament to our commitment to excellence. Browse through our gallery to see the transformation we bring to homes and businesses.
            </p>
          </div>

          {/* Gallery Component */}
          <Gallery />
        </div>
      </section>

      {/* Project Types Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Project Categories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We handle a wide range of plumbing projects, each with the same attention to detail and commitment to quality.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "Emergency Repairs",
              "Bathroom Renovations", 
              "Kitchen Plumbing",
              "Commercial Projects",
              "Geyser Installations",
              "Drain Cleaning",
              "Leak Detection",
              "Pipe Replacements",
              "Fixture Installations",
              "Maintenance Work",
              "New Constructions",
              "Outdoor Plumbing"
            ].map((category) => (
              <Badge 
                key={category}
                variant="outline" 
                className="p-3 text-center justify-center h-auto hover-elevate cursor-pointer"
                data-testid={`badge-project-${category.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              What Our Customers Say
            </h2>
            
            <blockquote className="text-xl md:text-2xl text-muted-foreground italic leading-relaxed">
              "AquaPro transformed our outdated bathroom into a modern masterpiece. The attention to detail and quality of work exceeded our expectations. Highly recommended!"
            </blockquote>
            
            <div className="text-center">
              <div className="font-semibold text-foreground">Sarah and Mark Johnson</div>
              <div className="text-muted-foreground">Bathroom Renovation Project</div>
            </div>

            <div className="flex justify-center space-x-1 mt-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg 
                  key={star} 
                  className="h-5 w-5 fill-orange text-orange" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-primary-foreground/90">
              Let us help you create your next success story. Contact AquaPro today for a free consultation and quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-orange text-orange-foreground hover:bg-orange/90"
                data-testid="button-gallery-quote"
              >
                Get Free Quote
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                data-testid="button-gallery-call"
              >
                Call +27 11 123 4567
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}