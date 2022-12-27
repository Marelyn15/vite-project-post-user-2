//Hooks
import { useRef } from "react";
//Inputs
import { TextInput } from "./inputs/TextInput";
import { TextArea } from "./inputs/TextAre";

export function Form({ onSubmit }) {
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
        <TextInput type="text" title={"Name"} name={"name"} required />
        <TextInput type="number" title={"Age"} name={"age"} required/>
        <TextArea title={"Address"} name={"address"} required/>
        <button type={"submit"}>Enviar</button>
      </form>
    </div>
  );
}
