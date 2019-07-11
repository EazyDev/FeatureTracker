const mongoose = require('mongoose');
const featureModelSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    request : {type:String},
    description : {type:String},
    voters : {type:Number},
    upvoters : {type:Number},
    author : {type:Number},
    status : {type:String,default:'Unplanned'},
    priority : {type:String,required:true},
    createdat : {type:Date,default:Date.now},
    via : {type:String},
    slackmessage : {type:String}
});

module.exports = mongoose.model('featureModel', featureModelSchema);