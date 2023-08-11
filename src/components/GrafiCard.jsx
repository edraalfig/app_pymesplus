import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import "../styles/ProcessStyle.css";

ChartJS.register(ArcElement, Tooltip, Legend);

export function GrafiCard({ grafiName, datos }) {
  const recurso = [];
  const vecesOcupado = [];
  const colores = [];
  const col_bordes = [];

  const genColor = () => {
    var auxColor = "rgba(";
    for (let i = 0; i < 3; i++) {
      auxColor += Math.floor(Math.random() * 255) + ",";
    }
    return auxColor;
  };

  for (var key1 in datos) {
    if (datos[key1] != 0) {
      recurso.push(key1);
      vecesOcupado.push(datos[key1]);
    }
  }

  for (let i = 0; i < recurso.length; i++) {
    var auxColor = genColor();
    colores.push(auxColor + "0.3)");
    col_bordes.push(auxColor + "1)");
  }

  const data = {
    labels: recurso,
    datasets: [
      {
        label: grafiName,
        data: vecesOcupado,
        backgroundColor: colores,
        borderColor: col_bordes,
        borderWidth: 1,
      },
    ],
  };

  return (
    <li className="card grafiCard">
      <h5>{grafiName}</h5>
      <Doughnut data={data}/>
    </li>
  );
}
