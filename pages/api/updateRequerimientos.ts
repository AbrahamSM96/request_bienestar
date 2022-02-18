import prisma from "lib/prisma";

export default async (req, res) => {
  // post
  const {
    cantidad: cantidadString,
    unidad,
    clasificacion,
    item,
    nota,
    idQuery: id,
  } = req.body;
  const cantidad = parseInt(cantidadString);

  try {
    const data = await prisma.requerimientos.update({
      where: { id },
      data: {
        cantidad,
        unidad,
        clasificacion,
        item,
        nota,
      },
    });

    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).send({ error });
  }
};
