import "../styles/ProcessStyle.css";

export function BestVariant({bvar, costo, tiempo }){
  return (
    <div className="bvCard">
      <h2>Variante Optima</h2>
      Tiempo: {tiempo}
      <br />
      Costo: ${costo}
      <br />
      Mejor Variante:
      <br />
      {(bvar).toUpperCase()}

    </div>
  );
}