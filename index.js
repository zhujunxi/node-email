const schedule = require('node-schedule');

const getWeather = require("./js/getWeather")
const generateHtml = require("./js/generateHtml")
const sendMail = require("./js/sendMail")

var rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [0, new schedule.Range(0, 6)];
rule.hour = 16;
rule.minute = 02;

console.log('NodeMail: 开始等待目标时刻...')
let j = schedule.scheduleJob(rule, function () {
    console.log("执行任务");
    getWeather().then(res => {
        sendMail(generateHtml(res))
    })
})