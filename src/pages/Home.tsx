import ContentCreators from "../components/home/ContentCreators";
import Features from "../components/home/Features";
import Hero from "../components/home/Hero";
import SomeOfBlogs from "../components/home/SomeOfBlogs";

function Home() {
  return (
    <div className="container mx-auto mt-24 mb-20 space-y-32">
      <Hero />
      <Features />
      <SomeOfBlogs />
      <ContentCreators />
    </div>
  );
}

export default Home;
