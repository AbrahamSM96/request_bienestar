import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
  try {
    const data = await prisma.alimentos.findMany();
    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).send({ error });
  }
};
