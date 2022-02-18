import { useEffect, useState } from "react";
import DropDown from "./DropDown";
import Layout from "./Layout";
import { useTuples } from "../context/tuplesContext";
import { useRouter } from "next/router";
import Link from "next/link";

export default function FormTuple() {
  const [tup, setTup] = useState({
    cantidad: 0,
    unidad: "",
    clasificacion: "",
    item: "",
    nota: "",
  });
  const { createTuple, updateTuple, tuples } = useTuples();

  const { push, query } = useRouter();

  const handleChange = (event: Event) => {
    const { name, value } = event.target;
    setTup({ ...tup, [name]: value });
  };

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    const { id: idQuery } = query;
    if (!idQuery) {
      // createTuple(
      //   tup.cantidad,
      //   tup.unidad,
      //   tup.clasificacion,
      //   tup.item,
      //   tup.nota,
      // );
      fetch("/api/postRequerimientos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tup),
      })
        .then((response) => response.json())
        .then((data) => {
          createTuple(data);
        })
        .catch((error) => console.log(error, "error fetch"));
    } else {
      updateTuple({ idQuery, ...tup });
    }
    push("/");
  };

  useEffect(() => {
    if (query.id) {
      const tupleFound = tuples.find((tuple) => tuple.id === query.id);

      setTup({
        cantidad: tupleFound.cantidad,
        unidad: tupleFound.unidad,
        clasificacion: tupleFound.clasificacion,
        item: tupleFound.item,
        nota: tupleFound.nota,
      });
    }
  }, []);

  return (
    <Layout>
      <div className="flex justify-center item-center h-screen">
        <form onSubmit={handleSubmit} className="bg-morenaLigth p-10 h-auto">
          <div className="flex justify-between">
            <div>
              <h1 className="text-3xl mb-7 font-bold rounded-sm">
                {query.id ? "Actualizar requisición" : "Nueva requisición"}
              </h1>
            </div>
            <div className="">
              <Link href={"/"}>
                <button className="relative inline-flex item-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:ring-red-100 dark:focus:ring-red-400">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-morenaLigth rounded-md group-hover:bg-opacity-0">
                    X
                  </span>
                </button>
              </Link>
            </div>
          </div>

          <input
            type="number"
            name="cantidad"
            className="bg-pantone468cream text-slate-800 focus:outline-none w-full p-3 px-4 mb-5"
            placeholder="¿Cuantás unidades?"
            value={tup.cantidad > 0 ? tup.cantidad : ""}
            onChange={(e) => handleChange(e)}
          />
          <DropDown tup={tup} setTup={setTup} />
          <textarea
            name="nota"
            rows={3}
            placeholder="Observaciones y/o notas"
            className="bg-pantone468cream text-slate-800 focus:outline-none w-full p-3 px-4 mb-5 placeholder-gray-500"
            onChange={(e) => handleChange(e)}
            value={tup.nota}
          ></textarea>
          <button
            className="bg-pantone627green hover:bg-pantone626green px-4 py-2 rounded-sm disabled:opacity-50"
            disabled={!tup.cantidad}
          >
            Guardar
          </button>
        </form>
      </div>
    </Layout>
  );
}
