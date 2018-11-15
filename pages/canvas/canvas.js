//logs.js

//获取应用实例
const app = getApp()

Page({
  data: {
    x: 0,
    y: 0,
    hidden: true
  },

  onLoad: function () {
  },

  onCanvasStart(e) {
    this.setData({
      hidden: false,
      x: e.touches[0].x,
      y: e.touches[0].y
    })
  },
  onCanvasMove(e) {
    this.setData({
      x: e.touches[0].x,
      y: e.touches[0].y
    })
  },
  onCanvasEnd(e) {
    this.setData({
      hidden: true
    })
  },

})
