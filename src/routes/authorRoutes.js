const express = require('express');
const router = express.Router();
const authorController = require('../controllers/authorController');

// Rotas de autores
router.post('/', authorController.createAuthor);
router.get('/', authorController.listAuthors);
router.put('/:id', authorController.updateAuthor); // Atualizar autor
router.delete('/:id', authorController.deleteAuthor); // Deletar autor

module.exports = router;
