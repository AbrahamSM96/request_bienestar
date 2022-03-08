import { NextApiRequest, NextApiResponse } from "next";
import prisma from "lib/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await prisma.mantenimientos.findMany();
    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).send({ error });
  }
};
