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


exports.updateAuthor = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  try {
    const updatedAuthor = await Author.update(id, name, email);
    res.status(200).json(updatedAuthor);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar autor' });
  }
};


exports.deleteAuthor = async (req, res) => {
  const { id } = req.params;
  try {
    await Author.delete(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar autor' });
  }
};
