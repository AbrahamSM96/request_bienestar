import { supabase } from "./supabase";

export const getMain = async () => {
  const { data, error } = await supabase.from("main").select(`*`);
  return [error, data];
};

export const getUnities = async () => {
  const { data, error } = await supabase.from("unities").select(`*`);
  return [error, data];
};

export const getCatFoods = async () => {
  const { data, error } = await supabase.from("foods").select("name, id");
  return [error, data];
};

export const getCategories = async () => {
  const { data, error } = await supabase.from("categories").select("name, id");
  return [error, data];
};

export const getCatStationery1 = async () => {
  const { data, error } = await supabase
    .from("stationery_1")
    .select("name, id");
  return [error, data];
};

export const getCatStationery2 = async () => {
  const { data, error } = await supabase
    .from("stationery_2")
    .select("name, id");
  return [error, data];
};

export const getCatAutoparts = async () => {
  const { data, error } = await supabase.from("autoparts").select("name, id");
  return [error, data];
};

export const getCatCleaning = async () => {
  const { data, error } = await supabase.from("cleaning").select("name, id");
  return [error, data];
};

export const getCatElectric = async () => {
  const { data, error } = await supabase.from("electric").select("name, id");
  return [error, data];
};

export const getCatMaintenance = async () => {
  const { data, error } = await supabase.from("maintenance").select("name, id");
  return [error, data];
};

export const getCatPharmacy = async () => {
  const { data, error } = await supabase.from("pharmacy").select("name, id");
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
