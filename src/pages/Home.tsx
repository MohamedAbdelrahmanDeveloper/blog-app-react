import ContentCreators from "../components/home/ContentCreators";
import Features from "../components/home/Features";
import Hero from "../components/home/Hero";
import SomeOfBlogs from "../components/home/SomeOfBlogs";
import HeaderApp from "../components/layout/Header";

function Home() {
  return (
    <main>
      <div className='fixed top-0 left-0 w-full z-30'>
          <HeaderApp />
      </div>
      <div className="mt-10 mb-20 space-y-32">
        <Hero />
        <Features />
        <SomeOfBlogs />
        <ContentCreators />
      </div>
    </main>
  );
}

export default Home;
