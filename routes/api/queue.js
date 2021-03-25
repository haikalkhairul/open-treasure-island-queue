const express = require("express");
const router = express.Router();

// Load Queue model
const Queue = require("../../models/Queue");

// @route POST api/queue/queue
// @desc Queue user
// @access Public
router.post("/queue", (req, res) => {
    Queue.findOne({ id: req.body.id }).then(queue => {
        if (queue) {
            return res.status(400).json({ id: "User already in queue" });
        } else {
            const newUser = new Queue({
                id: req.body.id
            });
            newUser
                .save()
                .then(queue => res.json(queue))
                .catch(err => console.log(err));
        }
    });
});

module.exports = router;