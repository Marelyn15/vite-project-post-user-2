//Hooks
import { useRef } from "react";
//Inputs
import { TextInput } from "./inputs/TextInput";

export function FormPost({ onSubmit }) {
  const formRef = useRef(null);
  const hanleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    onSubmit(data);
  };
  return (
    <div>
      <form ref={formRef} onSubmit={hanleSubmit}>
        <TextInput type="text" title={"Title"} name={"title"} required />
        <TextInput type="number" title={"Author id"} name={"userId"} required />
        <TextInput type="text" title={"Content"} name={"content"} required />
        <TextInput type="date" title={"Created"} name={"created_at"} required />
        <button type={"submit"}>Enviar</button>
      </form>
    </div>
  );
}
