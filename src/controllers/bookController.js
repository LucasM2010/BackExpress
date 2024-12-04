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
