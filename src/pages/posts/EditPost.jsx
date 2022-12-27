import { FormPost } from "../../components/formPost/FormPost";
import { PostsDetails } from "./PostsDetails";
//params
import { useParams } from "react-router-dom";
//mutate
import { mutate } from "swr"; //Agregara el cambio
export function EditPost() {
  const param = useParams();
  const extractPost = async (data) => {
    await fetch(`http://localhost:3000/posts/${param.id}`, {
      method: "PUT",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(
        () => mutate(`http://localhost:3000/posts/${param.id}`),
        alert("Post modificado")
      );
  };
  return (
    <div>
      <PostsDetails />
      <h1>Editar Post</h1>
      <FormPost onSubmit={(data) => extractPost(data)} />
    </div>
  );
}
