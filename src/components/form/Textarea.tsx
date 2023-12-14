import React from "react";

type textareaProps = {
  label?: string,
  setData: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  className?: string;
  min: number;
  max: number;
  required?: boolean;
}
function Textarea({label, setData, placeholder, className, min, max, required}: textareaProps) {
  return (
    <div className={className + " form-control"}>
        {label && 
        <label className="label">
            <span className="label-text">{label}</span>
        </label>}
        <textarea required={required}  placeholder={placeholder || label} onChange={e => setData(e.target.value)} className="textarea text-sm md:textarea-md textarea-bordered h-24" minLength={min} maxLength={max}></textarea>
    </div>
  )
}

export default Textarea