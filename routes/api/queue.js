const express = require("express");
const router = express.Router();

// Load Queue model
const Queue = require("../../models/Queue");

// @route POST api/queue/queue
// @desc Queue user
// @access Public
router.post("/queue", (req, res) => {
    Queue.findOne({ email: req.body.email }).then(queue => {
        if (queue) {
            return res.status(400).json({ email: "Email already in queue" });
        } else {
            const newUser = new Queue({
                email: req.body.email
            });
            newUser
                .save()
                .then(queue => res.json(queue))
                .catch(err => console.log(err));
        }
    });
});

module.exports = router;