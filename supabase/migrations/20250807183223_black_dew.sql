/*
  # Seed initial data for development and testing

  1. Initial Data
    - Create default admin user for accessing contact submissions
    - Add sample contact entries for testing (optional, can be removed in production)

  2. Security Notes
    - Default admin password should be changed immediately after setup
    - Sample data is for development/testing purposes only
    - In production, remove sample contacts and change admin credentials

  3. Usage
    - Default admin username: admin
    - Default admin password: admin123 (CHANGE THIS!)
    - Sample contacts demonstrate the data structure
*/

-- Insert default admin user (password should be hashed in real application)
-- Note: In production, this password should be properly hashed using bcrypt or similar
INSERT INTO users (username, password) 
VALUES ('admin', '$2b$10$rQZ9QmjlhQmjlhQmjlhQmOeKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK')
ON CONFLICT (username) DO NOTHING;

-- Sample contact data for testing (remove in production)
INSERT INTO contacts (
  name, 
  email, 
  phone, 
  suburb, 
  license_type, 
  experience, 
  preferred_time, 
  message,
  created_at
) VALUES 
(
  'John Smith',
  'john.smith@example.com',
  '0434 123 456',
  'Dandenong',
  'learner',
  'beginner',
  'weekdays',
  'Looking to start driving lessons as soon as possible. Available most weekday afternoons.',
  now() - interval '2 days'
),
(
  'Sarah Johnson',
  'sarah.j@example.com',
  '0412 987 654',
  'Noble Park',
  'probationary',
  'test-ready',
  'weekends',
  'Need test day package for P2 license test at Dandenong VicRoads.',
  now() - interval '1 day'
),
(
  'Michael Chen',
  'mchen@example.com',
  '0456 789 123',
  'Hallam',
  'learner',
  'some',
  'evenings',
  'Have some driving experience but need professional lessons before test.',
  now() - interval '3 hours'
)
ON CONFLICT DO NOTHING;

-- Note: Remove the sample data in production by running:
-- DELETE FROM contacts WHERE email LIKE '%@example.com';