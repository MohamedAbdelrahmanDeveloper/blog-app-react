import { useState } from "react";
import MarkdownEditor from '@uiw/react-markdown-editor';
import Input from "../../components/form/Input";

function AddBlog() {
  const [text, setText] = useState<string>()    
  const [title, setTitle] = useState<string>('')    
  return (
    <div className="min-h-screen space-y-5">
        <div className="flex flex-col w-96 space-y-4 ">
          <div className="card bg-primary w-96 h-96">Publish</div>
          <input type="file" className="file-input file-input-primary file-input-bordered w-full" />
        </div>
        <div className="flex space-x-4">
          <Input setData={setTitle} type="text" className="w-full" placeholder="Blog title"/>
          <button className="btn btn-primary">Publish</button>
        </div>
        {title}
        {/* <Input setData={setTitle} type="file" placeholder="dkm"/> */}
        <MarkdownEditor
            value={text}
            onChange={(value, viewUpdate) => {
                console.log(viewUpdate);
                setText(value)
            }}
            minHeight="50vh"
            maxHeight="100vh"
            previewWidth='100%'
        />
    </div>
  )
}

export default AddBlog
