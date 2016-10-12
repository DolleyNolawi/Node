const express = require('express');
const fs = require('fs')
const util = require('util');
const router = express.Router();
const mycrypt = require("./../utils/info");


router.route("/").get(function (req, res) {
    const db = req.db;
    const collection = db.get("lab1");

    collection.findOne({
        message: "ba12e76147f0f251b3a2975f7acaf446a86be1b4e2a67a5d51d62f7bfbed5c03"
    }, function (err, doc) {
        const encrypted = doc.message
        console.log(encrypted)
        const deenctrypted = mycrypt.decrypt(encrypted);
        console.log(deenctrypted)
        res.send(deenctrypted)
    });

})

module.exports = router;