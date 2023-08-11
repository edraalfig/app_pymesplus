import "../styles/ProcessStyle.css";

export function Variantes({ texto, variantes }) {
  return (
    <div>
      <h2>{texto}</h2>
      <div>
        {
          /* variantes.map((v) => (
          <li key={v}>{v}</li>
        )) */
          variantes.map((v) => (
            <li key={v}>{v}</li>
          ))
        }
      </div>
    </div>
  );
}
