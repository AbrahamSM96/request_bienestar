import prisma from "lib/prisma";
const crypto = require("crypto");

export default async (req, res) => {
  // post
  const {
    cantidad: cantidadString,
    unidad,
    clasificacion,
    item,
    nota,
  } = req.body;

  const id = crypto.randomUUID();
  const cantidad = parseInt(cantidadString);

  try {
    const data = await prisma.requerimientos.create({
      data: {
        id,
        cantidad,
        unidad,
        clasificacion,
        item,
        nota,
      },
    });

    return res.status(201).send(data);
  } catch (error) {
    return res.status(500).send({ error });
  }
};
