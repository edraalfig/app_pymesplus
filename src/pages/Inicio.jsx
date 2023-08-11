import { Navbar } from "../components/Navbar";

export function Inicio() {
  return (
    <div>
      <Navbar />
      <br />
      <div className="card glassmorphism">
        <h1>Instrucciones</h1>
        <br />
        <h2>Bienvenido</h2>
        <p>
          Para listar los archivos disponibles, ve al apartado de Listar o
          también puedes subir tus propios archivos. Para subir archivos, es
          necesario que subas 2 archivos de extensión ".CSV" (Registro de
          Eventos y Costos).
        </p>
        <br />
        <p>
          El Registro de Eventos, deberá tener 5 columnas principales, ID,
          Actividad, Recurso, Hora de inicio y Hora de fin. El Archivo de
          Costos, debe tener 2 columnas, Actividades y Costo, las actividades
          deben corresponder a las actividades que se encuentran en el Registro
          de Eventos, y los Costos serán el costo por hora de cada actividad.
        </p>
        <br />
        <p>
          Para analizar un Registro de eventos, ve al apartado de Listar y
          selecciona uno de los que aparecen disponibles, esto te dirigirá a la
          sección de procesamiento. Aquí se mostrarán los resultados del
          analisis de su Registro de Eventos.
        </p>
      </div>
    </div>
  );
}
