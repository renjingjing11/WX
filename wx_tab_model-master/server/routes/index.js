var express = require('express');
var router = express.Router();
var { wxData } = require("../data.js");

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get("/api/list/", (req, res) => {
    res.send({
        code: 200,
        data: wxData
    })
})
module.exports = router;