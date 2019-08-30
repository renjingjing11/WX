const Mock = require("mockjs")

const list = Mock.mock({
    'detail|500': [{
        name: '@cname',
        'rate|1-5': 1,
        image: '@image(300X300)',
        'price|300-1500': 1,
        title: '@ctitle',
        address: Mock.Random.city(true),
        email: '@email'
    }]
})

module.exports = list;