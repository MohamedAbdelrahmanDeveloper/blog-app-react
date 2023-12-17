import React from 'react'

type TableType = {
    children: React.ReactNode;
    titles: string[]
}

type TableBody = {
    children:React.ReactNode;
    className?: string
}

function Table({children, titles}: TableType) {
  return (
    <table className="table">
        <thead>
            <tr>
                {titles.map(e => <th key={e}>{e}</th>)}                                                          
            </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
    </table>
  )
}



Table.tr = ({children, className}: TableBody) => {
    return <tr className={className}>
        {children}
    </tr>
}

Table.td = ({children, className}: TableBody) => {
    return <td className={className}>{children}</td>
}



export default Table
