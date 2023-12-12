import { Link } from 'react-router-dom'

type Props = {
    e: number,
    className?: string
}

function Blog({e, className}: Props) {
  return (
    <div className={`${className} card bg-base-100 shadow-xl`}>
        <figure><img src="https://images.pexels.com/photos/12756665/pexels-photo-12756665.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="hello" /></figure>
        <div className="card-body p-4">
            <div className="flex space-x-3">
              <Link to={`/user/${e}`} >
                <div className="avatar">
                  <div className="w-10 h-10 rounded-full">
                    <img src="https://png.pngtree.com/png-clipart/20201128/ourlarge/pngtree-boy-avatar-png-image_2431606.jpg" />
                  </div>
                </div>
              </Link>
              <div>
                <Link to={`/user/${e}`} >
                  <h2 className="text-base text-base-content/75">@mohamed</h2>
                </Link>
                <p className="text-base-content/50 text-xs">May, 9, 2023</p>
              </div>
            </div>
            <h2 className='card-title text-base-content/80'>
              <Link to={`/blog/${e}`} >تشغيل حساب آلي في منصّة بسّام</Link>
            </h2>
            <p className='text-base-content/50  '>الحسابات الآلية هي وسيلة لتوفير نشر مؤتمت لتغذية معينة في منصّة بسّام. المقال يشرح طريقة عملها وشروط استخدامها.</p>
            <div className="card-actions justify-end">
            <Link to={`/blog/${e}`} className="btn btn-sm btn-primary">قراءة المزيد..</Link>
            {/* <button className="btn btn-primary">Read More..</button> */}
            </div>
        </div>
    </div>
  )
}

export default Blog