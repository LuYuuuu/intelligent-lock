// pages/manager/manager.js
Page({
  btn1:function () {
    wx.navigateTo({
      url: '/pages/zhiwen/zhiwen',
    })
  },
  btn2:function () {
    wx.navigateTo({
      url:'/pages/erweima/erweima'
    })
  },
  btn3:function () {
    wx.navigateTo({
      url: '/pages/control/control',
    })
  },
  btn4:function () {
    wx.navigateTo({
      url: '/pages/diary/diary',
    })
  },
  btn5:function () {
    wx.navigateTo({
      url: '/pages/give/give',
    })
  },
  btn6:function () {
    wx.navigateTo({
      url: '/pages/give2/give2',
    })
  }
})