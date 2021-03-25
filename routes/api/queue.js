const express = require("express");
const router = express.Router();

// Load Queue model
const Queue = require("../../models/Queue");

// @route POST api/queue
// @desc Queue user
// @access Public
router.post("/queue", (req, res) => {
    Queue.findOne({ email: req.body.email }).then(user => {
        if (user) {
            return res.status(400).json({ email: "Email already in queue" });
        } else {
            const newUser = new User({
                email: req.body.email
            });
            newUser
                .save()
                .then(user => res.json(user))
                .catch(err => console.log(err));
        }
    });
});