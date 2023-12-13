import { Link } from 'react-router-dom'

function BlogSmall() {
  return (
    <div className="card shadow w-full md:w-64 space-y-1">
        <figure><img src="/img.jpg" alt="hello" /></figure>
        <div className="card-body p-1">
            <Link to={'/blog'}><h3 className="text-xl font-medium text-center">تشغيل حساب آلي في منصّة بسّام</h3></Link>
        </div>
    </div>
  )
}

export default BlogSmall