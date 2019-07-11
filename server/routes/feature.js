const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const featureModel = require('../models/featureModel');

router.post('/',function(req,res){
    const newFeature = new featureModel({
        _id : mongoose.Schema.Types.ObjectId,
        request : req.body.request,
        description : req.body.description,
        voters : req.body.voters,
        upvoters : req.body.upvoters,
        author : req.body.author,
        status : req.body.status,
        priority : req.body.priority,
        createdat : req.body.createdat,
        via : req.body.via,
        slackmessage : req.body.slackmessage
    });

    newFeature.save(function(err,newEntry){
        if(err)
        {
            res.json(err).status(400);
        }
        else
        {
            res.json(newEntry).status(201);
        }
    })
});

router.get('/',function(req,res){

    newFeature.find()
    .exec()
    .then(feature =>{
        res.json(feature).status(200);
    });
});

module.exports = router;