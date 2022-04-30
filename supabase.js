import { createClient } from '@supabase/supabase-js'

// This should be in .env
export const supabase = createClient("https://jwhaobannkixhvmascwb.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3aGFvYmFubmtpeGh2bWFzY3diIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTEyMTY5NzUsImV4cCI6MTk2Njc5Mjk3NX0._2nL2XL7pr92fCqU8Haze7zQYFwnzTk6Ao0NoSJBcP4")