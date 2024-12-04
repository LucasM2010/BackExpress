const Author = require('../models/authorModel');

exports.createAuthor = async (req, res) => {
  const { name, email } = req.body;
  try {
    const author = await Author.create(name, email);
    res.status(201).json(author);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar autor' });
  }
};

exports.listAuthors = async (req, res) => {
  try {
    const authors = await Author.list();
    res.status(200).json(authors);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar autores' });
  }
};
