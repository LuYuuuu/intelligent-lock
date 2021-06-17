Page({
  data: {

  },
  
  clickbtn1:function(){
    wx.reLaunch({
      url: '../manager/manager'
    })
  },
  clickbtn2:function(){
    wx.reLaunch({
      url: '../user/user',
    })
  },

  onLoad() {
  }
})
