import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
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
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

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

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedImageIndex(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImageIndex === null) return;
    
    const newIndex = direction === 'next' 
      ? (selectedImageIndex + 1) % filteredItems.length
      : selectedImageIndex === 0 ? filteredItems.length - 1 : selectedImageIndex - 1;
    
    setSelectedImageIndex(newIndex);
  };

  const currentImage = selectedImageIndex !== null ? filteredItems[selectedImageIndex] : null;

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
        {filteredItems.map((item, index) => (
          <Card 
            key={item.id} 
            className="group cursor-pointer hover-elevate overflow-hidden"
            onClick={() => openLightbox(index)}
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                data-testid={`img-gallery-${item.id}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              
              {/* Zoom icon overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                  <ZoomIn className="h-6 w-6 text-white" />
                </div>
              </div>
              
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
        ))}
      </div>

      {/* Lightbox Modal */}
      <Dialog open={isLightboxOpen} onOpenChange={setIsLightboxOpen}>
        <DialogContent className="max-w-7xl w-full p-0 bg-black/95">
          {currentImage && (
            <div className="relative">
              {/* Close button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
                onClick={closeLightbox}
              >
                <X className="h-6 w-6" />
              </Button>

              {/* Navigation buttons */}
              {filteredItems.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
                    onClick={() => navigateImage('prev')}
                  >
                    <ChevronLeft className="h-8 w-8" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
                    onClick={() => navigateImage('next')}
                  >
                    <ChevronRight className="h-8 w-8" />
                  </Button>
                </>
              )}

              {/* Main image */}
              <div className="flex items-center justify-center min-h-[80vh] p-8">
                <img
                  src={currentImage.image}
                  alt={currentImage.title}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Image info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="text-center space-y-2">
                  <Badge variant="secondary" className="mb-2">
                    {currentImage.category}
                  </Badge>
                  <h2 className="text-2xl font-semibold text-white">
                    {currentImage.title}
                  </h2>
                  <p className="text-white/80 max-w-2xl mx-auto">
                    {currentImage.description}
                  </p>
                  <div className="text-white/60 text-sm">
                    {selectedImageIndex! + 1} of {filteredItems.length}
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No projects found in this category.</p>
        </div>
      )}
    </div>
  );
}