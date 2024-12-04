const pool = require('../../config/db');

const Author = {
  create: async (name, email) => {
    const result = await pool.query(
      'INSERT INTO authors (name, email) VALUES ($1, $2) RETURNING *',
      [name, email]
    );
    return result.rows[0];
  },

  list: async () => {
    const result = await pool.query('SELECT * FROM authors');
    return result.rows;
  },

  // Novo método para atualizar autor
  update: async (id, name, email) => {
    const result = await pool.query(
      'UPDATE authors SET name = $1, email = $2 WHERE id = $3 RETURNING *',
      [name, email, id]
    );
    return result.rows[0];
  },

  // Novo método para deletar autor
  delete: async (id) => {
    const result = await pool.query('DELETE FROM authors WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
  },
};

module.exports = Author;
