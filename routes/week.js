'use strict';

var express = require('express');
var router = express.Router();

var reports = require("../models/reports.js");

router.get('/:week_nr', (req, res) => reports.getReport(res, req.params.week_nr));

module.exports = router;
