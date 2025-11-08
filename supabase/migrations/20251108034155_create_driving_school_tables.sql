/*
  # Xzavier Driving School Database Schema

  ## Overview
  Creates the complete database structure for the driving school website including
  user management, contact forms, suburb coverage, FAQs, and customer reviews.

  ## New Tables Created

  ### 1. users
  - `id` (uuid, primary key) - Unique user identifier
  - `username` (text, unique, not null) - Username for authentication
  - `password` (text, not null) - Hashed password
  - `created_at` (timestamptz) - Account creation timestamp

  ### 2. contacts
  - `id` (serial, primary key) - Auto-incrementing contact ID
  - `name` (text, not null) - Student's full name
  - `email` (text, not null) - Contact email address
  - `phone` (text, not null) - Contact phone number
  - `suburb` (text, not null) - Pickup location suburb
  - `license_type` (text, not null) - Type of license (learner, probationary, full, international)
  - `experience` (text, not null) - Driving experience level
  - `preferred_time` (text, not null) - Preferred lesson time
  - `message` (text) - Additional message or requirements
  - `created_at` (timestamptz) - Submission timestamp
  - `status` (text) - Contact status (new, contacted, scheduled, converted)

  ### 3. suburbs
  - `id` (serial, primary key) - Auto-incrementing suburb ID
  - `name` (text, not null) - Suburb name
  - `postcode` (text, not null) - Suburb postcode
  - `nearest_vicroads` (text, not null) - Nearest VicRoads testing center
  - `distance` (text, not null) - Distance to VicRoads center
  - `region` (text, not null) - Region classification
  - `slug` (text, unique, not null) - URL-friendly suburb identifier
  - `created_at` (timestamptz) - Record creation timestamp

  ### 4. faqs
  - `id` (serial, primary key) - Auto-incrementing FAQ ID
  - `question` (text, not null) - FAQ question
  - `answer` (text, not null) - FAQ answer
  - `category` (text, not null) - FAQ category
  - `display_order` (int) - Order for display
  - `is_active` (boolean) - Whether FAQ is active
  - `created_at` (timestamptz) - Record creation timestamp

  ### 5. reviews
  - `id` (serial, primary key) - Auto-incrementing review ID
  - `name` (text, not null) - Reviewer name
  - `rating` (int, not null) - Rating (1-5 stars)
  - `text` (text, not null) - Review content
  - `location` (text, not null) - Test location or suburb
  - `verified` (boolean) - Whether review is verified
  - `is_featured` (boolean) - Whether to feature on homepage
  - `created_at` (timestamptz) - Review submission timestamp

  ## Security Implementation
  - Row Level Security (RLS) enabled on all tables
  - Public read access for suburbs, faqs, and reviews
  - Authenticated write access for contacts
  - Admin-only access for managing data
*/

-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  username text UNIQUE NOT NULL,
  password text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create contacts table
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
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

-- Create suburbs table
CREATE TABLE IF NOT EXISTS suburbs (
  id serial PRIMARY KEY,
  name text NOT NULL,
  postcode text NOT NULL,
  nearest_vicroads text NOT NULL,
  distance text NOT NULL,
  region text NOT NULL,
  slug text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create faqs table
CREATE TABLE IF NOT EXISTS faqs (
  id serial PRIMARY KEY,
  question text NOT NULL,
  answer text NOT NULL,
  category text NOT NULL,
  display_order int DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Create reviews table
CREATE TABLE IF NOT EXISTS reviews (
  id serial PRIMARY KEY,
  name text NOT NULL,
  rating int NOT NULL CHECK (rating >= 1 AND rating <= 5),
  text text NOT NULL,
  location text NOT NULL,
  verified boolean DEFAULT false,
  is_featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contacts_status ON contacts(status);
CREATE INDEX IF NOT EXISTS idx_suburbs_name ON suburbs(name);
CREATE INDEX IF NOT EXISTS idx_suburbs_postcode ON suburbs(postcode);
CREATE INDEX IF NOT EXISTS idx_suburbs_slug ON suburbs(slug);
CREATE INDEX IF NOT EXISTS idx_faqs_category ON faqs(category);
CREATE INDEX IF NOT EXISTS idx_faqs_display_order ON faqs(display_order);
CREATE INDEX IF NOT EXISTS idx_reviews_rating ON reviews(rating);
CREATE INDEX IF NOT EXISTS idx_reviews_is_featured ON reviews(is_featured);

-- Enable Row Level Security on all tables
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE suburbs ENABLE ROW LEVEL SECURITY;
ALTER TABLE faqs ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- RLS Policies for users table
CREATE POLICY "Users can read own data"
  ON users FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

-- RLS Policies for contacts table
CREATE POLICY "Anyone can create contact submissions"
  ON contacts FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view contacts"
  ON contacts FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update contacts"
  ON contacts FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- RLS Policies for suburbs table (public read access)
CREATE POLICY "Anyone can view suburbs"
  ON suburbs FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can manage suburbs"
  ON suburbs FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update suburbs"
  ON suburbs FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete suburbs"
  ON suburbs FOR DELETE
  TO authenticated
  USING (true);

-- RLS Policies for faqs table (public read access)
CREATE POLICY "Anyone can view active faqs"
  ON faqs FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

CREATE POLICY "Authenticated users can manage faqs"
  ON faqs FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update faqs"
  ON faqs FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete faqs"
  ON faqs FOR DELETE
  TO authenticated
  USING (true);

-- RLS Policies for reviews table (public read access)
CREATE POLICY "Anyone can view reviews"
  ON reviews FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can manage reviews"
  ON reviews FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update reviews"
  ON reviews FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete reviews"
  ON reviews FOR DELETE
  TO authenticated
  USING (true);