const express = require('express');
var router = express.Router();
var controller = require('../controllers/twitterController');

router.get('/search',controller.recent)
router.get('/:param', controller.oAuth);

module.exports = router;