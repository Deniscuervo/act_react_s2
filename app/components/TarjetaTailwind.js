export default function TarjetaTailwind({ titulo, descripcion, imagen, etiqueta }) {
  return (
    <div className="flex flex-col p-4 m-2 w-64 bg-white text-gray-800 border border-gray-200 shadow-lg rounded-lg hover:shadow-xl transition-all duration-300">
      <img src={imagen} alt={titulo} className="rounded-lg mb-3" />
      <h3 className="text-xl font-bold mb-2">{titulo}</h3>
      <p className="text-sm mb-3">{descripcion}</p>
      <span className="text-xs font-semibold bg-blue-100 text-blue-600 px-2 py-1 rounded">
        {etiqueta}
      </span>
    </div>
  );
}
