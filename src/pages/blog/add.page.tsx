import React, { useRef, useState } from "react";
import MarkdownEditor from '@uiw/react-markdown-editor';
import Input from "../../components/form/Input";
import Textarea from "../../components/form/Textarea";
import FileInput from "../../components/form/FileInput";

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
      console.log(text);
      console.log(file);
    }
  }
  const handelFileInputClick = () => {
      inputFileRef.current?.click();
  }

  return (
    <div className="min-h-screen max-w-5xl mx-auto space-y-5">
        <div className="flex flex-col md:flex-row gap-5">
          <div onClick={handelFileInputClick} className={`cursor-pointer card bg-primary md:w-64 overflow-hidden rounded  ${typeof imagePreview != "string" ? "h-64" : 'max-h-64'}`}>
            {typeof imagePreview === "string" ? <img src={imagePreview} alt="Preview" className="w-full h-full" />:
            <div className="flex items-center justify-center h-full w-full">
              <h4 className="text-base-100/50 flex flex-col items-center"><i className="bi bi-filetype-jpg text-4xl "></i><span className="text-lg">Photo</span></h4>
            </div>}
          </div>
          <div className="flex flex-col w-full justify-end gap-4">
            <h1 className="text-2xl">Title: <span className="font-bold text-primary">{title}</span></h1>
            <form onSubmit={handelForm} className="flex flex-col gap-4">
              <Input required auth setData={setTitle} type="text" className="w-full" placeholder="Blog title"/>
              <Textarea required min={5} max={30} setData={setTitle} className="w-full" placeholder="Description"/>
              <FileInput ref={inputFileRef} accept="image/*" setFile={setFile} setImagePreview={setImagePreview} className="hidden" />
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
