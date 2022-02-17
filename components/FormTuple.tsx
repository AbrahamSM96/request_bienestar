import { useEffect, useState } from "react";
import DropDown from "./DropDown";
import Layout from "./Layout";
import { useTuples } from "../context/tuplesContext";
import { useRouter } from "next/router";
import Link from "next/link";

export default function FormTuple() {
  const [tup, setTup] = useState({
    unities: 0,
    quantities: "",
    classification: "",
    items: "",
    notes: "",
  });
  const { createTuple, updateTuple, tuples } = useTuples();

  const { push, query } = useRouter();

  const handleChange = (event: Event) => {
    const { name, value } = event.target;
    setTup({ ...tup, [name]: value });
  };

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    if (!query.id) {
      // createTuple(
      //   tup.unities,
      //   tup.quantities,
      //   tup.classification,
      //   tup.items,
      //   tup.notes,
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
          console.log(data);
          createTuple(data);
        })
        .catch((error) => console.log(error, "error fetch"));
    } else {
      updateTuple(query.id, { ...tup });
    }
    push("/");
  };

  useEffect(() => {
    if (query.id) {
      const tupleFound = tuples.find((tuple) => tuple.id_tuple === query.id);

      setTup({
        unities: tupleFound.unities,
        quantities: tupleFound.quantities,
        classification: tupleFound.classification,
        items: tupleFound.items,
        notes: tupleFound.notes,
      });
    }
  }, []);

  return (
    <Layout>
      <div className="flex justify-center items-center h-screen">
        <form onSubmit={handleSubmit} className="bg-morenaLigth p-10 h-auto">
          <div className="flex justify-between">
            <div>
              <h1 className="text-3xl mb-7 font-bold rounded-sm">
                {query.id ? "Actualizar requisición" : "Nueva requisición"}
              </h1>
            </div>
            <div className="">
              <Link href={"/"}>
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:ring-red-100 dark:focus:ring-red-400">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-morenaLigth rounded-md group-hover:bg-opacity-0">
                    X
                  </span>
                </button>
              </Link>
            </div>
          </div>

          <input
            type="number"
            name="unities"
            className="bg-pantone468cream text-slate-800 focus:outline-none w-full p-3 px-4 mb-5"
            placeholder="¿Cuantás unidades?"
            value={tup.unities > 0 ? tup.unities : ""}
            onChange={(e) => handleChange(e)}
          />
          <DropDown tup={tup} setTup={setTup} />
          <textarea
            name="notes"
            rows={3}
            placeholder="Observaciones y/o notas"
            className="bg-pantone468cream text-slate-800 focus:outline-none w-full p-3 px-4 mb-5 placeholder-gray-500"
            onChange={(e) => handleChange(e)}
            value={tup.notes}
          ></textarea>
          <button
            className="bg-pantone627green hover:bg-pantone626green px-4 py-2 rounded-sm disabled:opacity-50"
            disabled={!tup.unities}
          >
            Guardar
          </button>
        </form>
      </div>
    </Layout>
  );
}
