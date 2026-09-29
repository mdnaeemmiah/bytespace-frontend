import Hero from "@/src/components/home/Hero";
import Sponsor from "@/src/components/home/sponser";
import Category from "@/src/components/home/Category";
import Explore from "@/src/components/home/explore";
import Path from "@/src/components/home/path";
import Review from "@/src/components/home/Review";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Sponsor />
      <Category />
      <Explore />
      <Path />
      <Review></Review>
    </>
  )
}
