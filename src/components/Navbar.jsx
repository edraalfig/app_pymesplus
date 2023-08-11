import React from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";

import { cerrarSesionAccion } from "../redux/userDucks";
import { restablecerAccion } from "../redux/fileDucks";

export const Navbar = () => {
  const dispatch = useDispatch();
  const cerrarSesion = () => {
    dispatch(restablecerAccion());
    dispatch(cerrarSesionAccion());
  };

  return (
    <div className="navbar navbar-dark bg-dark">
      <Link className="navbar-brand" to="/inicio">
        <img
          className="logo"
          src="https://raw.githubusercontent.com/edraalfig/img/81cbac68cb0d5a8baeec68f7a0094dcae6c38e28/logo.svg"
          width={45}
        />
        PYMES Plus
      </Link>
      <div>
        <div className="d-flex">
          <NavLink className="btn btn-dark mr-2" to="/inicio">
            Inicio
          </NavLink>
          <NavLink className="btn btn-dark mr-2" to="/files">
            Listar Archivos
          </NavLink>
          <NavLink className="btn btn-dark mr-2" to="/upload">
            Subir Archivo
          </NavLink>
          {/* <NavLink className="btn btn-dark mr-2" to="/process">
            Procesar Archivo
          </NavLink> */}
          <NavLink
            className="btn btn-dark mr-2"
            to="/"
            onClick={() => cerrarSesion()}
          >
            Salir
          </NavLink>
        </div>
      </div>
    </div>
  );
};
