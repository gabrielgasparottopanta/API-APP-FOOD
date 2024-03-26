const express = require('express');
const router = express.Router();

router.get('/' , (req, res) => console.log('O router está funcionando'));

module.exports = router;