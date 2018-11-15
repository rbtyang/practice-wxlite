//app.js
App({
  globalData: {
    userInfo: null,
    contMoveToc: {
      start: {},
      end: {},
      isLeft: null,
      isTop: null
    },
  },

  onLaunch: function () {
    // var a = 10
    // var b = ~a
    // console.log(b)

    var a = 10
    var b = 20
    console.log((a+b, a-b, a*b, a/b));

    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  
  onContTocStart(event) {
    console.log(event);
    this.globalData.contMoveToc.start = event.changedTouches[0]
  },

  onContTocEnd(event) {
    console.log(event);
    this.globalData.contMoveToc.end = event.changedTouches[0]

    this.globalData.contMoveToc.isLeft = this.globalData.contMoveToc.end.clientX < this.globalData.contMoveToc.start.clientX
    this.globalData.contMoveToc.isTop = this.globalData.contMoveToc.end.clientY < this.globalData.contMoveToc.start.clientY

    wx.switchTab({
      url: (this.globalData.contMoveToc.isLeft != null && this.globalData.contMoveToc.isLeft) ? '/pages/logs/logs' : '/pages/index/index',
    })

    console.log(this.globalData.contMoveToc);
  }

})