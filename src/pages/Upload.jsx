import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadFileAccion } from "../redux/fileDucks";
import { Navbar } from "../components/Navbar";

export function Upload() {
  const dispatch = useDispatch();
  const loading = useSelector((store) => store.archivo.loading);
  const upFile = useSelector((store) => store.archivo.upFile);

  const [archivo, setArchivo] = useState(null);
  const [costo, setCosto] = useState(null);
  const [error, setError] = useState(null);
  const [isOk, setIsOk] = useState(null);

  useEffect(() => {
    if (upFile) {
      setIsOk(
        "Los Archivos han sido subidos con éxito, por favor, ve a Listar Archivos"
      );
    }
  }, [upFile]);

  const procesarArchivo = (e) => {
    e.preventDefault();
    if (archivo == null) {
      setError("Seleccione un archivo de Registro de eventos");
      return;
    }
    if (costo == null) {
      setError("Seleccione un archivo de costos");
      return;
    }
    setError(null);
    subir();
  };

  const subir = () => {
    console.log("Subiendo Archivo");
    dispatch(uploadFileAccion(archivo, costo));
  };

  return (
    <div>
      <Navbar />
      <br />
      <div className="card glassmorphism">
        <h2>Subida de Archivos</h2>
        <hr />
        <p>Seleccione archivos con extensión .CSV</p>
        <div className="row justify-content-center">
          <div className="col-12 col-sm-8 col-md-6 col-xl-4">
            <form className="mt-4" onSubmit={procesarArchivo}>
              {error ? (
                <div className="alert alert-danger">{error}</div>
              ) : isOk ? (
                <div className="alert alert-info">{isOk}</div>
              ) : null}
              <div className="row">
                <div className="form-group  ">
                  <label htmlFor="archivo">
                    {" "}
                    <h4>Seleccione un Registro de Eventos</h4>{" "}
                  </label>
                  <input
                    id="archivo"
                    type="file"
                    accept=".csv"
                    onChange={(e) => setArchivo(e.target.files[0])}
                  />
                </div>
                <div className="form-group ">
                  <label htmlFor="costos">
                    {" "}
                    <h4>
                      Seleccione un archivo con los costos de las actividades
                    </h4>{" "}
                  </label>
                  <input
                    id="costos"
                    type="file"
                    accept=".csv"
                    onChange={(e) => setCosto(e.target.files[0])}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-dark btn-lg btn-block mt-4"
                disabled={loading}
              >
                Subir Archivo
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
