import React, { useState } from "react";
import MarkdownEditor from '@uiw/react-markdown-editor';
import Input from "../../components/form/Input";

function AddBlog() {
  const [text, setText] = useState<string>('')    
  const [title, setTitle] = useState<string>('')
  const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | null>(null);

  const handleFileChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
      }
    }
  }; 
  return (
    <div className="min-h-screen max-w-5xl mx-auto space-y-5">
        <div className="flex flex-col md:flex-row gap-5">
          <div className={`card bg-primary md:w-52 overflow-hidden rounded  ${typeof imagePreview != "string" ? "h-full" : 'max-h-full'}`}>
            {typeof imagePreview === "string" && <img src={imagePreview} alt="Preview" className="w-full max-h-64" />}
          </div>
          <div className="flex flex-col w-full justify-end gap-4">
            <h1 className="text-2xl">Title: <span className="font-bold text-primary">{title}</span></h1>
            <div className="flex flex-col gap-4">
              <Input auth setData={setTitle} type="text" className="w-full" placeholder="Blog title"/>
              <input onChange={handleFileChange} type="file" className="file-input file-input-primary file-input-bordered w-full" />
              <button className="btn btn-primary">Publish</button> 
            </div>
          </div>
        </div>
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
