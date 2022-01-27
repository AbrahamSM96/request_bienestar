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
  const { data, error } = await supabase.from("main").upsert([{ ...newTuple }]);
  console.log({ data, error });
  return [error, data];
};
