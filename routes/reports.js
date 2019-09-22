'use strict';

var express = require('express');
var router = express.Router();
var reports = require("../models/reports.js");


router.get('/', function(req, res, next) {
    const data = {
        data: {
            msg: "reports"
        }
    };

    res.json(data);
});
router.post('/', (req, res) => reports.createReport(res, req.body));
router.put('/', (req, res) => reports.updateReport(res, req.body));
router.delete('/', (req, res) => reports.deleteReport(res, req.body));


module.exports = router;
