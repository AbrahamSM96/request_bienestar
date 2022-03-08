import { createContext, useContext, useState, useEffect } from "react";
import {
  getMain,
  createTupleInMain,
  updateTupleInMain,
  deleteTupleMain,
} from "../services/index";
import { v4 as uuid } from "uuid";

export const TuplesContext = createContext();

export const useTuples = () => useContext(TuplesContext);

// interface Tuples {
//   id: number;
//   area: string;
//   cantidad: number;
//   clasificacion: string;
//   item: string;
//   nota: string;
//   unidad: string;
// }

export const TuplesProvider = ({ children }) => {
  const [tuples, setTuples] = useState([]);
  const [error, setError] = useState(null);
  const [load, setLoad] = useState(true);

  const createTuple = async (data) => {
    setTuples([...tuples, { ...data }]);
    // await createTupleInMain(newTuple);
  };

  const updateTuple = async (updatedTask) => {
    // const [error, data] = await updateTupleInMain(id, updatedTask, tuples);
    await fetch("/api/updateRequerimientos", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    })
      .then((response) => response.json())
      .then((data) => {
        setTuples([
          ...tuples.map((tup) =>
            tup.id === data.id ? { ...tup, ...data } : tup,
          ),
        ]);
      })
      .catch((error) => setError(error));
  };

  const deleteTuple = async (id) => {
    await fetch("/api/deleteRequerimientos", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(id),
    })
      .then((response) => response.json())
      .then((data) => {
        setTuples([...tuples.filter((tup) => tup.id !== data.id)]);
      })
      .catch((error) => setError(error));
    // const [error, data] = await deleteTupleMain(id, tuples);
    // setTuples(data);
  };

  useEffect(() => {
    // getMain().then(([error, data]) => {
    //   if (error) return setError(error);
    //   setTuples(data);
    // });
    setLoad(true);
    setTimeout(() => {
      fetch("/api/getRequerimientos")
        .then((response) => response.json())
        .then((data) => {
          setLoad(false);
          setTuples(data);
        })
        .catch((error) => {
          setError(error), setLoad(false);
        });
    }, 1000);
  }, []);

  return (
    <TuplesContext.Provider
      value={{ tuples, createTuple, updateTuple, deleteTuple, load }}
    >
      {children}
    </TuplesContext.Provider>
  );
};
