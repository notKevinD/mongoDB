const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    return res.send('Hello Worlds');
});

router.get('/hello', (req, res) => {
    return res.send(`Hello ${req.query.name ?? 'World'}`);
});

module.exports = router;