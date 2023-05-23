// const { Router } = require('express');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json([
        {
            user: 'Andrew',
            settings: 'master'
        }
    ])
})

module.exports = router;