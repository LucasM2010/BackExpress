const pool = require('../../config/db');

const Author = {
  create: async (name, email) => {
    const result = await pool.query(
      'INSERT INTO authors (name, email) VALUES ($1, $2) RETURNING *',
      [name, email]
    );
    return result.rows[0];
  },
  
};

module.exports = Author;
