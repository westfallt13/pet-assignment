const SUPABASE_URL = import.meta.env.VITE_DATABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_APIKEY;

export const supabaseClient = {
  from: (table) => ({
    select: async () => {
      const response = await fetch(`${SUPABASE_URL}?select=*`, {
        headers: {
          apikey: SUPABASE_KEY,
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      return { data };
    }
  })
};