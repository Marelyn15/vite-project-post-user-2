import { Form } from "../../components/form/Form";
//Page
import { UsersDetails } from "./UsersDetails";
//params
import { useParams } from "react-router-dom";
//mutate
import { mutate } from "swr"; //Agregara el cambio

export function EditUser() {
  const param = useParams();
  const extractUsers = async (data) => {
    await fetch(`http://localhost:3000/users/${param.id}`, {
      method: "PUT",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(
        () => mutate(`http://localhost:3000/users/${param.id}`),
        alert("Usuario modificado")
      );
  };
  return (
    <div>
      <UsersDetails />
      <h1>Editar usuario: </h1>
      <Form onSubmit={(data) => extractUsers(data)} />
    </div>
  );
}
