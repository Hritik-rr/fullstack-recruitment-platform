-- Add the search vector column
ALTER TABLE jobs ADD COLUMN search_vector tsvector;

-- Create a function to automatically update search_vector
CREATE OR REPLACE FUNCTION jobs_search_vector_update() RETURNS trigger AS $$
BEGIN
  NEW.search_vector = to_tsvector('english', NEW.title || ' ' || NEW.description);
  RETURN NEW;
END
$$ LANGUAGE plpgsql;

-- Create a trigger to automatically update search_vector when title or description changes
CREATE TRIGGER jobs_search_vector_update
  BEFORE INSERT OR UPDATE OF title, description
  ON jobs
  FOR EACH ROW
  EXECUTE FUNCTION jobs_search_vector_update();

-- Create a GIN index on the search vector
CREATE INDEX jobs_search_vector_idx ON jobs USING GIN(search_vector);