const bookModel = require('../models/bookModel');

exports.index = (req, res, next) => {
    // Get books from model
    const books = bookModel.list();
    // Pass data to view to display list of books
    res.render('ourbooks', {tittle:'BTN03',curPage:'Books-bg',books:books});
};