// 获取数据库的引用
const db = wx.cloud.database()

Page({
  data: {

  },
  onLoad: function () {
    
  },

  //提交表单添加进数据库
  btnsub(res){
    var {xingming,mima}=res.detail.value;

    if(xingming!=""&&mima!=""){
      db.collection('quanxian').add({
        data:{
          "姓名":xingming,
          "密码":mima
        }
      })
      wx.showToast({
        title: '授权成功',
        icon: 'success',
        duration: 3000
      })
    }else{
      wx.showToast({
        title: '请输入完整信息',
        icon: 'error',
        duration: 3000
      })
    }
  },


})