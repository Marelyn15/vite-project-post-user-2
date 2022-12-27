import { Form } from "../../components/form/Form";
import { BackButton } from "../../components/backButton";
//mutate
import { mutate } from "swr"; //Agregara el cambio


export function AddUser() {
  const extractUsers = async (data) => {
    await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(
        () => mutate("http://localhost:3000/users"),
        alert("Se ha agregado nuevo usuario")
      );
  };
  return (
    <div>
      <BackButton />
      <h1>Agregar nuevo usuario: </h1>
      <Form onSubmit={(data) => extractUsers(data)} />
    </div>
  );
}
