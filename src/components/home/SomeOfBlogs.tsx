import Blog from "../blog/Blog"

function SomeOfBlogs() {
  return (
    <section className="bg-base-20k0">
        <h2 className="section-title text-center my-4"><span>Blogs</span></h2>
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
  )
}

export default SomeOfBlogs