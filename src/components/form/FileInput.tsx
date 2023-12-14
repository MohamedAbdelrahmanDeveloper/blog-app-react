import React, { forwardRef, useImperativeHandle, useRef } from "react";

type FileInputType = {
  label?: string;
  setFile: React.Dispatch<React.SetStateAction<File | undefined>>;
  setImagePreview?: React.Dispatch<React.SetStateAction<string | ArrayBuffer | null>>;
  accept: string;
  className?: string;
  required?: boolean;
}

const FileInput = forwardRef(({label, setFile, setImagePreview, accept, required, className}: FileInputType, ref) => {
  const inputFileRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setFile(file)
      if (file && setImagePreview) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
      }
    }
  }

  useImperativeHandle(ref, () => ({
    click: () => {
      if (inputFileRef.current) {
        inputFileRef.current.click();
      }
    },
  }));

  return (
    <div className={className + " form-control"}>
      {
        label && <label className="label">
          <span className="label-text">{label}</span>
        </label>
      }
      <input type="file" ref={inputFileRef} required={required} accept={accept} onChange={handleFileChange} className="file-input file-input-sm md:file-input-md file-input-bordered" />
    </div>
  )
})

export default FileInput