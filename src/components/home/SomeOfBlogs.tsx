import { Link } from "react-router-dom"
import Article from "../blog/Article"

function SomeOfArticles() {
  return (
    <section className="bg-base-20k0">
        <h2 className="section-title text-center my-4"><span>Articles</span></h2>
        <div className="carousel carousel-center w-full p-4 mx-0 space-x-4">
          <div className="carousel-item">
            <Article e={4} className="w-80"/>
          </div> 
          <div className="carousel-item">
            <Article e={4} className="w-80"/>
          </div> 
          <div className="carousel-item">
            <Article e={4} className="w-80"/>
          </div> 
          <div className="carousel-item">
            <Article e={4} className="w-80"/>
          </div> 
          <div className="carousel-item">
            <Article e={4} className="w-80"/>
          </div> 
          <div className="carousel-item">
            <Article e={4} className="w-80"/>
          </div> 
          <div className="carousel-item">
            <Article e={4} className="w-80"/>
          </div> 
          <div className="carousel-item">
            <Article e={4} className="w-80"/>
          </div> 
          <div className="carousel-item">
            <Article e={4} className="w-80"/>
          </div> 
          <div className="carousel-item">
            <Article e={4} className="w-80"/>
          </div> 
          <div className="carousel-item">
            <Article e={4} className="w-80"/>
          </div> 
        </div>
        <div className="flex justify-end mt-4">
          <Link to={'/articles'} className="btn btn-primary">More Articles 
            <i className="bi bi-chevron-compact-right rtl:rotate-180"></i>
          </Link>
        </div>
      </section>
  )
}

export default SomeOfArticles