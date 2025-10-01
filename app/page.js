import TarjetaGlobal from "./components/TarjetaGlobal";
import TarjetaModulo from "./components/TarjetaModulo";
import TarjetaDinamica from "./components/TarjetaDinamica";
import TarjetaTailwind from "./components/TarjetaTailwind";

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Demostración de Estilos en Next.js</h1>

      {/* CSS Global */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">1. CSS Global</h2>
        <TarjetaGlobal
          titulo="Tarjeta Global"
          contenido="Este componente usa clases globales desde globals.css."
          color="blue"
        />
      </section>

      {/* CSS Modules */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">2. CSS Modules</h2>
        <TarjetaModulo
          nombre="Tarjeta Primaria"
          descripcion="Esta tarjeta utiliza módulos CSS con variante primaria."
          categoria="Global"
          variante="tarjetaPrimaria"
        />
        <TarjetaModulo
          nombre="Tarjeta Secundaria"
          descripcion="Ejemplo de tarjeta con variante secundaria."
          categoria="Módulos"
          variante="tarjetaSecundaria"
        />
        <TarjetaModulo
          nombre="Tarjeta Éxito"
          descripcion="Módulos CSS permiten múltiples variantes."
          categoria="CSS Module"
          variante="tarjetaExito"
        />
      </section>

      {/* Estilos en Línea */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">3. Estilos en Línea</h2>
        <TarjetaDinamica
          titulo="Tarjeta Dinámica Activa"
          contenido="Con estilos en línea, esta tarjeta cambia con props."
          colorFondo="#fef3c7"
          colorTexto="#78350f"
          ancho="300px"
          activo={true}
        />
        <TarjetaDinamica
          titulo="Tarjeta Dinámica Inactiva"
          contenido="Se puede condicionar estilos con props booleanas."
          colorFondo="#e0f2fe"
          colorTexto="#075985"
          ancho="250px"
          activo={false}
        />
      </section>

      {/* Tailwind */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">4. Tailwind CSS</h2>
        <TarjetaTailwind
          titulo="Tarjeta con Tailwind"
          descripcion="Componente moderno estilizado solo con clases de Tailwind."
          imagen="https://via.placeholder.com/150"
          etiqueta="Tailwind"
        />
      </section>
    </main>
  );
}
