//index.js

//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World HH',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    // contMoveToc: {
    //   start: {},
    //   end: {},
    //   isLeft: null,
    //   isTop: null
    // },
  },

  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

    console.log(this.data);
  },

  //原生：点击本页的 tab
  onTabItemTap(item) {
    console.log(item);
  },

  getUserInfo: function(e) {
    console.log(e);
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  //滑动切换：局部用法
  // onContTocStart(event) {
  //   console.log(event);
  //   this.setData({
  //     "contMoveToc.start": event.changedTouches[0]
  //   })

  //   // var contMoveToc = this.data.contMoveToc
  //   // contMoveToc.start = event.touches[0]
  //   // this.setData({ contMoveToc: contMoveToc })
  // },
  // onContTocEnd(event) {
  //   console.log(event);
  //   this.setData({
  //     "contMoveToc.end": event.changedTouches[0]
  //   })

  //   // var contMoveToc = this.data.contMoveToc
  //   // contMoveToc.end = event.touches[0]
  //   // this.setData({ contMoveToc: contMoveToc })

  //   this.setData({
  //     "contMoveToc.isLeft": this.data.contMoveToc.end.clientX < this.data.contMoveToc.start.clientX,
  //     "contMoveToc.isTop": this.data.contMoveToc.end.clientY < this.data.contMoveToc.start.clientY
  //   })

  //   if (this.data.contMoveToc.isLeft) {
  //     wx.switchTab({
  //       url: 'pages/logs/logs',
  //     })
  //   }

  //   console.log(this.data.contMoveToc);
  // },

  //滑动切换：全局用法
  onContTocStart(event) {
    wx.showToast({
      title: 'index touch start',
    })
    app.onContTocStart(event)
  },
  onContTocEnd(event) {
    app.onContTocEnd(event)
  },

  //事件处理函数
  goLogTap: event => {
    console.log(event);
    wx.switchTab({
      url: '../logs/logs'
    })
  },

  //点击刷新按钮
  refreshPage: () => {

    wx.startPullDownRefresh()

    wx.showLoading({
      title: '加载中',
    })

    // wx.showToast({
    //   title: '成功',
    //   icon: 'success',
    //   duration: 2000,
    //   complete: res => {
    //     console.log(res);
    //   }
    // })

    //提示完后隐藏fresh
    setTimeout(function() {
      wx.hideLoading()
      wx.stopPullDownRefresh()
    }, 2000)
  },
  
})