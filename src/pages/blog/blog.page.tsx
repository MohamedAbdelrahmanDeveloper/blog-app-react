import Blog from '../../components/blog/Blog';

function BlogPage() {
  return (
    <section className='xl:max-w-7xl mx-auto my-6'>
      <h3 className="text-xl font-medium my-6">أحدث المقالات</h3>
      <div className='grid md:grid-cols-1 lg:grid-cols-3 gap-6'>
        {
          [4,5,8,6,9,1,35,47,68,74,972,52,65,552,482].map(e => {
            return <Blog  key={e} e={e} /> 
          })
        }
      </div>
    </section>
  )
}

export default BlogPage