const Book = require('../models/bookModel');

exports.createBook = async (req, res) => {
  const { title, isbn, year, author_id } = req.body;
  try {
    const book = await Book.create(title, isbn, year, author_id);
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar livro' });
  }
};

exports.listBooks = async (req, res) => {
  try {
    const books = await Book.list();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar livros' });
  }
};

// Novo método para atualizar livro
exports.updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, isbn, year, author_id } = req.body;
  try {
    const updatedBook = await Book.update(id, title, isbn, year, author_id);
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar livro' });
  }
};

// Novo método para deletar livro
exports.deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    await Book.delete(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar livro' });
  }
};

