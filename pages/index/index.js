const db = wx.cloud.database()
Page({

  data: {
    userID:"",
    lianjie:"/pages/user/user",
    opensign:0
  },

  // 通过云函数获取用户appid
  onLoad() {
    wx.cloud.callFunction({
      name: 'add',
      complete: res => {
        this.setData({
          userID:res.result.APPID
        })
      }
    })
  },

  //点击按钮后识别权限并进入相对应的功能界面
  tiaozhuan:function () {
    var userID = this.data.userID;
    db.collection('managerID').where({
      ID:userID,
      quanxian:1
    }).get({
      success:res=>{
        if(res.data[0].quanxian==1){
          this.setData({
            lianjie:"/pages/manager/manager"
          })
        }
        wx.reLaunch({
          url: this.data.lianjie,
        })
      }
    })
    wx.reLaunch({
      url: this.data.lianjie,
    })
  },

  up(){
    wx.navigateTo({
      url: '/pages/up/up',
    })
  }
})
