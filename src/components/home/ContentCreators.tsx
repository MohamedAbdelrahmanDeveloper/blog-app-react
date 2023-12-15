import AuthorCard from "./AuthorCard"


function ContentCreators() {
  return (
    <section>
        <div>
            <h2 className="section-title text-center my-10"><span>Popular Content Creators</span></h2>
        </div>
        <div className="my-4 flex justify-between flex-col md:flex-row gap-4">
            <AuthorCard />
            <AuthorCard />
            <AuthorCard />
            <AuthorCard />
            <AuthorCard />
        </div>
    </section>
  )
}

export default ContentCreators