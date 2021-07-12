// pages/zhiwen/zhiwen.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  btn1(){
    wx.startSoterAuthentication({
      requestAuthModes: ['fingerPrint'],
      challenge: '123456',
      authContent: '请用指纹解锁',
      success(res) {
          wx.showToast({
            title: '解锁成功',
            icon: 'success',
            duration: 3000
          })
          wx.request({
            url: 'https://api.heclouds.com/cmds?device_id=726320674',
            method:"POST",
            header:{
              "api-key":"6BDjHTJ3JKRO7ZsWtBIbgZGH2z8="
            },
            data:{
              door:1
            }
          })
      }
   })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})