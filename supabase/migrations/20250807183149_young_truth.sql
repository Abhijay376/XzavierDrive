/*
  # Create users table for authentication

  1. New Tables
    - `users`
      - `id` (varchar, primary key, auto-generated UUID)
      - `username` (text, unique, not null) - for admin login
      - `password` (text, not null) - hashed password for authentication
      - Used for admin access to view contact submissions

  2. Security
    - Enable RLS on `users` table
    - Add policy for authenticated users to read their own data
    - Add policy for user management operations

  3. Notes
    - Uses PostgreSQL's gen_random_uuid() for automatic ID generation
    - Username must be unique to prevent duplicate accounts
    - Password should be hashed before storage (handled by application)
*/

CREATE TABLE IF NOT EXISTS users (
  id varchar PRIMARY KEY DEFAULT gen_random_uuid(),
  username text UNIQUE NOT NULL,
  password text NOT NULL
);

ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Policy for users to read their own data
CREATE POLICY "Users can read own data"
  ON users
  FOR SELECT
  TO authenticated
  USING (auth.uid()::text = id);

-- Policy for user management (admin operations)
CREATE POLICY "Enable user management for authenticated users"
  ON users
  FOR ALL
  TO authenticated
  USING (true);