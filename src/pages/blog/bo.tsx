import MarkdownEditor from "@uiw/react-markdown-editor";
import { useEffect, useState } from "react";
import ScrollSpy from "../../components/blog/ScrollSpy.jsx";
import { MD_DATA } from "./data";

function TEST() {
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
    let element = document.querySelector('#hamo .wmde-markdown')
    let newElements: any = []
    if (element?.children.length && element?.children.length > 0) {
      Array.from(element?.children).forEach(e => {
        if (e.tagName[0] === 'H') {
          newElements.push({id: e.id,tag: e.tagName, text: e.textContent})
        }
      })
    }

    
    setIds(getIdsFromElements(elements))
    setElements([...newElements])
  }, [])
  return (
    <div className="relative space-x-4">
      
       <div id="hamo">
        <ScrollSpy ids={ids} elements={elements}/>
        <MarkdownEditor.Markdown source={MD_DATA}></MarkdownEditor.Markdown>
       </div>

      </div>
  )
}

export default TEST
