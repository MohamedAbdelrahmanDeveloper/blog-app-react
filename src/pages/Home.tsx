import { Link } from "react-router-dom";
import Blog from "../components/blog/Blog";
import AuthorCard from "../components/home/AuthorCard";

function Home() {
  return (
    <div className="mt-10 mb-20 space-y-32">
       <section className="hero md:py-16">
        <div className="hero-content flex-col lg:flex-row-reverse gap-14">
          <div className="relative">
            <div className="absolute w-full h-full -left-3 top-3 -z-10 ring-4 ring-primary rounded-bl-[15%] rounded-tr-[15%] shadow-2xl"></div>
            <img src="https://cms-cdn.placeholder.co/Home_page1_PRIORITY_077711842c.webp" alt="hello" className="md:max-w-2xl h-96 md:h-[40rem] rounded-bl-[15%] rounded-tr-[15%] shadow-2xl" />
          </div>
          <div className="md:-ms-20">
            <h1 className="text-4xl font-bold">Welcome to My <span className="text-primary">Blogs</span></h1>
            <p className="py-6 text-xl">Enjoy reading the latest articles and stay updated with the latest news and updates
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ut iure dolorum facere blanditiis dolores, in debitis eaque deleniti exercitationem.
            </p>
            <div className="flex space-x-2">
              <Link to='/blog' className="btn btn-primary">Explore Blogs</Link>
            </div>
          </div>
        </div>
        <div className="hidden md:block relative space-x-2 mt-auto mr-auto text-base-content/60 text-center w-1/4">
          <span className="space-x-2">
            <span>Do you have account ?</span>
            <Link to="/login" className="btn-link">Login</Link> -
          </span>
          <span className="space-x-2">
            <Link to="/help" className="btn-link">help</Link>
          </span>
        </div>
      </section>
      <section className="flex flex-col gap-10 md:flex-row my-10">
        <div className="space-y-5 md:w-2/4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-primary">Features and Overview</h1>
            <p className="text-base-content/50 ps-2">Enjoy reading the latest articles and stay updated with the latest news and updates</p>
          </div>
          <div className="flex space-x-3">
            <div className="avatar placeholder">
              <div className="bg-base-content/10 rounded-full w-14 h-14">
                <span className="text-xl"><i className="bi bi-search"></i></span>
              </div>
            </div> 
            <div>
              <h2 className="text-lg">Search</h2>
              <p className="text-base-content/50">Flexibility in Research</p>
            </div>
          </div>
          <div className="flex space-x-3">
            <div className="avatar placeholder">
              <div className="bg-base-content/10 rounded-full w-14 h-14">
                <span className="text-xl"><i className="bi bi-eye-fill"></i></span>
              </div>
            </div> 
            <div>
              <h2 className="text-lg">Visit</h2>
              <p className="text-base-content/50">18,877 Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="flex space-x-3">
            <div className="avatar placeholder">
              <div className="bg-base-content/10 rounded-full w-14 h-14">
                <span className="text-xl"><i className="bi bi-postcard"></i></span>
              </div>
            </div> 
            <div>
              <h2 className="text-lg">Posts</h2>
              <p className="text-base-content/50">8,548 posts Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
        <div className="flex items-center md:justify-end">
          <div className="card md:card-side bg-black/80 text-neutral-content shadow-xl md:w-3/4 md:h-52 rounded-box">
            <figure className="md:w-52 h-full"><img className="w-full h-full" src="https://www.edarabia.com/ar/wp-content/uploads/2017/12/5-of-the-most-important-benefits-of-reading.jpg.webp" alt="Movie"/></figure>
            <div className="card-body md:w-2/4">
              <h2 className="card-title">Welcome to My Blogs</h2>
              <p>Enjoy reading the latest articles and stay updated with the latest news and updates</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Blogs</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-base-20k0">
        <h2 className="text-primary text-3xl font-bold my-4 text-center"><span className="border-b-2 border-primary">Blogs</span></h2>
        <div className="carousel carousel-center w-full p-4 mx-0 space-x-4">
          <div className="carousel-item">
            <Blog e={4} className="w-80"/>
          </div> 
          <div className="carousel-item">
            <Blog e={4} className="w-80"/>
          </div> 
          <div className="carousel-item">
            <Blog e={4} className="w-80"/>
          </div> 
          <div className="carousel-item">
            <Blog e={4} className="w-80"/>
          </div> 
          <div className="carousel-item">
            <Blog e={4} className="w-80"/>
          </div> 
          <div className="carousel-item">
            <Blog e={4} className="w-80"/>
          </div> 
          <div className="carousel-item">
            <Blog e={4} className="w-80"/>
          </div> 
          <div className="carousel-item">
            <Blog e={4} className="w-80"/>
          </div> 
          <div className="carousel-item">
            <Blog e={4} className="w-80"/>
          </div> 
          <div className="carousel-item">
            <Blog e={4} className="w-80"/>
          </div> 
          <div className="carousel-item">
            <Blog e={4} className="w-80"/>
          </div> 
        </div>
      </section>
      <section>
        <div>
          <h2 className="text-3xl font-bold text-primary text-center my-10"><span className="border-b-2 border-primary">Popular Content Creators</span></h2>
        </div>
        <div className="my-4 flex justify-between flex-col md:flex-row gap-4">
          <AuthorCard />
          <AuthorCard />
          <AuthorCard />
          <AuthorCard />
          <AuthorCard />
        </div>
      </section>
    </div>
  );
}

export default Home;
