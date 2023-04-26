import { createClient } from '@supabase/supabase-js';

const URL = "https://ahnfzjtedllmxzqxujaa.supabase.com";

const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFobmZ6anRlZGxsbXh6cXh1amFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI0OTI2MDcsImV4cCI6MTk5ODA2ODYwN30.CJulBSXaII5fRekdHjENfTuu4pEb2ylb3zhFwXmos3k";

export const supabase = createClient(URL, API_KEY);
