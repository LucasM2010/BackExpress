const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Rotas de livros
router.post('/', bookController.createBook);
router.get('/', bookController.listBooks);
router.put('/:id', bookController.updateBook); // Atualizar livro
router.delete('/:id', bookController.deleteBook); // Deletar livro

module.exports = router;
