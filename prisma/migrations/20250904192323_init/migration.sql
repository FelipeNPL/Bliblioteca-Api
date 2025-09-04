-- CreateTable
CREATE TABLE "public"."Livro" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "autor" TEXT NOT NULL,
    "ISBN" TEXT NOT NULL,
    "ano" INTEGER NOT NULL,
    "editoraId" INTEGER,

    CONSTRAINT "Livro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Editora" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Editora_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Livro_ISBN_key" ON "public"."Livro"("ISBN");

-- CreateIndex
CREATE UNIQUE INDEX "Editora_nome_key" ON "public"."Editora"("nome");

-- AddForeignKey
ALTER TABLE "public"."Livro" ADD CONSTRAINT "Livro_editoraId_fkey" FOREIGN KEY ("editoraId") REFERENCES "public"."Editora"("id") ON DELETE SET NULL ON UPDATE CASCADE;
