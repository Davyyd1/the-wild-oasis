import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://jvoyodrlhvpizxgzmmqg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2b3lvZHJsaHZwaXp4Z3ptbXFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA1MDgxMTgsImV4cCI6MjA1NjA4NDExOH0.GEsJ1mxw7_usVttUbKosBTr-9hJlFyleAiC0FoJYhrY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
