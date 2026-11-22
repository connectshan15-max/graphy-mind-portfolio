const SUPABASE_KEY = "sb_publishable_D7PDzcuEp5SKlR7Y4P5bpw_GFHS-k1_";
const SUPABASE_URL = "https://ochngxtglhrkjyqtngju.supabase.co";
const SUPABASE_KEY = "sb_publishable_D7PDzcuEp5SKlR7Y4P5bpw_GFHS-k1_";

const supabaseScript = document.createElement("script");
supabaseScript.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";
supabaseScript.onload = () => {
  window.supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
  );
  console.log("Graphy Mind connected to Supabase!");
};

document.head.appendChild(supabaseScript);
