import { createClient } from "@supabase/supabase-js";

// Supabase project URL from environment variables
// This is your backend endpoint for Supabase API
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;

// Public anon key used for client-side access (safe for browser use)
// It controls what the user can do based on Supabase RLS (Row Level Security)
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Create and export Supabase client instance
// This client will be used throughout your app for database operations
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
