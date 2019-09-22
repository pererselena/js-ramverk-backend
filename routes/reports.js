'use strict';

var express = require('express');
var router = express.Router();
var reports = require("../models/reports.js");


router.get('/', (req, res) => reports.getAllReports(res));
router.post('/', (req, res) => reports.createReport(res, req.body));
router.put('/', (req, res) => reports.updateReport(res, req.body));
router.delete('/', (req, res) => reports.deleteReport(res, req.body));


module.exports = router;
