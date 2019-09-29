'use strict';

var express = require('express');
var router = express.Router();

const auth = require("../models/auth.js");


router.post('/login', (req, res) => auth.login(res, req.body));
router.post('/register', (req, res) => auth.register(res, req.body));

module.exports = router;
