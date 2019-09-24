const axios = require("axios");
const qs = require("qs")

// 引入聚合数据(juhe.cn)的免费API
const config = {
    url: "http://apis.juhe.cn/simpleWeather/query",
    city: "深圳",
    key: "a642a2dbdc46e629058fd4e8f4e006a0"
}

module.exports = function demo() {
    return new Promise(function (resolve, reject) {
        axios({
            method: "get",
            url: config.url + "?" + qs.stringify({
                city: config.city,
                key: config.key
            })
        }).then(function (res) {
            resolve(res.data.result)
        }).catch(function (err) {
            reject(err)
        })
    })
}