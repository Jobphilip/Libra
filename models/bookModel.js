const mongoose=require('mongoose');

// mongoose.connect('mongodb://localhost:27017/library');

const Schema=mongoose.Schema;

const bookSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    genre:{
        type:String,
        required:true
    },
    bookPic:{
        type:String,
        required:true
    },
    about:{
        type:String,
        required:true
    },
});

const bookModel=mongoose.model('book',bookSchema);

module.exports=bookModel;