var express = require('express');
var router = express.Router();
var bookController = require('../controllers/bookController.js');

/*
 * GET
 */
router.get('/', function(req, res) {
    bookController.list(req, res);
});


router.get('/add', function(req, res) {
    bookController.add(req, res);
});
/*
 * GET
 */
router.get('/:id', function(req, res) {
    bookController.show(req, res);
});

/*
 * POST
 */
router.post('/', function(req, res) {
    bookController.create(req, res);
});

/*
 * PUT
 */
router.put('/:id', function(req, res) {
    bookController.update(req, res);
});

/*
 * DELETE
 */
router.delete('/:id', function(req, res) {
    bookController.remove(req, res);
});

module.exports = router;