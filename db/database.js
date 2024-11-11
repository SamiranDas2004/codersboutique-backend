import dotenv from 'dotenv'
dotenv.config();

import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
    connectionString: process.env.POSTGRES_URL + "?sslmode=require",
})

pool.connect((err) => {
    if (err) throw err
    console.log('Conntected to postgreSQL successfully')
})

export default pool;