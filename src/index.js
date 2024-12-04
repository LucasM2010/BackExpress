require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');
const authorRoutes = require('./routes/authorRoutes');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
app.use(express.json());

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

// Função para criar as tabelas 'authors' e 'books' se não existirem
const createTablesIfNotExists = async () => {
  const createAuthorsTableQuery = `
    CREATE TABLE IF NOT EXISTS authors (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL
    );
  `;
  
  const createBooksTableQuery = `
    CREATE TABLE IF NOT EXISTS books (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      isbn VARCHAR(13) UNIQUE NOT NULL,
      year_publication INTEGER NOT NULL,
      author_id INTEGER REFERENCES authors(id) ON DELETE CASCADE
    );
  `;
  
  try {
    await pool.query(createAuthorsTableQuery);
    await pool.query(createBooksTableQuery);
    console.log('Tabelas authors e books criadas ou já existem.');
  } catch (error) {
    console.error('Erro ao criar tabelas:', error);
  }
};

// Criar tabelas ao iniciar o servidor
createTablesIfNotExists();

pool.connect()
  .then(() => console.log('Conectado ao banco de dados PostgreSQL'))
  .catch(err => console.error('Erro ao conectar ao banco de dados', err));

app.use('/authors', authorRoutes);
app.use('/books', bookRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(Servidor rodando na porta ${PORT});
});
