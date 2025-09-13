import ContactForm from "@/components/ContactForm";
import TeamMemberCard from "@/components/TeamMemberCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import maleTeamMember from "@assets/generated_images/Team_member_headshot_71a2bdaf.png";
import femaleTeamMember from "@assets/generated_images/Female_team_member_headshot_e3b4ba94.png";

export default function Contact() {
  // todo: remove mock functionality - replace with real team data
  const teamMembers = [
    {
      name: "Mike Johnson",
      title: "Lead Plumber & Owner",
      bio: "With over 15 years of experience in residential and commercial plumbing, Mike founded AquaPro to provide reliable, high-quality plumbing services to the Johannesburg area. He specializes in complex installations and emergency repairs.",
      image: maleTeamMember,
      experience: "15+ Years",
      specialties: ["Emergency Repairs", "Commercial Plumbing", "Bathroom Renovations"]
    },
    {
      name: "Sarah Williams", 
      title: "Senior Plumber",
      bio: "Sarah specializes in leak detection and modern bathroom installations. Her attention to detail and customer service excellence makes her a valued team member. She holds advanced certifications in green plumbing technologies.",
      image: femaleTeamMember,
      experience: "8+ Years",
      specialties: ["Leak Detection", "Bathroom Design", "Geyser Installation"]
    },
    {
      name: "David Chen",
      title: "Plumbing Technician",
      bio: "David brings expertise in drain cleaning and maintenance services. He's known for his problem-solving skills and commitment to getting the job done right. David is our go-to specialist for complex drainage issues.",
      image: maleTeamMember,
      experience: "5+ Years", 
      specialties: ["Drain Cleaning", "Pipe Maintenance", "Emergency Response"]
    }
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      primary: "+27 11 123 4567",
      secondary: "24/7 Emergency Line"
    },
    {
      icon: Mail,
      title: "Email", 
      primary: "info@aquapro.co.za",
      secondary: "We respond within 2 hours"
    },
    {
      icon: MapPin,
      title: "Service Area",
      primary: "Johannesburg & Surrounds",
      secondary: "Covering all major suburbs"
    },
    {
      icon: Clock,
      title: "Business Hours",
      primary: "Mon-Fri: 7AM-6PM",
      secondary: "Emergency: 24/7"
    }
  ];

  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-orange/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Contact <span className="text-primary">AquaPro</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Ready to solve your plumbing problems? Get in touch with our expert team for fast, reliable service. We're here to help 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info) => (
              <Card key={info.title} className="text-center hover-elevate">
                <CardContent className="pt-6 space-y-3">
                  <info.icon className="h-8 w-8 text-primary mx-auto" />
                  <h3 className="text-lg font-semibold text-foreground">{info.title}</h3>
                  <div className="space-y-1">
                    <div className="font-medium text-foreground">{info.primary}</div>
                    <div className="text-sm text-muted-foreground">{info.secondary}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <Badge variant="secondary" className="mb-4">
              Our Expert Team
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Meet the Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our experienced and licensed plumbing professionals are dedicated to providing exceptional service and building lasting relationships with our customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to get started? Fill out the form below or give us a call. We'll respond quickly with a solution tailored to your needs.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16 bg-orange">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <Badge variant="secondary" className="mb-4">
              Emergency Service Available
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-orange-foreground">
              Plumbing Emergency? Call Now!
            </h2>
            <p className="text-lg text-orange-foreground/90">
              Don't wait when you have a plumbing emergency. Our 24/7 emergency service team is standing by to help.
            </p>
            <div className="text-2xl md:text-3xl font-bold text-orange-foreground">
              +27 11 123 4567
            </div>
            <p className="text-orange-foreground/80">
              Available 24 hours a day, 7 days a week for emergency plumbing repairs
            </p>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-8">
            <h2 className="text-3xl font-bold text-foreground">
              Our Service Area
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We proudly serve Johannesburg and surrounding areas with fast, reliable plumbing services.
            </p>
          </div>
          
          <Card className="h-64 bg-muted/30 border-2 border-dashed border-muted-foreground/25">
            <CardContent className="h-full flex items-center justify-center">
              <div className="text-center space-y-2">
                <MapPin className="h-12 w-12 text-muted-foreground mx-auto" />
                <div className="text-muted-foreground">Interactive Map Coming Soon</div>
                <div className="text-sm text-muted-foreground">
                  Currently serving Johannesburg, Sandton, Rosebank, Randburg, and surrounding areas
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}