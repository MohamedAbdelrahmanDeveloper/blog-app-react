import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero md:py-16">
        <div className="hero-content flex-col lg:flex-row-reverse gap-14 px-0 md:px-24 2xl:px-0">
          <div className="relative">
            <div className="absolute w-full h-full -left-3 top-3 -z-10 ring-4 ring-primary rounded-bl-[15%] rounded-tr-[15%] shadow-2xl"></div>
            <img src="https://images.pexels.com/photos/839443/pexels-photo-839443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="hello" className="md:max-w-2xl h-96 md:h-[40rem] rounded-bl-[15%] rounded-tr-[15%] shadow-2xl" />
          </div>
          <div className="md:-ms-20">
            <h1 className="text-4xl font-bold">Welcome to My <span className="text-primary">Articles</span></h1>
            <p className="py-6 text-xl">Enjoy reading the latest articles and stay updated with the latest news and updates
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ut iure dolorum facere blanditiis dolores, in debitis eaque deleniti exercitationem.
            </p>
            <div className="flex space-x-2">
              <Link to='/articles' className="btn btn-primary">Explore Articles
                <i className="bi bi-chevron-compact-right rtl:rotate-180"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden xl:block relative space-x-2 mt-auto mr-auto text-base-content/60 text-center w-1/4">
          <span className="space-x-2">
            <span>Do you have account ?</span>
            <Link to="/login" className="btn-link">Login</Link> -
          </span>
          <span className="space-x-2">
            <Link to="/help" className="btn-link">help</Link>
          </span>
        </div>
      </section>
  )
}

export default Hero