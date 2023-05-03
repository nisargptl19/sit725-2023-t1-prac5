var express = require('express');
var router = express.Router();
let controller = require('../controller/controller');

// add new character
router.post('/api/add-character', (req, res) => {
    controller.addCharacter(req,res);
});

// fetch all the characters
router.get('/api/get-all-characters',(req,res) => {
    controller.fetchAllCharacters(req,res);
});

module.exports = router;