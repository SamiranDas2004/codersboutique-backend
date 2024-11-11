import db from './database.js'

async function createUserTable() {
  const queryText = `
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100),
            email VARCHAR(100) UNIQUE,
            password VARCHAR(100)
        )
    `;
  await db.query(queryText);
}

async function createCandidateTable() {
  const queryText = `
      CREATE TABLE IF NOT EXISTS candidates (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        status VARCHAR(50) CHECK (status IN ('Pending', 'In Progress', 'Completed')) DEFAULT 'Pending',
        date TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
      )
    `;
  await db.query(queryText);
}

async function addPasswordColumn() {
  const queryText = `
      ALTER TABLE users
      ADD COLUMN IF NOT EXISTS password VARCHAR(255);
  `;
  await db.query(queryText);
}

addPasswordColumn().catch(console.error);

createUserTable().catch(console.error);
createCandidateTable().catch(console.error);

