DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS self_report_cases CASCADE;
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  quarantine_start_time BIGINT DEFAULT NULL,
  has_self_reported BOOLEAN DEFAULT FALSE
);

CREATE TABLE self_report_cases (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  latitude FLOAT NOT NULL,
  longitude FLOAT NOT NULL,
  created_date BIGINT NOT NULL
);