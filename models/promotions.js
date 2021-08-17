const mongoose = require('mongoose');
const schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);

// {
//     "name": "Weekend Grand Buffet",
//     "image": "images/buffet.png",
//     "label": "New",
//     "price": "19.99",
//     "description": "Featuring . . .",
//     "featured": false
// }

const promotionSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required:true
    },
    label : {
        type : String,
        default : ''
    },
    price :{
        type : Currency,
        required : true,
        min :0
    },
    description : {
        type : String,
        required:true
    },
    featured : {
        type : Boolean,
        default : false
    },
})

