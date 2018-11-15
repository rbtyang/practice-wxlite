//logs.js

//获取应用实例
const app = getApp()
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },

  //滑动切换：全局用法
  onContTocStart(event) {
    wx.showToast({
      title: 'logs touch start',
    })
    console.log(event)
    app.onContTocStart(event)
  },
  onContTocEnd(event) {
    console.log(event)
    app.onContTocEnd(event)
  },

})
