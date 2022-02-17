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

export const TuplesProvider = ({ children }) => {
  const [tuples, setTuples] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    // getMain().then(([error, data]) => {
    //   if (error) return setError(error);
    //   setTuples(data);
    // });

    fetch("/api/getRequerimientos")
      .then((response) => response.json())
      .then((data) => {
        setTuples(data);
      })
      .catch((error) => setError(error));
  }, []);
  const createTuple = async (data) => {
    setTuples([...tuples, { ...data }]);
    // await createTupleInMain(newTuple);
  };

  const updateTuple = async (id, updatedTask) => {
    const [error, data] = await updateTupleInMain(id, updatedTask, tuples);
    setTuples(data);
  };

  const deleteTuple = async (id) => {
    const [error, data] = await deleteTupleMain(id, tuples);
    setTuples(data);
  };

  return (
    <TuplesContext.Provider
      value={{ tuples, createTuple, updateTuple, deleteTuple }}
    >
      {children}
    </TuplesContext.Provider>
  );
};
