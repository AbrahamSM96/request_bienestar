import { supabase } from "./supabase";

export const getMain = async () => {
  const { data, error } = await supabase.from("main").select(`*`);
  return [error, data];
};

export const getUnities = async () => {
  const { data, error } = await supabase.from("unities").select(`*`);
  return [error, data];
};

export const createTupleInMain = async (newTuple) => {
  const { data, error } = await supabase
    .from("main")
    .insert([{ ...newTuple }])
    .order("created_at", { ascending: false });
  return [error, data];
};

export const updateTupleInMain = async (id, updatedTask, tuples) => {
  const findUpdatedTup = tuples.filter((tup) => tup.id_tuple === id);

  const { data, error } = await supabase
    .from("main")
    .update(updatedTask)
    .match(findUpdatedTup[0])
    .order("created_at", { ascending: false });

  const newDataUpdated = [
    ...tuples.map((tup) =>
      tup.id_tuple === id ? { ...tup, ...updatedTask } : tup,
    ),
  ];
  return [error, newDataUpdated];
};

export const deleteTupleMain = async (id, tuples) => {
  const { error, data } = await supabase
    .from("main")
    .delete()
    .match({ id_tuple: id });
  const newData = [...tuples.filter((tup) => tup.id_tuple !== id)];
  return [error, newData];
};
