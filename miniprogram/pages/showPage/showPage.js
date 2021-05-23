// pages/showPage/showPage.js

var code = `// 云函数入口函数
exports.main = async (event, context) => {
  console.log(event)
  console.log(context)
  return {
    sum: event.a + event.b
  }
}`

var app = getApp();

Page({
  data: {
    result: '',
    canIUseClipboard: wx.canIUse('setClipboardData'),
  },

  onLoad: function (options) {
    var birthday = app.globalData.date

    var d = new Date()
    var today = ''
    today += d.getFullYear() + "-"
    var month = d.getMonth() + 1
    if(month < 10) {
      today+= '0'
    } 
    today += month + "-"
    today += d.getDate()
    
    today = Date.parse(today)
    console.log(today)
    birthday = Date.parse(birthday)
    console.log(birthday)

    var averageLifeSpan = 77
    var averageLifeSpanDays = averageLifeSpan * 365

    // 计算最终的可以活的天数，以及可以吃饭的次数
    var live_ms = Math.abs(today - birthday)
    var live_days = Math.floor(live_ms / (24 * 3600 * 1000))
    var remainingDays = Math.abs(averageLifeSpanDays - live_days)

    var remainingLiveDays = remainingDays
    var remainingEatFoodTimes = remainingDays * 3
    var remainingWangZhe = Math.round(remainingDays / 2)
    var remainingWeekend = Math.round(remainingDays / 7)
    var remainingMakeLove = Math.round(remainingDays / 3)
    var remainingHoliyday = Math.round(remainingDays / 365 * 3)

    var live_text = "看 " + remainingLiveDays + " 次日出"
    var eat_text = "吃 " + remainingEatFoodTimes + " 顿泡馍"
    var wangzhe_text = "打 " + remainingWangZhe + " 局王者"
    var weekend_text = "过 " + remainingWeekend + " 次周末"
    var makelove_text = "做 " + remainingMakeLove + " 次爱"
    var holiyday_text = "享" + remainingHoliyday + " 次长假"

    this.setData({
      live_text: live_text,
      eat_text: eat_text,
      wangzhe_text: wangzhe_text,
      weekend_text: weekend_text,
      makelove_text: makelove_text,
      holiyday_text: holiyday_text,
    })
    },

    wait: function (ms){
      var start = new Date().getTime();
      var end = start;
      while(end < start + ms) {
        end = new Date().getTime();
     }
   }
})