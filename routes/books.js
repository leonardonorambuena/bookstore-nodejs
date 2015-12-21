var express = require('express');
var router = express.Router();
var multer = require('multer');
var bookController = require('../controllers/bookController.js');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images/books/'); // Directirio donde se guardaran los archivos.
  },
  filename: function (req, file, cb) {
    cb(null, Date.now()+file.originalname);
  }
})

var upload = multer({ storage: storage });

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
router.post('/', upload.single('cover'), function(req, res) {
    bookController.create(req, res);
});

/*
 * PUT
 */
router.post('/:id', upload.single('cover'),function(req, res) {
    bookController.update(req, res);
});

/*
 * DELETE
 */
router.get('/:id/delete', function(req, res) {
    bookController.remove(req, res);
});

module.exports = router;