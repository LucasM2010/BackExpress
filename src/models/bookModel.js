const pool = require('../../config/db');

const Book = {
  create: async (title, isbn, year, author_id) => {
    const result = await pool.query(
      'INSERT INTO books (title, isbn, year_publication, author_id) VALUES ($1, $2, $3, $4) RETURNING *',
      [title, isbn, year, author_id]
    );
    return result.rows[0];
  },

  list: async () => {
    const result = await pool.query('SELECT * FROM books');
    return result.rows;
  },
};

module.exports = Book;
