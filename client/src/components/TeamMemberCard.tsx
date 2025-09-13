import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TeamMemberCardProps {
  name: string;
  title: string;
  bio: string;
  image: string;
  experience: string;
  specialties: string[];
}

export default function TeamMemberCard({ name, title, bio, image, experience, specialties }: TeamMemberCardProps) {
  const initials = name.split(' ').map(n => n[0]).join('');

  return (
    <Card className="hover-elevate group transition-all duration-300">
      <CardHeader className="text-center pb-4">
        <Avatar className="h-24 w-24 mx-auto mb-4">
          <AvatarImage src={image} alt={name} />
          <AvatarFallback className="text-lg font-semibold bg-primary/10 text-primary">
            {initials}
          </AvatarFallback>
        </Avatar>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-foreground" data-testid={`text-name-${name.toLowerCase().replace(/\s+/g, '-')}`}>
            {name}
          </h3>
          <p className="text-primary font-medium" data-testid={`text-title-${name.toLowerCase().replace(/\s+/g, '-')}`}>
            {title}
          </p>
          <Badge variant="secondary" className="text-xs">
            {experience}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-bio-${name.toLowerCase().replace(/\s+/g, '-')}`}>
          {bio}
        </p>
        
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-foreground">Specialties:</h4>
          <div className="flex flex-wrap gap-2">
            {specialties.map((specialty, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="text-xs"
                data-testid={`badge-specialty-${specialty.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {specialty}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}