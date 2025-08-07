/*
  # Add indexes and constraints for performance and data integrity

  1. Indexes
    - Add index on contacts.created_at for efficient date-based queries
    - Add index on contacts.suburb for suburb-based filtering
    - Add index on contacts.license_type for filtering by license type
    - Add index on users.username for efficient login queries

  2. Constraints
    - Add check constraint for valid license types
    - Add check constraint for valid experience levels
    - Add check constraint for valid preferred times
    - Add email format validation

  3. Performance
    - Indexes will improve query performance for admin dashboard
    - Constraints ensure data quality and consistency
    - Email validation prevents invalid email submissions
*/

-- Indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contacts_suburb ON contacts(suburb);
CREATE INDEX IF NOT EXISTS idx_contacts_license_type ON contacts(license_type);
CREATE INDEX IF NOT EXISTS idx_users_username ON users(username);

-- Check constraints for data validation
ALTER TABLE contacts 
ADD CONSTRAINT IF NOT EXISTS chk_license_type 
CHECK (license_type IN ('learner', 'probationary', 'full', 'international'));

ALTER TABLE contacts 
ADD CONSTRAINT IF NOT EXISTS chk_experience 
CHECK (experience IN ('beginner', 'some', 'test-ready', 'test-failed'));

ALTER TABLE contacts 
ADD CONSTRAINT IF NOT EXISTS chk_preferred_time 
CHECK (preferred_time IN ('weekdays', 'weekends', 'mornings', 'afternoons', 'evenings', 'flexible'));

-- Email format validation (basic check)
ALTER TABLE contacts 
ADD CONSTRAINT IF NOT EXISTS chk_email_format 
CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$');

-- Phone number validation (Australian format)
ALTER TABLE contacts 
ADD CONSTRAINT IF NOT EXISTS chk_phone_format 
CHECK (phone ~ '^(\+61|0)[0-9]{9}$' OR phone ~ '^[0-9]{4}\s[0-9]{3}\s[0-9]{3}$');