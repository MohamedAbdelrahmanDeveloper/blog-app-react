
function Features() {
  return (
    <section className="flex flex-col gap-10 md:flex-row my-10">
        <div className="space-y-5 md:w-2/4">
          <div className="space-y-2">
            <h1 className="section-title">Features and Overview</h1>
            <p className="text-base-content/50 ps-2">Enjoy reading the latest articles and stay updated with the latest news and updates</p>
          </div>
          <div className="flex space-x-3">
            <div className="avatar placeholder">
              <div className="bg-primary/5 rounded-full w-14 h-14">
                <span className="text-xl text-base-content/80"><i className="bi bi-search"></i></span>
              </div>
            </div> 
            <div>
              <h2 className="text-lg text-base-content/90">Search</h2>
              <p className="text-base-content/40 text-sm">Flexibility in Research</p>
            </div>
          </div>
          <div className="flex space-x-3">
            <div className="avatar placeholder">
              <div className="bg-primary/5 rounded-full w-14 h-14">
                <span className="text-xl text-base-content/80"><i className="bi bi-eye"></i></span>
              </div>
            </div> 
            <div>
              <h2 className="text-lg text-base-content/90">Visit</h2>
              <p className="text-base-content/40 text-sm">18,877 Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="flex space-x-3">
            <div className="avatar placeholder">
              <div className="bg-primary/5 rounded-full w-14 h-14">
                <span className="text-xl text-base-content/80"><i className="bi bi-postcard"></i></span>
              </div>
            </div> 
            <div>
              <h2 className="text-lg text-base-content/90">Posts</h2>
              <p className="text-base-content/40 text-sm">8,548 posts Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
        <div className="flex items-center md:justify-end">
          <div className="card md:card-side bg-black/80 text-neutral-content shadow-xl md:w-3/4 md:h-52 rounded-box">
            <figure className="md:w-52 h-full"><img className="w-full h-full" src="https://www.edarabia.com/ar/wp-content/uploads/2017/12/5-of-the-most-important-benefits-of-reading.jpg.webp" alt="Movie"/></figure>
            <div className="card-body md:w-2/4">
              <h2 className="card-title">Welcome to My Articles</h2>
              <p>Enjoy reading the latest articles and stay updated with the latest news and updates</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Articles</button>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Features