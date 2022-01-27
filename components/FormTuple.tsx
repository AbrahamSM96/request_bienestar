import { useEffect, useState } from "react";
import DropDown from "./DropDown";
import Layout from "./Layout";
import { useTuples } from "../context/tuplesContext";
import { useRouter } from "next/router";

export default function FormTuple() {
  const [tup, setTup] = useState({
    unities: "",
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
      createTuple(
        tup.unities,
        tup.quantities,
        tup.classification,
        tup.items,
        tup.notes,
      );
    } else {
      updateTuple(query.id, { ...tup });
    }
    push("/");
  };

  useEffect(() => {
    if (query.id) {
      const tupleFound = tuples.find(
        (tuple) => Number(tuple.id) === Number(query.id),
      );

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
      <div className="flex justify-center items-center h-full">
        <form onSubmit={handleSubmit} className="bg-gray-700 p-10 h-2/4">
          <h1 className="text-3xl mb-7">
            {query.id ? "Actualizar requesición" : "Nueva requisición"}
          </h1>

          <input
            type="number"
            name="unities"
            className="bg-gray-800 focus:outline-none w-full p-3 px-4 mb-5"
            placeholder="How many things"
            onChange={(e) => handleChange(e)}
            value={tup.unities}
          />
          <DropDown tup={tup} setTup={setTup} />
          <textarea
            name="classification"
            rows={3}
            placeholder="Write a description"
            className="bg-gray-800 focus:outline-none w-full p-3 px-4 mb-5"
            onChange={(e) => handleChange(e)}
            value={tup.classification}
          ></textarea>
          <textarea
            name="items"
            rows={3}
            placeholder="Write a description"
            className="bg-gray-800 focus:outline-none w-full p-3 px-4 mb-5"
            onChange={(e) => handleChange(e)}
            value={tup.items}
          ></textarea>
          <textarea
            name="notes"
            rows={3}
            placeholder="Write a description"
            className="bg-gray-800 focus:outline-none w-full p-3 px-4 mb-5"
            onChange={(e) => handleChange(e)}
            value={tup.notes}
          ></textarea>
          <button
            className="bg-green-500 hover:bg-green-400 px-4 py-2 rounded-sm disabled:opacity-50"
            disabled={!tup.unities}
          >
            save
          </button>
        </form>
      </div>
    </Layout>
  );
}
