import "../styles/ProcessStyle.css";
import { GrafiCard } from "./GrafiCard";

export function ContenedorGrafiCard({ act_x_res }) {
  const accion = [];
  for (var key1 in act_x_res) {
    accion.push(key1);
  }
  return (
    <div>
      <h2>Ocupación de Recursos por Actividad</h2>
      <ul className="container">
        {accion.map((act) => (
          <GrafiCard grafiName={act} datos={act_x_res[act]} key={act} />
        ))}
      </ul>
    </div>
  );
}
