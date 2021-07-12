// pages/diary/diary.js
Page({
  data: {
    name:'',
    date:'',
    zhi:"",
  },
  onLoad(){
    var name = this.name;
    var date = this.date;
    var zhi = this.zhi;
    var that = this;
    wx.request({
      url: "https://api.heclouds.com/devices/726320674/datapoints",
      method:"GET",
      header:{
        "api-key":"6BDjHTJ3JKRO7ZsWtBIbgZGH2z8="
      },
      data:{
      },
      success(res){
        that.setData({
          "name" : res.data.data.datastreams
        })
      }
    })
  }
})