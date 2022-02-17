-- CreateTable
CREATE TABLE "Areas" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Areas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Unidades" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Unidades_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categorias" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Categorias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Alimentos" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Alimentos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Papelerias_1" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Papelerias_1_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Papelerias_2" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Papelerias_2_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "M_vehiculos" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "M_vehiculos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Limpiezas" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Limpiezas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "M_electricos" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "M_electricos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mantenimientos" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Mantenimientos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Farmacias" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Farmacias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Requerimientos" (
    "id" TEXT NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "unidad" TEXT NOT NULL,
    "clasificacion" TEXT NOT NULL,
    "item" TEXT NOT NULL,
    "nota" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Requerimientos_pkey" PRIMARY KEY ("id")
);
