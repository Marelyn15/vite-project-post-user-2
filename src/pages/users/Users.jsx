//Botones
import { BackButton } from "../../components/backButton";
//Hooks
import useSWR from "swr";
import { Link } from "react-router-dom";
//Icons
import { FaUsers } from "react-icons/fa";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";
//css
import '../../styles/index.css';

//Inicializacion
const url = "http://localhost:3000/users";
const fetcher = (url) => fetch(url).then((res) => res.json());

function Users() {
  const { data, error, isLoading } = useSWR(url, fetcher);
  //Si falla o carga
  if (error) return <h1>Hubo un error</h1>;
  if (isLoading) return <h1>Cargando...</h1>;

  return (
    <div className="main-container">
      <div className="heading">
        <BackButton />
        <h1 className="heading__title">
          {" "}
          <FaUsers className="card__icon"/> Usuarios
        </h1>
        <span className="card__go">
          <Link to="/adduser">
            <p className="card__link__init">
              {" "}
              <AiOutlineUserAdd className="card__icon" /> Agregar nuevo usuario
            </p>
          </Link>
        </span>
        <div className="cards">
          <div>
            {data.map((user) => {
              {
                /* ? ternarios para que los valores del objecto no retorne error, los retorna vacios o con los datos */
              }
              return (
                <div className="card card-3" key={user?.id}>
                  <h2 className="card__title">
                    <BiUser className="card__icon" /> {user?.name}
                  </h2>
                  <span className="card__go">
                    <Link to={`${user?.id}`}>
                      <p className="card__link">
                        Ir a usuario <AiOutlineArrowRight />
                      </p>
                    </Link>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Users;
