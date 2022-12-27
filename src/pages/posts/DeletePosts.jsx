//Params
import { useParams } from "react-router-dom";
//Mutate
import { mutate } from "swr";
//Link
import { Link } from "react-router-dom";

export function DeletePosts() {
  const param = useParams();
  const extractPosts = async (data) => {
    await fetch(`http://localhost:3000/posts/${param.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "Application/json" },
    })
      .then((res) => res.json())
      .then(
        () => mutate(`http://localhost:3000/posts/${param.id}`),
        alert("Post eliminado")
      );
  };
  return (
    <div>
      <Link to={".."}>
        <button onClick={(data) => extractPosts(data)}>Borrar Post</button>
      </Link>
    </div>
  );
}
