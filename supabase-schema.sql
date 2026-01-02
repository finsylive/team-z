-- Create a table to store client inquiries from the "Get Started" form
CREATE TABLE IF NOT EXISTS client_inquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  project_name TEXT NOT NULL,
  services TEXT[] NOT NULL, -- Array of selected services
  preferred_timing TEXT, -- Preferred timing for a meet (morning, afternoon, evening, flexible)
  additional_notes TEXT,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'in_progress', 'completed', 'archived')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_client_inquiries_email ON client_inquiries(email);

-- Create an index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_client_inquiries_created_at ON client_inquiries(created_at DESC);

-- Create an index on status for filtering
CREATE INDEX IF NOT EXISTS idx_client_inquiries_status ON client_inquiries(status);

-- Enable Row Level Security (RLS)
ALTER TABLE client_inquiries ENABLE ROW LEVEL SECURITY;

-- Drop existing policy if it exists (for updates)
DROP POLICY IF EXISTS "Allow anonymous inserts" ON client_inquiries;

-- Create a policy to allow anonymous inserts (for form submissions)
-- This allows anyone to insert new inquiries without authentication
-- Using 'public' role ensures it works for all users (anon and authenticated)
CREATE POLICY "Allow anonymous inserts" ON client_inquiries
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Create a policy to allow authenticated users to read all inquiries
-- (You can modify this based on your authentication needs)
CREATE POLICY "Allow authenticated reads" ON client_inquiries
  FOR SELECT
  TO authenticated
  USING (true);

-- Create a function to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create a trigger to automatically update updated_at
CREATE TRIGGER update_client_inquiries_updated_at
  BEFORE UPDATE ON client_inquiries
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Optional: Create a view for easy querying
CREATE OR REPLACE VIEW client_inquiries_summary AS
SELECT 
  id,
  name,
  email,
  phone,
  project_name,
  services,
  preferred_timing,
  status,
  created_at,
  updated_at,
  CASE 
    WHEN additional_notes IS NULL OR additional_notes = '' THEN false
    ELSE true
  END as has_additional_notes
FROM client_inquiries
ORDER BY created_at DESC;

