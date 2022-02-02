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
    getMain().then(([error, data]) => {
      if (error) return setError(error);
      setTuples(data);
    });
  }, []);
  const createTuple = async (
    unities,
    quantities,
    classification,
    items,
    notes,
  ) => {
    const id_tuple = uuid();
    const newTuple = {
      unities,
      quantities,
      classification,
      items,
      notes,
      id_tuple,
    };
    setTuples([...tuples, { ...newTuple }]);
    await createTupleInMain(newTuple);
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
