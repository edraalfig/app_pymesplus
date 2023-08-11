import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ingresoUserAccion, registroUserAccion } from "../redux/userDucks";
import { useNavigate } from "react-router-dom";

export const Login1 = () => {
  const dispatch = useDispatch();
  const loading = useSelector((store) => store.usuario.loading);
  const activo = useSelector((store) => store.usuario.activo);
  const isError = useSelector((store) => store.usuario.isError);
  const isNew = useSelector((store) => store.usuario.isNew);

  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(null);
  const [esRegistro, setEsRegistro] = useState(false);
  const [esNuevo, setEsNuevo] = useState(null);

  /* const user = "erai1";
  const pass = "erai"; */

  useEffect(() => {
    if (activo) {
      navigate("/inicio");
    }
    if (isError) {
      setError("Ha Ocurrido un Error");
    }
    if (isNew) {
      setEsNuevo("Usuario Registrado, ve al Login");
    }
  }, [activo, isError, isNew]);

  const procesarDatos = (e) => {
    e.preventDefault();
    if (!user.trim()) {
      setError("Ingrese Usuario");
      return;
    }
    if (!pass.trim()) {
      setError("Ingrese Contraseña");
      return;
    }
    setError(null);
    console.log("correcto...");

    if (esRegistro) {
      console.log("registro");
      registrar();
    } else {
      console.log("login");
      login();
    }
  };

  const login = () => {
    dispatch(ingresoUserAccion(user, pass));
    setUser("");
    setPass("");
    setError(null);
  };

  const registrar = () => {
    dispatch(registroUserAccion(user, pass));
    setUser("");
    setPass("");
    setError(null);
  };

  return (
    <div className="align-items-center">
      <div className="mt-5 card glassmorphism">
      <h1 className="text-center">
        {esRegistro ? "Registro de Usuarios" : "Login de Acceso"}
      </h1>
      <hr />
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-xl-4">
          <form onSubmit={procesarDatos}>
            {error && <div className="alert alert-danger">{error}</div>}
            {esNuevo && <div className="alert alert-info">{esNuevo}</div>}
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Ingrese Usuario"
              onChange={(e) => setUser(e.target.value)}
              value={user}
            />
            <input
              type="password"
              className="form-control mb-2"
              placeholder="Ingrese Contraseña"
              onChange={(e) => setPass(e.target.value)}
              value={pass}
            />
            <button
              type="submit"
              className="btn btn-dark btn-lg btn-block"
              disabled={loading}
            >
              {esRegistro ? "Registrarse" : "Acceder"}
            </button>
            <button
              type="button"
              className="btn btn-info btn-sm btn-block"
              onClick={() => {
                setEsRegistro(!esRegistro);
                setError(null);
                if (esNuevo) {
                  setEsNuevo(!esNuevo);
                }
              }}
            >
              {esRegistro ? "¿Ya estás registrado?" : "¿No tienes cuenta?"}
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};
