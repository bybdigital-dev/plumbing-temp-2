import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  image?: string;
}

export default function ServiceCard({ icon: Icon, title, description, features, image }: ServiceCardProps) {
  return (
    <Card className="h-full hover-elevate group transition-all duration-300">
      <CardHeader className="space-y-4">
        {image && (
          <div className="relative overflow-hidden rounded-md h-48">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              data-testid={`img-service-${title.toLowerCase().replace(/\s+/g, '-')}`}
            />
          </div>
        )}
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-md bg-primary/10">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">{description}</p>
        
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-muted-foreground">
              <div className="h-1.5 w-1.5 rounded-full bg-primary mr-3 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        <Button 
          variant="ghost" 
          className="w-full justify-between group-hover:bg-primary/5"
          data-testid={`button-service-${title.toLowerCase().replace(/\s+/g, '-')}`}
        >
          Learn More
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
}