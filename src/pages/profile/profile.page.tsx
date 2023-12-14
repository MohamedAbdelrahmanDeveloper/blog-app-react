import Blog from "../../components/blog/Blog"

function ProfilePage() {
  return (
    <section className="md:w-3/4 mx-auto space-y-5">
        <div className="shadow">
            <div className="card w-full rounded-box overflow-hidden">
                <figure className="h-48 md:h-64 rounded-none">
                    <img src="https://images.pexels.com/photos/4128029/pexels-photo-4128029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full h-full md:h-auto" alt="krmmrko" />
                </figure>
                <div className="card-body relative py-2 px-4 md:px-6">
                    <div className="avatar online absolute -top-16">
                        <div className="w-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://avatars.githubusercontent.com/u/54208900?v=4" />
                        </div>
                    </div>
                    <div className="flex justify-end md:-mtk-6">
                        <div className="">
                            <button className="btn btn-warning">Report</button>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <h1 className="text-xl font-bold">Mohamed Abdelrahman</h1>
                        <h3 className="text-base-content/60">@m7md0a</h3>
                        <p className="text-sm text-base-content/80">This is bio. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, tempora facere. Itaque architecto perspiciatis dolore nesciunt doloribus consequuntur commodi debitis atque ipsum enim! Soluta, aliquam! Voluptatem laboriosam deserunt amet unde.</p>
                        <ul className="[&>li]:flex [&>li]:items-center [&>li]:gap-x-2 [&>li>i]:text-base-content/80 flex flex-col md:flex-row gap-x-4 text-base-content py-4">
                            <li>
                                <i className='bi bi-calendar-check'></i>
                                <span>join May 2023</span>
                            </li>
                            <li>
                                <i className='bi bi-link-45deg'></i>
                                <a className="link " href="https://m-Abdelrahman.vercel.app">https://m-Abdelrahman.vercel.app</a>
                            </li>
                        </ul>
                     </div>
                </div>
            </div>
        </div>
        <div>
            <h1 className="text-2xl text-primary font-bold underline underline-offset-1">Blogs</h1>
            <div className="grid md:grid-cols-2 gap-4 my-5">
                <Blog e={45}/>
                <Blog e={45}/>
                <Blog e={45}/>
                <Blog e={45}/>
            </div>
        </div>
        <div className="flex items-center justify-center h-[50vh]">
            <h2 className="text-2xl text-base-content/80">This user not have blogs yet!</h2>
        </div>
    </section>
  )
}

export default ProfilePage