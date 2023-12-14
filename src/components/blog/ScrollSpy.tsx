import { ElementsType, IdsType } from "../../pages/blog/blogId.page"

function ScrollSpy({ids, elements}: {ids : IdsType[], elements: ElementsType[]}) {
  return (
    <div>
        {ids && ids.length > 0 &&
          <ul className="menu">
            {elements && elements.map((e: any)=> {
              return <li key={e.id}>
              <a className={`${e.tag === 'H1' ? "font-bold" :  e.tag === 'H2' ? "ms-4 text-xs" : "ms-6 text-xs"}`} href={"#"+e.id} >{e.tag === 'H2' ? '- ' : e.tag === 'H3' && '-- '}{e.text}</a>
              </li>
          })}
          </ul>
        }
    </div>
  )
}

export default ScrollSpy