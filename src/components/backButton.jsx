//Link
import { Link } from "react-router-dom";
export function BackButton() {
  return (
    <div>
      <Link to={".."}>
        <button>Atras</button>
      </Link>
    </div>
  );
}
