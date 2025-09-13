import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import bathroomReno from "@assets/generated_images/Bathroom_renovation_showcase_710f10ea.png";
import emergencyRepair from "@assets/generated_images/Emergency_plumbing_service_image_108fb48c.png";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // todo: remove mock functionality - replace with real project images
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "Modern Bathroom Renovation",
      category: "Bathroom",
      image: bathroomReno,
      description: "Complete bathroom renovation with modern fixtures and plumbing installation"
    },
    {
      id: 2,
      title: "Emergency Pipe Repair",
      category: "Emergency",
      image: emergencyRepair,
      description: "24/7 emergency response for burst pipe repair in residential property"
    },
    {
      id: 3,
      title: "Kitchen Plumbing Install",
      category: "Kitchen",
      image: bathroomReno,
      description: "New kitchen plumbing installation with modern fittings"
    },
    {
      id: 4,
      title: "Commercial Office Repair",
      category: "Commercial",
      image: emergencyRepair,
      description: "Office building plumbing maintenance and repair services"
    },
    {
      id: 5,
      title: "Geyser Installation",
      category: "Installation",
      image: bathroomReno,
      description: "Professional geyser installation with quality warranty"
    },
    {
      id: 6,
      title: "Drain Cleaning Service",
      category: "Maintenance",
      image: emergencyRepair,
      description: "Professional drain cleaning and blockage removal"
    }
  ];

  const categories = ["All", ...Array.from(new Set(galleryItems.map(item => item.category)))];

  const filteredItems = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((category) => (
          <Badge
            key={category}
            variant={selectedCategory === category ? "default" : "secondary"}
            className="cursor-pointer hover-elevate px-4 py-2"
            onClick={() => setSelectedCategory(category)}
            data-testid={`badge-category-${category.toLowerCase()}`}
          >
            {category}
          </Badge>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <Dialog key={item.id}>
            <DialogTrigger asChild>
              <Card className="group cursor-pointer hover-elevate overflow-hidden">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    data-testid={`img-gallery-${item.id}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge variant="secondary" className="mb-2">
                      {item.category}
                    </Badge>
                    <h3 className="text-white font-semibold text-lg leading-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-4xl">
              <div className="space-y-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
                />
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-semibold text-foreground">{item.title}</h2>
                    <Badge variant="secondary">{item.category}</Badge>
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No projects found in this category.</p>
        </div>
      )}
    </div>
  );
}