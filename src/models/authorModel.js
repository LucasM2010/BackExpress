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
};

module.exports = Author;
