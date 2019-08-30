var express = require('express');
var router = express.Router();
var list = require("../mock/mock.js");

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});


// 全部数据列表
router.get("/api/list", (req, res) => {

    //从前端get请求传来的page,limit 
    // console.log(req.query) //{page:1,limit:10}
    let { page, limit } = req.query;

    let startIndex = (page - 1) * limit; //开始截取数据的位置
    let endIndex = startIndex + (limit - 0); //结束截取数据的位置

    // console.log(page, limit) //1,10
    // console.log(startIndex, endIndex) //0,10

    res.send({
        code: 200,
        message: "列表",
        //splice会改变原数组(出现的bug:滑动第二次的数组为空) slice不会改变原数组
        list: list.detail.slice(startIndex, endIndex)
    })

})

// 详情数据列表
router.get("/api/detail", (req, res) => {
    // get=query post=bodyParser
    let { id } = req.query;
    res.send({
        code: 200,
        message: "详情",
        delList: list.detail[id],
    })
})

module.exports = router;