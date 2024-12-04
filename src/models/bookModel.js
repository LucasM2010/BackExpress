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

 
  update: async (id, title, isbn, year, author_id) => {
    const result = await pool.query(
      'UPDATE books SET title = $1, isbn = $2, year_publication = $3, author_id = $4 WHERE id = $5 RETURNING *',
      [title, isbn, year, author_id, id]
    );
    return result.rows[0];
  },


  delete: async (id) => {
    const result = await pool.query('DELETE FROM books WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
  },
};

module.exports = Book;
