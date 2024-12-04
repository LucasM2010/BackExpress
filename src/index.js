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


pool.connect()
  .then(() => console.log('Conectado ao banco de dados PostgreSQL'))
  .catch(err => console.error('Erro ao conectar ao banco de dados', err));


app.use('/authors', authorRoutes);
app.use('/books', bookRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
