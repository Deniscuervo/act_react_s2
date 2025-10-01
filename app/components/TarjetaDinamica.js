export default function TarjetaDinamica({
  titulo,
  contenido,
  colorFondo,
  colorTexto,
  ancho,
  activo,
}) {
  const estilo = {
    backgroundColor: colorFondo,
    color: colorTexto,
    width: ancho,
    padding: "16px",
    margin: "16px",
    borderRadius: "10px",
    border: activo ? "3px solid #000" : "2px dashed #aaa",
    opacity: activo ? 1 : 0.7,
    transition: "all 0.3s ease-in-out",
  };

  return (
    <div style={estilo}>
      <h2>{titulo}</h2>
      <p>{contenido}</p>
    </div>
  );
}
