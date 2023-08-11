import "../styles/ProcessStyle.css";

export function BottleneckCard({ bottleneck, consejos }) {
  const filas = [];
  const titulo = [
    "Actividad",
    //"Cant. Cuellos Botella ",
    //"Mayor Cant. En Espera",
    "Recurso",
    "% Cuellos de Botella",
  ];

  const accion = [];
  //const ocur_cb = [];
  //const espera = [];
  const recurso = [];
  const rec0 = [];

  for (var key1 in bottleneck) {
    /* titulo.push(key1); */
    var cont = 0;
    for (var key2 in bottleneck[key1]) {
      cont++;
      switch (key1) {
        case "Lugar de Espera":
          accion.push([bottleneck[key1][key2], "id" + (cont + 0)]);
          break;
        /* case "Ocur. de Cuello Botella ":
          ocur_cb.push([bottleneck[key1][key2], "id" + (cont + 100)]);
          break; */
        /* case "Mayor Cant. En Espera":
          espera.push([bottleneck[key1][key2], "id" + (cont + 200)]);
          break; */
        case "Recurso":
          recurso.push([bottleneck[key1][key2], "id" + (cont + 200)]);
          break;
        case "Cant. Rec. en 0":
          rec0.push([bottleneck[key1][key2]+"%", "id" + (cont + 400)]);
          break;
      }
    }
  }
  for (let i = 0; i < accion.length; i++) {
    var aux = [];
    aux.push(accion[i]);
    //aux.push(ocur_cb[i]);
    //aux.push(espera[i]);
    aux.push(recurso[i]);
    aux.push(rec0[i]);
    filas.push(aux);
  }

  return (
    <div>
      <h2>Recursos Generadores de Cuellos de Botella</h2>
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
