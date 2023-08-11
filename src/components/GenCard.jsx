import "../styles/ProcessStyle.css";

export function GenCard({ gen }) {
  return (
    <div className="genCard">
      <h2>Generalidades </h2>
      Nombre: {(gen["File Name"]).toUpperCase()}
      <br />
      Cantidad de Registros: {gen["Rows"]}
      <br />
      Cantidad de Casos: {gen["Cant. Casos"]}
      <br />
    </div>
  );
}
