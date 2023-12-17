import React from "react"

type CardType = {
    title?: string;
    className?: string;
    children: React.ReactNode;
}
function Card({title, className, children} : CardType) {
  return (
    <div className={`card bg-base-100 w-full ${className}`}>
        <div className="card-body p-4">
            <h2 className="card-title">{title}</h2>
            {children}
        </div>
    </div>
  )
}

export default Card