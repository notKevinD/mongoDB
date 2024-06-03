const express = require('express');
const Mahasiswa = require('../models/Mahasiswa');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const mahasiswa = await Mahasiswa.find();
        res.json(mahasiswa);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;