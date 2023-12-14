import { Dispatch, SetStateAction } from "react";


type InputType = {
    label?: string;
    type: string;
    setData: Dispatch<SetStateAction<string>>;
    placeholder: string;
    className?: string;
    classInput?: string;
    auth?: boolean;
    required?: boolean
}
function Input({label, type, setData, placeholder, className, auth, classInput, required} : InputType) {
  return (
    <div className={"form-control " + className}>
        {label && <label className="label">
            <span className="label-text">{label}</span>
        </label>}
        <input required={required} type={type || "text"} placeholder={placeholder || label} onChange={e => setData(e.target.value)} className={`input ${!auth && 'input-sm md:input-md'} input-bordered w-full ${classInput}`} />
    </div>
  )
}

export default Input