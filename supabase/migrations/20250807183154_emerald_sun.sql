/*
  # Create contacts table for contact form submissions

  1. New Tables
    - `contacts`
      - `id` (serial, primary key) - auto-incrementing contact ID
      - `name` (text, not null) - full name of the person inquiring
      - `email` (text, not null) - email address for contact
      - `phone` (text, not null) - phone number for contact
      - `suburb` (text, not null) - pickup location/suburb
      - `license_type` (text, not null) - type of license (learner, probationary, full, international)
      - `experience` (text, not null) - driving experience level (beginner, some, test-ready, test-failed)
      - `preferred_time` (text, not null) - preferred lesson time (weekdays, weekends, mornings, etc.)
      - `message` (text, nullable) - optional additional message
      - `created_at` (timestamp, default now()) - when the contact was submitted

  2. Security
    - Enable RLS on `contacts` table
    - Add policy for authenticated users (admin) to read all contacts
    - Add policy to allow anonymous contact form submissions
    - Restrict updates and deletes to authenticated users only

  3. Notes
    - Serial ID for easy reference and ordering
    - All required fields except message to ensure complete contact information
    - Timestamp for tracking when inquiries were made
    - Designed to capture all information needed for driving lesson booking
*/

CREATE TABLE IF NOT EXISTS contacts (
  id serial PRIMARY KEY,
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  suburb text NOT NULL,
  license_type text NOT NULL,
  experience text NOT NULL,
  preferred_time text NOT NULL,
  message text,
  created_at timestamp DEFAULT now()
);

ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Policy to allow anonymous contact form submissions
CREATE POLICY "Allow anonymous contact submissions"
  ON contacts
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy for authenticated users (admin) to read all contacts
CREATE POLICY "Authenticated users can read all contacts"
  ON contacts
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy for authenticated users to update contacts (for admin management)
CREATE POLICY "Authenticated users can update contacts"
  ON contacts
  FOR UPDATE
  TO authenticated
  USING (true);

-- Policy for authenticated users to delete contacts (for admin cleanup)
CREATE POLICY "Authenticated users can delete contacts"
  ON contacts
  FOR DELETE
  TO authenticated
  USING (true);