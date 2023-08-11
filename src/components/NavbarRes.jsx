import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

import { restablecerAccion } from "../redux/fileDucks";

export const NavbarRes = (props) => {
  const [dd1, setdd1] = useState(false);
  const [dd2, setdd2] = useState(false);

  /* const dispatch = useDispatch(); */

  /* const restablecer = () => {
    dispatch(restablecerAccion());
    //props.selRegresar;
  }; */

  return (
    <div className="navbar navbar-dark bg-dark">
      <a className="navbar-brand">
        <img
          className="logo"
          src="https://raw.githubusercontent.com/edraalfig/img/81cbac68cb0d5a8baeec68f7a0094dcae6c38e28/logo.svg"
          width={45}
        />
        RESULTADOS
      </a>
      <div>
        <div className="d-flex">
          <a className="btn btn-dark mr-2" onClick={props.selGen}>
            Generalidades
          </a>
          <Dropdown isOpen={dd1} toggle={() => setdd1(!dd1)}>
            <DropdownToggle caret className="btn btn-dark mr-2">
              Análisis de Variantes
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem className="btn btn-dark" onClick={props.selVardect}>
                Variantes Detectadas
              </DropdownItem>
              <DropdownItem className="btn btn-dark" onClick={props.selVarfact}>
                Variantes Factibles
              </DropdownItem>
              <DropdownItem className="btn btn-dark" onClick={props.selVaropt}>
                Variante Óptima
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown isOpen={dd2} toggle={() => setdd2(!dd2)}>
            <DropdownToggle caret className="btn btn-dark mr-2">
              Análisis de Recursos
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem className="btn btn-dark" onClick={props.selPorcb}>
                Generadores de Cuellos de Botella (Tabla)
              </DropdownItem>
              <DropdownItem className="btn btn-dark" onClick={props.selPorcbg}>
                Generadores de Cuellos de Botella (Gráfica)
              </DropdownItem>
              <DropdownItem className="btn btn-dark" onClick={props.selPorrd}>
                Recursos Subutilizados (Tabla)
              </DropdownItem>
              <DropdownItem className="btn btn-dark" onClick={props.selPorrdg}>
                Recursos Subutilizados (Gráfica)
              </DropdownItem>
              <DropdownItem className="btn btn-dark" onClick={props.selRecxact}>
                Ocupación de Recursos por Actividad
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <a className="btn btn-dark mr-2" onClick={props.selRestablecer}>
            Volver
          </a>
        </div>
      </div>
    </div>
  );
};
