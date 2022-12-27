import React from "react";
//Botones
import { BackButton } from "../../components/backButton";
//Hooks
import useSWR from "swr";
import { Link } from "react-router-dom";
//Icons
import { AiOutlineArrowRight } from "react-icons/ai";
import { MdOutlinePostAdd } from "react-icons/md";
import { IoMdPaper } from "react-icons/io";
import {HiOutlineNewspaper} from "react-icons/hi";
//css
import '../../styles/index.css';

//Propiedades del fetching swr
const url = "http://localhost:3000/posts";
const fetcher = (url) => fetch(url).then((res) => res.json());

function Posts() {
  //Inicializacion
  const { data, error, isLoading } = useSWR(url, fetcher);

  if (error) return <h1>Hubo un error</h1>;
  if (isLoading) return <h1>Cargando...</h1>;
  return (
    <div className="main-container">
      <div className="heading">
        <BackButton />
        <h1 className="heading__title">
          {" "}
          <IoMdPaper className="card__icon"/>
          Posts
        </h1>
        <span className="card__go">
          <Link to="/addpost">
            {" "}
            <p className="card__link__init">
              {" "}
              <MdOutlinePostAdd className="card__icon"/> Agregar nuevo post
            </p>{" "}
          </Link>
        </span>
        <div className="cards">
          <div>
            {data.map((post) => {
              return (
                <div className="card card-4" key={post?.id}>
                  <h2 className="card__title"><HiOutlineNewspaper className="card__icon"/>{post?.title}</h2>
                  <span className="card__go">
                    <Link to={`${post?.id}`}>
                      {" "}
                      <p className="card__link">
                        Ir a post <AiOutlineArrowRight />
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
export default Posts;
