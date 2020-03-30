const express = require('express');
const router = express.Router();

var Contact = require('../models/contacts');
var User = require('../models/users');
//fetch data
router.get('/contacts', (req, res, next) => {
    Contact.find(function(err, contacts) {
        res.json(contacts)
    })
});

router.get('/listusers', (req, res, next) => {
    User.find(function(err, users) {
        res.json(users)
    })
});

router.get('/login/:username', (req, res, next) => {
    User.find({ username: req.params.username },function(err, users) {
        res.json(users)
    })
});

router.post('/signup', (req, res, next) => {
    if(req.body.role == "ADMIN"){
        var role = "ADMIN";
    }
    else {
        var role = "USER";
    }
    let newUser = new User({
        username : req.body.username,
        password: req.body.password,
        role : role
    });

    newUser.save((err, User) => {
        if (err) {
            res.json({message: `Failed to add User`});
        }
        else {
            res.json({message: `Successfully added the User`});
        }
    });
});

//add data
router.post('/contact', (req, res, next) => {
    let newContact = new Contact({
        first_name : req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone
    });
    newContact.save((err, Contact) => {
        if (err) {
            res.json({message: `Failed to add contact`});
        }
        else {
            res.json({message: `Successfully added the contact`});
        }
    });
});

//delete contact
router.delete('/contact/:id', (req, res, next) => {
    Contact.remove({_id: req.params.id}, (err, result)=>{
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    });
});

router.delete('/user/:id', (req, res, next) => {
    User.remove({_id: req.params.id}, (err, result)=>{
        console.log(req.params.id);
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    });
});

router.post('/updateuser', (req, res, next) => {
    User.updateOne({_id: req.body._id}, {role : req.body.role}, (err, result)=>{
        console.log(req.body._id);
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    });
});

module.exports = router;