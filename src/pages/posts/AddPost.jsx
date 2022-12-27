import { FormPost } from "../../components/formPost/FormPost";
import { BackButton } from "../../components/backButton";
//mutate
import { mutate } from "swr"; //Agregara el cambio

export function AddPost() {
  const extractPost = async (data) => {
    await fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(
        () => mutate("http://localhost:3000/posts"),
        alert("Nuevo post agregado")
      );
  };
  return (
    <div>
      <BackButton />
      <h1>Agregar Post</h1>
      <FormPost onSubmit={(data) => extractPost(data)} />
    </div>
  );
}
