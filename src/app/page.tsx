import Hero from "@/components/home/Hero";
import FeaturedTournament from "@/components/home/FeaturedTournament";
import FeaturedBlogs from "@/components/home/FeaturedBlogs";

export default function Home() {
  return (
    <div className="bg-white">
      <Hero></Hero>
      <FeaturedTournament></FeaturedTournament>
      <FeaturedBlogs></FeaturedBlogs>
    </div>
  );
}
