'use strict';

const db = require("../db/database.js");

const reports = {
    getReport: function (res, weekNr, status=200) {
        var sql = "SELECT * FROM reports WHERE week = ?";
        db.get(sql, weekNr, (err, report) => {
            if (err) {
                return res.status(500).json({
                    errors: {
                        status: 500,
                        title: "Database error",
                        detail: err.message
                    }
                });
            }
            return res.status(status).json({
                data: report
            });
        });
    },
    createReport: function (res, body) {
        db.run("INSERT INTO reports (week, report) VALUES (?, ?)",
        body.week,
        body.report,
        function(err) {
            if (err) {
                res.status(500).json({
                    errors: {
                        status: 500,
                        title: "Database error",
                        detail: err.message
                    }
                });
                return;
            }
            return res.status("201").json({
                data: "created"
            });
        });
    }
};

module.exports = reports;
