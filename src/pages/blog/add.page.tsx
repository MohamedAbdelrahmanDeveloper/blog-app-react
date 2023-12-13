import React, { useRef, useState } from "react";
import MarkdownEditor from '@uiw/react-markdown-editor';
import Input from "../../components/form/Input";

function AddBlog() {
  const [text, setText] = useState<string>('')    
  const [title, setTitle] = useState<string>('')
  const [file, setFile] = useState<File>()
  const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | null>(null);
  const inputFileRef = useRef<HTMLInputElement>(null)

  const handelForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title && text && file) {
      console.log(title);
      console.log(file);
      console.log(text);
    }
  }
  const handelFileInputClick = () => {
      inputFileRef.current?.click();
  }
  const handleFileChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setFile(file)
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
          <div className={`card bg-primary md:w-64 overflow-hidden rounded  ${typeof imagePreview != "string" ? "h-64" : 'max-h-64'}`}>
            {typeof imagePreview === "string" ? <img src={imagePreview} alt="Preview" className="w-full h-full" />:
            <div onClick={handelFileInputClick} className="flex items-center justify-center h-full w-full">
              <h4 className="text-4xl text-base-100/50">Photo</h4>
            </div>}
          </div>
          <div className="flex flex-col w-full justify-end gap-4">
            <h1 className="text-2xl">Title: <span className="font-bold text-primary">{title}</span></h1>
            <form onSubmit={handelForm} className="flex flex-col gap-4">
              <Input auth setData={setTitle} type="text" className="w-full" placeholder="Blog title"/>
              <input ref={inputFileRef} onChange={handleFileChange} type="file" className="file-input file-input-primary file-input-bordered w-full hidden" />
              <button className="btn btn-primary">Publish</button> 
            </form>
          </div>
        </div>
        <MarkdownEditor
            value={text}
            onChange={(value) => {
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
