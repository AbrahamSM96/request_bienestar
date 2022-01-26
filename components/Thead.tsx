import React from "react";

export default function Thead() {
  return (
    <thead className="bg-gray-800 text-gray-500">
      <tr>
        <th className="p-3">Cantidad</th>
        <th className="p-3 text-left">Unidad</th>
        <th className="p-3 text-left">Clasificación</th>
        <th className="p-3 text-left">Descripcion del articulo</th>
        <th className="p-3 text-left">Observaciones y/o notas</th>
      </tr>
    </thead>
  );
}
