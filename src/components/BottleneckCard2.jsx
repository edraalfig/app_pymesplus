import "../styles/ProcessStyle.css";

export function BottleneckCard2({ bottleneck, consejos }) {
  const filas = [];
  const titulo = [
    "Actividad",
    "Recurso",
    //"Cant. Rec. Iniciales",
    "% Recursos Subutilizados",
  ];

  const accion = [];
  const recurso = [];
  //const recini = [];
  const libre = [];

  for (var key1 in bottleneck) {
    /* titulo.push(key1); */
    var cont = 0;
    for (var key2 in bottleneck[key1]) {
      cont++;
      switch (key1) {
        case "Lugar de Espera":
          accion.push([bottleneck[key1][key2], "id" + (cont + 0)]);
          break;
        case "Recurso":
          recurso.push([bottleneck[key1][key2], "id" + (cont + 300)]);
          break;
        /* case "Rec. Iniciales por Actividad":
          recini.push([bottleneck[key1][key2], "id" + (cont + 400)]);
          break; */
        case "Cant. Prom. Rec. Disp.":
          libre.push([bottleneck[key1][key2]+"%", "id" + (cont + 600)]);
          break;
      }
    }
  }
  for (let i = 0; i < accion.length; i++) {
    var aux = [];
    aux.push(accion[i]);
    aux.push(recurso[i]);
    //aux.push(recini[i]);
    aux.push(libre[i]);
    filas.push(aux);
  }
  //filas.push(bottleneck[key1][key2]);

  return (
    <div className="bnCard">
      <h2>Recursos Subutilizados</h2>
      <br />
      <table className="table table-bordered">
        <thead>
          <tr>
            {titulo.map((ti) => (
              <th className="text-uppercase" key={ti}>
                {ti}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filas.map((fila) => (
            <tr key={fila}>
              {fila.map((val) => (
                <td key={val[1]}>{val[0]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {consejos.length > 0 && (
        <div>
          <hr />
          <h3>Propuestas de Mejora</h3>
          {consejos.map((con) => (
            <li key={con}>{con}</li>
          ))}
        </div>
      )}
    </div>
  );
}
