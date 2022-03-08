import { NextApiRequest, NextApiResponse } from "next";
import prisma from "lib/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.body;
  try {
    const data = await prisma.requerimientos.delete({
      where: { id },
    });
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error });
  }
};
