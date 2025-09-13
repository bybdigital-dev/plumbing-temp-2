import ServiceCard from '../ServiceCard';
import { Wrench, AlertTriangle, Droplets } from 'lucide-react';
import emergencyImage from "@assets/generated_images/Emergency_plumbing_service_image_108fb48c.png";

export default function ServiceCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      <ServiceCard
        icon={AlertTriangle}
        title="Emergency Plumbing"
        description="24/7 emergency plumbing services for urgent repairs and installations."
        features={[
          "24/7 availability",
          "Rapid response time",
          "Licensed professionals",
          "Upfront pricing"
        ]}
        image={emergencyImage}
      />
      <ServiceCard
        icon={Droplets}
        title="Leak Detection"
        description="Advanced leak detection technology to find and fix hidden leaks."
        features={[
          "Non-invasive detection",
          "Latest technology",
          "Accurate location",
          "Minimal disruption"
        ]}
      />
      <ServiceCard
        icon={Wrench}
        title="General Repairs"
        description="Comprehensive plumbing repair services for all your needs."
        features={[
          "All types of repairs",
          "Quality workmanship",
          "Warranty included",
          "Competitive rates"
        ]}
      />
    </div>
  );
}