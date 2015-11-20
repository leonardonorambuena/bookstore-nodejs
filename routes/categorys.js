var express = require('express');
var router = express.Router();
var categoryController = require('../controllers/categoryController.js');

/*
 * GET
 */
router.get('/', function(req, res) {
    categoryController.list(req, res);
});

/*
 * GET
 */
router.get('/:id', function(req, res) {
    categoryController.show(req, res);
});

/*
 * POST
 */
router.post('/', function(req, res) {
    categoryController.create(req, res);
});

/*
 * PUT
 */
router.put('/:id', function(req, res) {
    categoryController.update(req, res);
});

/*
 * DELETE
 */
router.delete('/:id', function(req, res) {
    categoryController.remove(req, res);
});

module.exports = router;