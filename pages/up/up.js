// 获取数据库的引用
const db = wx.cloud.database()

Page({
  data: {
    userID:""
  },
  onLoad: function () {
    wx.cloud.callFunction({
      name: 'add',
      complete: res => {
        console.log(res)
        this.setData({
          userID:res.result.APPID
        })
      }
    })
  },

  //提交表单添加进数据库
  btnsub(res){
    var {xingming,mima}=res.detail.value;
    var userID = this.data.userID;
    db.collection('quanxian').where({
      "姓名":xingming,
      "密码":mima
    }).get({
      success:res=>{
        console.log(res)
        if(res.data.length!=0){

          db.collection('managerID').add({
            data:{
              ID:userID,
              name:xingming,
              quanxian:1
            }
          })

          wx.showToast({
            title: '升级权限成功',
            icon: 'sucess',
            duration: 3000
          })
        }else{
          wx.showToast({
            title: '密码错误',
            icon: 'error',
            duration: 3000
          })
        }
      }
    })

  },


})