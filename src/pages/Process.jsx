import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { procesarAccion } from "../redux/fileDucks";
import { Navbar } from "../components/Navbar";
import { GenCard } from "../components/GenCard";
import { BestVariant } from "../components/BestVariant";
import { BottleneckCard } from "../components/BottleneckCard";
import { BottleneckCard2 } from "../components/BottleneckCard2";
import { ContenedorGrafiCard } from "../components/ContenedorGrafiCard";
import { restablecerAccion } from "../redux/fileDucks";
import "../styles/ProcessStyle.css";
import { Variantes } from "../components/Variantes";
import { NavbarRes } from "../components/NavbarRes";
import { GrafBar } from "../components/GrafBar";

export function Process() {
  const { fileId } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector((store) => store.archivo.loading);
  const unFile = useSelector((store) => store.archivo.unFile);

  const [error, setError] = useState(null);
  const [pcb, setPcb] = useState(0);
  const [pdr, setPdr] = useState(0);
  const [gen, setGen] = useState(false);
  const [vardect, setVardect] = useState(false);
  const [varfact, setVarfact] = useState(false);
  const [varopt, setVaropt] = useState(false);
  const [porcb, setPorcb] = useState(false);
  const [porcbg, setPorcbg] = useState(false);
  const [porrd, setPorrd] = useState(false);
  const [porrdg, setPorrdg] = useState(false);
  const [recxact, setRecxact] = useState(false);

  const restablecer = () => {
    selRegresar();
    dispatch(restablecerAccion());
  };

  const selGen = () => {
    setGen(true);
    setVardect(false);
    setVarfact(false);
    setVaropt(false);
    setPorcb(false);
    setPorcbg(false);
    setPorrd(false);
    setPorrdg(false);
    setRecxact(false);
  };

  const selVardect = () => {
    setVardect(true);
    setGen(false);
    setVarfact(false);
    setVaropt(false);
    setPorcb(false);
    setPorcbg(false);
    setPorrd(false);
    setPorrdg(false);
    setRecxact(false);
  };

  const selVarfact = () => {
    setVarfact(true);
    setVardect(false);
    setGen(false);
    setVaropt(false);
    setPorcb(false);
    setPorcbg(false);
    setPorrd(false);
    setPorrdg(false);
    setRecxact(false);
  };

  const selVaropt = () => {
    setVaropt(true);
    setVardect(false);
    setGen(false);
    setVarfact(false);
    setPorcb(false);
    setPorcbg(false);
    setPorrd(false);
    setPorrdg(false);
    setRecxact(false);
  };

  const selPorcb = () => {
    setPorcb(true);
    setVardect(false);
    setGen(false);
    setVarfact(false);
    setVaropt(false);
    setPorcbg(false);
    setPorrd(false);
    setPorrdg(false);
    setRecxact(false);
  };

  const selPorcbg = () => {
    setPorcbg(true);
    setVardect(false);
    setGen(false);
    setVarfact(false);
    setVaropt(false);
    setPorcb(false);
    setPorrd(false);
    setPorrdg(false);
    setRecxact(false);
  };

  const selPorrd = () => {
    setPorrd(true);
    setPorcb(false);
    setPorcbg(false);
    setPorrdg(false);
    setVardect(false);
    setGen(false);
    setVarfact(false);
    setVaropt(false);
    setRecxact(false);
  };

  const selPorrdg = () => {
    setPorrdg(true);
    setPorcb(false);
    setPorcbg(false);
    setPorrd(false);
    setVardect(false);
    setGen(false);
    setVarfact(false);
    setVaropt(false);
    setRecxact(false);
  };

  const selRecxact = () => {
    setRecxact(true);
    setPorcbg(false);
    setPorrd(false);
    setPorrdg(false);
    setPorcb(false);
    setVardect(false);
    setGen(false);
    setVarfact(false);
    setVaropt(false);
  };

  const selRegresar = () => {
    setRecxact(false);
    setPorcbg(false);
    setPorrd(false);
    setPorrdg(false);
    setPorcb(false);
    setVardect(false);
    setGen(false);
    setVarfact(false);
    setVaropt(false);
  };

  const procesarDatos = (e) => {
    e.preventDefault();
    if (pcb == 0 || pdr == 0) {
      setError("Por favor, seleccione porcentajes diferentes de 0");
      return;
    }

    setError(null);
    procesar();
  };

  const procesar = () => {
    console.log("pcb: ", pcb, "pdr: ", pdr);
    dispatch(procesarAccion(fileId, pcb, pdr));
    setError(null);
    setGen(true);
  };

  return (
    <div>
      {unFile == null ? (
        <div>
          <Navbar />
          <br />
        </div>
      ) : (
        <div>
          <NavbarRes
            selGen={selGen}
            selVardect={selVardect}
            selVarfact={selVarfact}
            selVaropt={selVaropt}
            selPorcb={selPorcb}
            selPorrd={selPorrd}
            selRecxact={selRecxact}
            selPorcbg={selPorcbg}
            selPorrdg={selPorrdg}
            selRestablecer={restablecer}
          />
          <br />
        </div>
      )}

      {unFile == null ? (
        <div className="card glassmorphism">
          <h3>¿Está seguro de querer Procesar este Registro de Eventos?</h3>
          <h5>ID: {fileId}</h5>
          <br />
          <p>
            Antes de continuar, primero establezca el porcentaje de cuellos de
            botella aceptable y el porcentaje de recursos inactivos aceptable.
          </p>
          <hr />
          <div className="row justify-content-center">
            <div className="col-12 col-sm-8 col-md-6 col-xl-4">
              <form onSubmit={procesarDatos}>
                {error && <div className="alert alert-danger">{error}</div>}
                <datalist id="tickmarks">
                  <option value="0" label="0%" />
                  <option value="10" />
                  <option value="20" />
                  <option value="30" />
                  <option value="40" />
                  <option value="50" label="50%" />
                  <option value="60" />
                  <option value="70" />
                  <option value="80" />
                  <option value="90" />
                  <option value="100" label="100%" />
                </datalist>
                <h6>Porcentaje de Cuellos de Botella Aceptables</h6>
                <div className="input-group flex-nowrap justify-content-around">
                  <input
                    className="slider"
                    type="range"
                    min={0}
                    max={100}
                    list="tickmarks"
                    step="1"
                    onChange={(e) => setPcb(e.target.value)}
                    value={pcb}
                  />
                  <span>{pcb}%</span>
                </div>
                <br />
                <h6>Porcentaje de Recursos subutilizados</h6>
                <div className="input-group flex-nowrap justify-content-around">
                  <input
                    className="slider"
                    type="range"
                    min={0}
                    max={100}
                    list="tickmarks"
                    step="1"
                    onChange={(e) => setPdr(e.target.value)}
                    value={pdr}
                  />
                  <span>{pdr}%</span>
                </div>
                <br />
                <button
                  className="btn btn-dark btn-lg btn-block mt-3"
                  type="submit"
                  disabled={loading}
                >
                  Procesar
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="card glassmorphism">
          <div></div>
          {gen && (
            <section className="card generalidades">
              <GenCard gen={unFile["Generalidades"]} />
            </section>
          )}
          {vardect && (
            <section className="card variantes">
              <Variantes
                texto={"Variantes Detectadas"}
                variantes={unFile["Filtrado secuencias"]}
              />
            </section>
          )}
          {varfact && (
            <section className="card variantes2">
              <Variantes
                texto={"Variantes Factibles"}
                variantes={unFile["Variables Factibles"]}
              />
            </section>
          )}
          {varopt && (
            <section className="card best-var">
              <BestVariant
                bvar={unFile["Variante_Menor_Tiempo"]["Variante"]}
                tiempo={unFile["Variante_Menor_Tiempo"]["tiempo"]}
                costo={unFile["Variante_Menor_Tiempo"]["costo"]}
              />
            </section>
          )}
          {porrd && (
            <section className="card bottleneck2">
              
              <BottleneckCard2
              
                bottleneck={unFile["Cuello de botella"]}
                consejos={unFile["Consejos_1"]}
              />
            </section>
          )}
          {porrdg && (
            <section className="card bottleneck2">
              <GrafBar
                key1={unFile["Cuello de botella"]["Lugar de Espera"]}
                key2={unFile["Cuello de botella"]["Cant. Prom. Rec. Disp."]}
                titulo={"% Recursos Subutilizados"}
              />
            </section>
          )}
          {porcb && (
            <section className="card bottleneck">
              <BottleneckCard
                bottleneck={unFile["Cuello de botella"]}
                consejos={unFile["Consejos_0"]}
              />
            </section>
          )}
          {porcbg && (
            <section className="card">
              <GrafBar
                key1={unFile["Cuello de botella"]["Lugar de Espera"]}
                key2={unFile["Cuello de botella"]["Cant. Rec. en 0"]}
                titulo={"% Recursos Generadores de Cuellos de Botella"}
              />
            </section>
          )}
          {recxact && (
            <section className="card act-res">
              <ContenedorGrafiCard act_x_res={unFile["Action_x_Resource"]} />
            </section>
          )}
        </div>
      )}
    </div>
  );
}
