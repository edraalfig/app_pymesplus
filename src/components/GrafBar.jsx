import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function GrafBar({ key1, key2, titulo }) {
  const actividades = [];
  const porcentajes = [];
  var colores = "";
  var col_bordes = "";

  /* for (var key1 in cb) {
    for (var key2 in cb[key1]) {
      cont++;
      switch (tipo) {
        case "cb":
          switch (key1) {
            case "Lugar de Espera":
              actividades.push(cb[key1][key2]);
              break;
            case "Cant. Rec. en 0":
              porcentajes.push(cb[key1][key2]);
              break;
          }
        case "sub":
          switch (key1) {
            case "Lugar de Espera":
              actividades.push(cb[key1][key2]);
              break;
            case "Cant. Prom. Rec. Disp.":
              porcentajes.push(cb[key1][key2]);
              break;
          }
      }
    }
  } */

  for(var k1 in key1){
    actividades.push(key1[k1])
  }
  for(var k2 in key2){
    porcentajes.push(key2[k2])
  }

  const genColor = () => {
    var auxColor = "rgba(";
    for (let i = 0; i < 3; i++) {
      auxColor += Math.floor(Math.random() * 255) + ",";
    }
    return auxColor;
  };

  var auxColor = genColor();
  colores = auxColor + "0.3)";
  col_bordes = auxColor + "1)";

  const labels = actividades;
  const data = {
    labels,
    datasets: [
      {
        label: titulo,
        data: porcentajes,
        backgroundColor: colores,
        borderColor: col_bordes,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
  };

  return (
    <div>
      <h2>{titulo}</h2>
      <Bar data={data} options={options} />
    </div>
  );
}
