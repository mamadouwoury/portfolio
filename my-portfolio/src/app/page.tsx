import Image from "next/image";
import HeroSection from '@/components/Home/HeroSection'
import FeaturedProjects from '@/components/Home/FeaturedProjects'

export default function Home() {
  return (
    <div className="space-y-16">
      <HeroSection />
      <FeaturedProjects />
    </div>
  );
}
