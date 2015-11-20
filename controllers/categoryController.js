var categoryModel = require('../models/categoryModel.js');

/**
 * categoryController.js
 *
 * @description :: Server-side logic for managing categorys.
 */
module.exports = {

    /**
     * categoryController.list()
     */
    list: function(req, res) {
        categoryModel.find(function(err, categorys){
            if(err) {
                return res.json(500, {
                    message: 'Error getting category.'
                });
            }
            return res.json(categorys);
        });
    },

    /**
     * categoryController.show()
     */
    show: function(req, res) {
        var id = req.params.id;
        categoryModel.findOne({_id: id}, function(err, category){
            if(err) {
                return res.json(500, {
                    message: 'Error getting category.'
                });
            }
            if(!category) {
                return res.json(404, {
                    message: 'No such category'
                });
            }
            return res.json(category);
        });
    },

    /**
     * categoryController.create()
     */
    create: function(req, res) {
        var category = new categoryModel({			name : req.body.name,			description : req.body.description
        });

        category.save(function(err, category){
            if(err) {
                return res.json(500, {
                    message: 'Error saving category',
                    error: err
                });
            }
            return res.json({
                message: 'saved',
                _id: category._id
            });
        });
    },

    /**
     * categoryController.update()
     */
    update: function(req, res) {
        var id = req.params.id;
        categoryModel.findOne({_id: id}, function(err, category){
            if(err) {
                return res.json(500, {
                    message: 'Error saving category',
                    error: err
                });
            }
            if(!category) {
                return res.json(404, {
                    message: 'No such category'
                });
            }

            category.name =  req.body.name ? req.body.name : category.name;			category.description =  req.body.description ? req.body.description : category.description;			
            category.save(function(err, category){
                if(err) {
                    return res.json(500, {
                        message: 'Error getting category.'
                    });
                }
                if(!category) {
                    return res.json(404, {
                        message: 'No such category'
                    });
                }
                return res.json(category);
            });
        });
    },

    /**
     * categoryController.remove()
     */
    remove: function(req, res) {
        var id = req.params.id;
        categoryModel.findByIdAndRemove(id, function(err, category){
            if(err) {
                return res.json(500, {
                    message: 'Error getting category.'
                });
            }
            return res.json(category);
        });
    }
};