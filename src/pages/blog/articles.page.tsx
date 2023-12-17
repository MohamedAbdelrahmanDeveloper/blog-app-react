import Article from '../../components/blog/Article';

function ArticlesPage() {
  return (
    <section className='xl:max-w-7xl mx-auto my-6'>
      <h3 className="text-xl font-medium my-6">The latest articles</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {
          [4,5,8,6,9,1,35,47,68,74,972,52,65,552,482].map(e => {
            return <Article  key={e} e={e} /> 
          })
        }
      </div>
    </section>
  )
}

export default ArticlesPage