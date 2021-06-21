const express = require('express')
const router = express.Router()
const bcrypt = require("bcrypt");
const objectId = require("mongodb").ObjectID;
const jwt = require("jsonwebtoken");
const passport = require("passport");



const blog = async (request, role, response) => {
  const collection = request.app.locals.collection;
    const data = {
        role:role,
        message:request.body.message,
        date:new Date().toLocaleString('uk-UA')
        
    }
    collection.insertOne(data,function (err,result){
      if(err){
        console.log(err);
        response.sendStatus(500);
      }
      response.sendStatus(200)
    });
};

const getBlogMessage = async (req, role, res) => {
  const collection = req.app.locals.collection;
  collection.find({role:role},{ _id: 0 }).toArray()
  .then(message => {
      res.send({
        message
      })
  });
}
module.exports = {
  blog,
  getBlogMessage
};
