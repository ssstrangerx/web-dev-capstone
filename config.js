// ===== SUPABASE CONFIGURATION =====
const SUPABASE_URL = "https://ksveycefupqilivetows.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtzdmV5Y2VmdXBxaWxpdmV0b3dzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU3OTY3OTksImV4cCI6MjA5MTM3Mjc5OX0.AuHBrZteSf5yacKgJAq3fiQ_fxfnlma_DWJ5PiZtohI";

// Initialize Supabase client
const { createClient } = window.supabase;
const client = createClient(SUPABASE_URL, SUPABASE_KEY);

console.log("✅ Supabase client initialized");
