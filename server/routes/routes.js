const express = require('express')
const router = express.Router()
const bcrypt = require("bcrypt");
const objectId = require("mongodb").ObjectID;
const jwt = require("jsonwebtoken")

const {
    blog,
    getBlogMessage
} = require("../utils/Auth");

router.put('/EditBlogMessage/:id',function(req,res){
    if(!req.body) return res.sendStatus(400);
    const id = req.params.id;
    console.log(id)
    const text = req.body.message; 
    const collection = req.app.locals.collection;
    collection.findOneAndUpdate({_id: id}, { $set: {text: text}},
         {returnOriginal: false },function(err, result){
        if(err) return console.log(err);     
        const user = result.value;
        
        res.sendStatus(200);
    });

    
})

router.delete('/blog-message/:id',function(req,res){
    const id =new objectId(req.params.id);
    const collection = req.app.locals.collection;
    collection.findOneAndDelete({_id: id}, function(err, result){         
        if(err) return console.log(err);    
        let user = result.value;
        res.send(user);
    });
})
router.post('/blog-message',async (req,res)=>{
    await blog(req,"blog", res);
})

router.get('/getBlogMessage',async (req,res)=>{
    await getBlogMessage(req,"blog", res);
})
module.exports = router