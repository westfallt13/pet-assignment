import { supabaseClient } from './supabaseClient';

export const fetchPets = async () => {
  const { data, error } = await supabaseClient.from('pets').select();
  return data;
};