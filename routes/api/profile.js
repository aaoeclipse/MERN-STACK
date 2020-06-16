const express = require('express');
const router = express.Router();

// @router      GET api/profile
// @desc        test route
// @access      Public
router.get('/', (req, res) => res.send('Profile route'));

module.exports = router;
