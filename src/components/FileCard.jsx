import { Link } from "react-router-dom";
import "../styles/FileStyle.css";

export function FileCard({ file }) {
  return (
    <li className="card fileCard">
      <Link className="text-decoration-none text-dark" to={"/process/" + file.id}>
        <div>
          ID: {file.id}
          <br />
          Nombre: {file.name}
        </div>
      </Link>
    </li>
  );
}
