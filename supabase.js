import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient('https://jlppkvzpxefescmtfjwe.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpscHBrdnpweGVmZXNjbXRmandlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM1OTMwMjUsImV4cCI6MTk4OTE2OTAyNX0.Kw01ohOt3vHOwi_o6AASiWu9pRo9cxxF2m2CWyovRbw')
