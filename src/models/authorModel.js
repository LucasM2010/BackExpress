const pool = require('../../config/db');

const Author = {
  create: async (name, email) => {
    try {
      const result = await pool.query(
        'INSERT INTO authors (name, email) VALUES ($1, $2) RETURNING *',
        [name, email]
      );
      return result.rows[0];
    } catch (error) {
      console.error('Erro ao criar autor no banco:', error);
      throw new Error('Erro ao criar autor no banco');
    }
  },

  list: async () => {
    try {
      const result = await pool.query('SELECT * FROM authors');
      return result.rows;
    } catch (error) {
      console.error('Erro ao listar autores no banco:', error);
      throw new Error('Erro ao listar autores no banco');
    }
  },

  update: async (id, name, email) => {
    try {
      const result = await pool.query(
        'UPDATE authors SET name = $1, email = $2 WHERE id = $3 RETURNING *',
        [name, email, id]
      );
      return result.rows[0];
    } catch (error) {
      console.error('Erro ao atualizar autor no banco:', error);
      throw new Error('Erro ao atualizar autor no banco');
    }
  },

  delete: async (id) => {
    try {
      const result = await pool.query(
        'DELETE FROM authors WHERE id = $1 RETURNING *',
        [id]
      );
      return result.rows[0];
    } catch (error) {
      console.error('Erro ao deletar autor no banco:', error);
      throw new Error('Erro ao deletar autor no banco');
    }
  }
};

module.exports = Author;
