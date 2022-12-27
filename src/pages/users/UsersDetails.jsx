//botones
import { BackButton } from "../../components/backButton";
//hooks
import { useParams } from "react-router-dom";
import useSWR from "swr";
//Link
import { Link } from "react-router-dom";
//Page
import { DeleteUsers } from "./DeleteUsers";

export function UsersDetails() {
  const param = useParams();
  const url = `http://localhost:3000/users/${param.id}`;
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const {
    data: dataUser,
    error: errorUser,
    isLoading: isLoadingUser,
  } = useSWR(url, fetcher);
  const {
    data: dataPost,
    error: errorPost,
    isLoading: isLoadingPost,
  } = useSWR(`http://localhost:3000/users/${param.id}/posts`, fetcher);
  if (errorUser || errorPost)
    return (
      <>
        <h1>Hubo un error</h1>
      </>
    );
  if (isLoadingUser || isLoadingPost)
    return (
      <>
        <h1>Cargando...</h1>
      </>
    );

  return (
    <div className="main-container">
    <div>
      <BackButton />
      <br />
      <DeleteUsers />
      <h1>{dataUser.name}</h1>
      <hr />
      <p>Edad: {dataUser.age}</p>
      <p>ID: {dataUser.id}</p>
      <p>Dirrecion: {dataUser.address}</p>
      <h2>Posts</h2>
      <ol>
        {dataPost.map((post, index) => {
          return (
            <li key={index}>
              {" "}
              Titulo <Link to={`/users/${post?.id}/posts`}>{post.title}</Link>
            </li>
          );
        })}
      </ol>
      <Link to="edituser">Editar Usuario: </Link>
    </div>
    </div>
  );
}
