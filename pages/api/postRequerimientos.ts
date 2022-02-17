import prisma from "lib/prisma";
const crypto = require("crypto");

export default async (req, res) => {
  // post
  const {
    unities,
    quantities: unidad,
    classification: clasificacion,
    items: item,
    notes: nota,
  } = req.body;

  const id = crypto.randomUUID();
  const cantidad = parseInt(unities);

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

    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).send({ error });
  }
};
