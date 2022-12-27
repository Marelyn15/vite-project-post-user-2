//Params
import { useParams } from "react-router-dom";
//Mutate
import { mutate } from "swr";
//Link
import { Link } from "react-router-dom";

export function DeleteUsers() {
  const param = useParams();
  const extractUsers = async (data) => {
    await fetch(`http://localhost:3000/users/${param.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "Application/json" },
    })
      .then((res) => res.json())
      .then(
        () => mutate(`http://localhost:3000/users/${param.id}`),
        alert("Usuario eliminado")
      );
  };
  return (
    <div>
      <Link to={".."}>
        <button onClick={(data) => extractUsers(data)}>Borrar User</button>
      </Link>
    </div>
  );
}
