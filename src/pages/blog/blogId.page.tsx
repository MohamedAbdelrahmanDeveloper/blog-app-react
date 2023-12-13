import MarkdownEditor from '@uiw/react-markdown-editor'
import Blog from '../../components/blog/Blog'
import { useEffect, useState } from 'react';
import ScrollSpy from '../../components/blog/ScrollSpy';
import { MD_DATA } from "./data";


function BlogIdPage() {
  const [elements, setElements] = useState<any>([])
  const [ids, setIds] = useState<any>([])

  const getIdsFromElements = (elements: []):[] => {
    const newElements:any = []
    elements.forEach((e:any) => {
      newElements.push(e.id)
    })
    return newElements
  }

  useEffect(() => {
    let element = document.querySelector('#blog .wmde-markdown')
    let newElements: any = []
    if (element?.children.length && element?.children.length > 0) {
      Array.from(element?.children).forEach(e => {
        if (e.tagName[0] === 'H') {
          newElements.push({id: e.id,tag: e.tagName, text: e.textContent})
        }
      })
    }
    setElements([...newElements])
    setIds(getIdsFromElements(newElements))
  }, [])
  
  return (
    <div className="flex flex-col md:flex-row max-w-6xl mx-auto my-10 gap-4 relative" dir='rtl' id="blog">
      <div className="md:w-3/4 space-y-5">
        <h1 className="text-3xl">تشغيل حساب آلي في منصّة بسّام</h1>
        <img src="/img.jpg" className="w-full rounded-box" alt="hello" />
        <p className="text-lg">الحسابات الآلية هي وسيلة لتوفير نشر مؤتمت لتغذية معينة في منصّة بسّام. المقال يشرح طريقة عملها وشروط استخدامها.</p>
        <ul className="[&>li]:flex [&>li]:items-center [&>li]:gap-x-1 [&>li>svg]:fill-base-content/70 [&>li>svg]:w-5 [&>li>svg]:h-5 flex gap-x-4 text-base-content border-y border-base-content/10 py-4">
          <li>
            <svg aria-hidden="true" viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg"><path d="M248 104c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96zm0 144c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm0-240C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-49.7 0-95.1-18.3-130.1-48.4 14.9-23 40.4-38.6 69.6-39.5 20.8 6.4 40.6 9.6 60.5 9.6s39.7-3.1 60.5-9.6c29.2 1 54.7 16.5 69.6 39.5-35 30.1-80.4 48.4-130.1 48.4zm162.7-84.1c-24.4-31.4-62.1-51.9-105.1-51.9-10.2 0-26 9.6-57.6 9.6-31.5 0-47.4-9.6-57.6-9.6-42.9 0-80.6 20.5-105.1 51.9C61.9 339.2 48 299.2 48 256c0-110.3 89.7-200 200-200s200 89.7 200 200c0 43.2-13.9 83.2-37.3 115.9z"></path></svg>
            <span>Ahmed</span>
          </li>
          <li>
            <svg aria-hidden="true" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z"></path></svg>
            <span>10-12-2022</span>
          </li>
        </ul>
        <MarkdownEditor.Markdown source={MD_DATA} />
        <div className="border-t border-base-content/10 pt-4">
          <h2 className="text-2xl mb-6 text-primary underline underline-offset-4">مقالات مشابهة</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Blog e={45312}/>
          <Blog e={945}/>
          <Blog e={485}/>
          <Blog e={458}/>
          <Blog e={458}/>
          <Blog e={445}/>
        </div>
      </div>
      </div>
      <ScrollSpy ids={ids} elements={elements}/>
    </div>
  )
}

export default BlogIdPage