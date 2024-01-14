const express = require('express');
const router = express.Router(); // Use Router instead of creating a new app instance
const User = require('../models/userModel');

// create
router.post('/', async (req, res) => {

    // var name = req.body.name
    const { name, email, age } = req.body;

    try {
        const userAdded = await User.create({
            name: name,   //backend : frontend
            email: email,
            age: age,
        });

        res.status(201).json(userAdded);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
});

// get
router.get('/', async (req, res) => {
    try {
        const showAll = await User.find();
        res.status(200).json(showAll);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
