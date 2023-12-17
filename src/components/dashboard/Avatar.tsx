type AvatarType = {
  img: string;
  title: string;
  desc: string
}
function Avatar({img, title, desc}: AvatarType) {
  return (
    <div className="flex items-center gap-3">
        <div className="avatar">
        <div className="mask mask-circle w-12 h-12">
            <img src={img} alt="Avatar Tailwind CSS Component" />
        </div>
        </div>
        <div>
        <div className="font-bold">{title}</div>
        <div className="text-sm opacity-50">{desc}</div>
        </div>
    </div>
  )
}

export default Avatar