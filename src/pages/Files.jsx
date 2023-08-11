import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFileAction } from "../redux/fileDucks";
import { Navbar } from "../components/Navbar";
import { FileCard } from "../components/FileCard";
import "../styles/FileStyle.css";

export const Files = () => {
  const dispatch = useDispatch();
  const myfile = useSelector((store) => store.archivo.results);
  const loading = useSelector((store) => store.archivo.loading);

  const [hayData, setHayData] = useState(null);

  useEffect(() => {
    if (myfile.length == 0) {
      setHayData(
        "Presiona el boton para mostrar los archivos existentes. Si vuelves a ver este mensaje significa que por el momento no hay archivos disponibles, por favor, sube un archivo para procesar"
      );
    }
  }, [myfile]);

  return (
    <div>
      <Navbar />
      <br />
      <div className="card glassmorphism">
        <div className="mt-3">
          <h2>Lista de Archivos</h2>
          <hr />

          <div className="justify-content-center mt-4">
            {myfile.length === 0 ? (
              <button
                className="btn btn-dark"
                onClick={() => {
                  setHayData(null);
                  dispatch(getFileAction());
                }}
              >
                Mostrar Archivos
              </button>
            ) : (
              <div>
                <p>Selecciona un archivo para empezar a procesar</p>
                <button
                  className="btn btn-dark"
                  onClick={() => dispatch(getFileAction())}
                  disabled={loading}
                >
                  Actualizar Lista
                </button>
              </div>
            )}
            {hayData && <div className="alert alert-info mt-4">{hayData}</div>}
          </div>
        </div>
        <ul className="container mt-4">
          {myfile.map((file) => (
            <FileCard file={file} key={file.id} />
          ))}
        </ul>
      </div>
    </div>
  );
};
