//Link
import { Link } from "react-router-dom";
//Icons
import { FaUsers } from "react-icons/fa";
import { IoMdPaper } from "react-icons/io";
import { AiOutlineArrowRight } from "react-icons/ai";
//css
import '../styles/index.css';

function Home() {
  return (
    <div className="main-container">
      <div className="heading">
        <h1 className="heading__title">Home</h1>
        <div className="cards">
          <div className="card card-1">
            <h2 className="card__title">
              {" "}
              <FaUsers className="card__icon" /> Usuarios
            </h2>
            <span className="card__go">
              <Link to="users">
                <p className="card__link">
                  ir a usuarios <AiOutlineArrowRight />
                </p>
              </Link>
            </span>
          </div>
          <div className="card card-2">
            <h2 className="card__title">
              {" "}
              <IoMdPaper className="card__icon"/> Posts{" "}
            </h2>
            <span className="card__go">
              <Link to="posts">
                {" "}
                <p className="card__link">
                  Posts <AiOutlineArrowRight />
                </p>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
