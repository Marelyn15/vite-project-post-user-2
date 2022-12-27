//botones
import { BackButton } from "../../components/backButton";
//hooks
import { useParams } from "react-router-dom";
import useSWR from "swr";
//Link
import { Link } from "react-router-dom";
import { DeletePosts } from "./DeletePosts";

export function PostsDetails() {
  const param = useParams();
  const url = `http://localhost:3000/posts/${param.id}`;
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const {
    data: dataPost,
    error: errorPost,
    isLoading: isLoadingPost,
  } = useSWR(url, fetcher);
  const {
    data: dataUser,
    error: errorUser,
    isLoading: isLoadingUser,
  } = useSWR(`http://localhost:3000/users/${param.id}`, fetcher);

  if (errorPost)
    return (
      <>
        <h1>Hubo un error</h1>
      </>
    );
  if (isLoadingPost)
    return (
      <>
        <h1>Cargando...</h1>
      </>
    );

  return (
    <div>
      <BackButton />
      <br />
      <DeletePosts />
      <h1> {dataPost.title}</h1>
      <hr />
      <p>
        <Link to={`/posts/${dataUser?.id}/users`}>{dataUser?.name}</Link>
      </p>
      <p>Content: {dataPost.content}</p>
      <p>Created at: {dataPost.created_at}</p>
      <Link to="editpost">Editar Post: </Link>
    </div>
  );
}
