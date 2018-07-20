var express = require('express');
var router = express.Router();
var Chat = require('../model/chatModel');

router.route('/')
    //Get all messages
    .get(function (req, res) {

        Chat.find(function (err, chat) {
            if (err) {
                return res.send(err);
            }
        res.json(chat);
        });

    })
    //Add a new message to the collection
    .post(function (req, res) {
        var chat = new Chat(req.body);

        chat.save(function (err, chat) {
            if (err) {
                return res.send(err);
            }
        return res.send('Successfuly added message ' + chat.id + '.');
        });
    });

router.route('/:id')
    //Get a single message
    .get(function (req, res) {
        Chat.findOne({_id: req.params.id}, function (err, chat) {
            if (err) {
                return res.send(err);
            }
        res.json(chat);
        });
    })
    //Update an existing message
    .put(function (req, res) {
        Chat.findOne({_id: req.params.id}, function (err, chat) {
            if (err) {
                return res.send(err);
            }
            //Update the message with the received fields
            for (p in req.body) {
                chat[p] = req.body[p];
            }
            //save the message
            chat.save(function (err) {
                if (err) {
                    return res.send(err);
                }
                res.json({message: 'Message ' + req.params.id + ' successfuly updated'});
            });
        });
    })
    //Remove a user
    .delete(function (req, res) {
        Chat.remove({_id: req.params.id}, function (err) {
            if (err) {
                return res.send(err);
            }
            res.json({message: 'Message ' + req.params.id + ' deleted'});
        });
    });
    
module.exports = router;
