var bookModel = require('../models/bookModel.js');
var categoryModel = require('../models/categoryModel.js');

/**
 * categoryController.js
 *
 * @description :: Server-side logic for managing categorys.
 */
module.exports = {

    /**
     * add new book with category
     */
    add: function(req, res) {
        categoryModel.find(function(err, categories){
            if(err) {
                return res.json(500, {
                    message: 'Error getting categories.'
                });
            }
            //return res.json(categories);
            return res.render('books/create', {categories:categories});
        });
    },
/**
 * bookController.js
 *
 * @description :: Server-side logic for managing books.

    /**
     * bookController.list()
     */
    list: function(req, res) {
        bookModel.find(function(err, books){
            if(err) {
                return res.json(500, {
                    message: 'Error getting book.'
                });
            }
            return res.json(books);
        });
    },

    /**
     * bookController.show()
     */
    show: function(req, res) {
        var id = req.params.id;
        bookModel.findOne({_id: id}, function(err, book){
            if(err) {
                return res.json(500, {
                    message: 'Error getting book.'
                });
            }
            if(!book) {
                return res.json(404, {
                    message: 'No such book'
                });
            }
            return res.json(book);
        });
    },

    /**
     * bookController.create()
     */
    create: function(req, res) {
        var book = new bookModel({
			title : req.body.title,
			description : req.body.description,
			author : req.body.author,
			price : req.body.price,
			quantity : req.body.quantity,
			category : req.body.category
        });

        book.save(function(err, book){
            if(err) {
                return res.json(500, {
                    message: 'Error saving book',
                    error: err
                });
            }
            return res.json({
                message: 'saved',
                _id: book._id
            });
        });
    },

    /**
     * bookController.update()
     */
    update: function(req, res) {
        var id = req.params.id;
        bookModel.findOne({_id: id}, function(err, book){
            if(err) {
                return res.json(500, {
                    message: 'Error saving book',
                    error: err
                });
            }
            if(!book) {
                return res.json(404, {
                    message: 'No such book'
                });
            }

            book.title =  req.body.title ? req.body.title : book.title;
			book.description =  req.body.description ? req.body.description : book.description;
			book.author =  req.body.author ? req.body.author : book.author;
			book.price =  req.body.price ? req.body.price : book.price;
			book.quantity =  req.body.quantity ? req.body.quantity : book.quantity;
			book.category =  req.body.category ? req.body.category : book.category;
			
            book.save(function(err, book){
                if(err) {
                    return res.json(500, {
                        message: 'Error getting book.'
                    });
                }
                if(!book) {
                    return res.json(404, {
                        message: 'No such book'
                    });
                }
                return res.json(book);
            });
        });
    },

    /**
     * bookController.remove()
     */
    remove: function(req, res) {
        var id = req.params.id;
        bookModel.findByIdAndRemove(id, function(err, book){
            if(err) {
                return res.json(500, {
                    message: 'Error getting book.'
                });
            }
            return res.json(book);
        });
    }
};