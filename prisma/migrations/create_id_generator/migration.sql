-- prisma/migrations/xxx_create_id_generator/migration.sql

-- Create sequence for the counter
CREATE SEQUENCE IF NOT EXISTS quote_counter_seq START 1;

-- Create function to generate ID
CREATE OR REPLACE FUNCTION generate_quote_id()
RETURNS text AS $$
DECLARE
    current_year text;
    counter text;
    counter_num integer;
BEGIN
    -- Get current year
    current_year := to_char(CURRENT_DATE, 'YYYY');
    
    -- Get next value from sequence
    counter_num := nextval('quote_counter_seq');
    
    -- Format counter based on value
    IF counter_num < 10000 THEN
        -- Pad with zeros for numbers under 10000
        counter := to_char(counter_num, 'FM0000');
    ELSE
        -- Just use the number as is for 10000 and above
        counter := counter_num::text;
    END IF;
    
    -- Return formatted ID
    RETURN current_year || '-' || counter;
END;
$$ LANGUAGE plpgsql;

-- Create index for better performance
CREATE INDEX idx_quote_id ON "Quote" (id);