import { GenCard } from "../components/GenCard";
import { BestVariant } from "../components/BestVariant";
import { BottleneckCard } from "../components/BottleneckCard";
import { ContenedorGrafiCard } from "../components/ContenedorGrafiCard";
import { restablecerAccion } from "../redux/fileDucks";

export function MiComponente() {
  const regresar = () => {
    dispatch(restablecerAccion());
  };

  return (
    <div>
      <section className="generalidades">
        <GenCard gen={unFile["Generalidades"]} />
      </section>
      <section className="best-var">
        <BestVariant
          costo={unFile["Costo Mejor Variante"]}
          bvar={unFile["Mejor Variante"]}
          tiempo={unFile["Tiempo Mejor Variante Sin Tiempos Muertos"]}
        />
      </section>
      <section className="bottleneck">
        <BottleneckCard bottleneck={unFile["Cuello de botella"]} consejos={unFile["Consejos_0"]} />
      </section>
      <section className=" card act-res">
        <ContenedorGrafiCard act_x_res={unFile["Action_x_Resource"]} />
      </section>
      <button
        className="btn btn-dark btn-lg btn-block mt-3"
        onClick={regresar()}
      >
        Regresar
      </button>
    </div>
  );
}
