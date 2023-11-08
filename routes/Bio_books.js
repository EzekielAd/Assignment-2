var express = require('express');
var router = express.Router();
//const { router } = require('../config/app');
let Book = require('../models/Bio_books');

/* Get route for the Bio Books list */

// Read Operation
/*
router.get('/books',(req,res,next) => {
    Book.find((err,BookList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            console.log(BookList);
        }
    });
});*/

router.get('/', async (req,res,next)=>{ //< Mark function as async
    try{
       const BookList = await Book.find(); //< Use of await keyword
       res.render('Bio_books', {
          title: 'Book List', 
          BookList: BookList
       });
    }catch(err){
       console.error(err);
       //Handle error
       res.render('Bio_books', {
          error: 'Error on server'
       });
    }
 });
 module.exports = router;