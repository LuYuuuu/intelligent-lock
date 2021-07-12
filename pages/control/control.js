// pages/demo1/demo1.js
Page({
  data: {
    a:0,b:0,c:0,d:0,
    imgsrc_red:"/img/led-off.png",
    imgsrc_yellow:"/img/led-off.png",
    imgsrc_blue:"/img/led-off.png",
    imgsrc_green:"/img/led-off.png",
    door:"/img/close.png",
    ledcoclor:""
  },
  changeLed(color,ledcoclor){
    wx.request({
      url: 'https://api.heclouds.com/cmds?device_id=726320674',
      method:"POST",
      header:{
        "api-key":"6BDjHTJ3JKRO7ZsWtBIbgZGH2z8="
      },
      data:ledcoclor + ":" + color ,
      success(res){
        console.log("ok");
      }
    })
  },
  changeRed(e){
    var value = e.detail.value;
    var a = this.a;
    if(value == true){
      a=1;
      this.setData({
        a:1,
        imgsrc_red:"/img/red.png"
      })
    }else{
      a=0;
      this.setData({
        a:0,
        imgsrc_red:"/img/led-off.png"
      })
    }
    this.changeLed(a,"redled");
  },
  changeYellow(e){
    var value = e.detail.value;
    var b = this.b;
    if(value == true){
      b=1;
      this.setData({
        b:1,
        imgsrc_yellow:"/img/yellow.png"
      })
    }else{
      b=0;
      this.setData({
        b:0,
        imgsrc_yellow:"/img/led-off.png"
      })
    }
    this.changeLed(b,"yellowled");
  },
  changeBlue(e){
    var value = e.detail.value;
    var c = this.c;
    if(value == true){
      c=1;
      this.setData({
        c:1,
        imgsrc_blue:"/img/blue.png"
      })
    }else{
      c=0;
      this.setData({
        c:0,
        imgsrc_blue:"/img/led-off.png"
      })
    }
    this.changeLed(c,"blueled");
  },
  changeGreen(e){
    var value = e.detail.value;
    var d = this.d;
    if(value == true){
      d=1;
      this.setData({
        d:1,
        imgsrc_green:"/img/green.png"
      })
    }else{
      d=0;
      this.setData({
        d:0,
        imgsrc_green:"/img/led-off.png"
      })
    }
    this.changeLed(d,"greenled");
  },
  duo(e){
    var value = e.detail.value;
    var d = this.d;
    if(value == true){
      d=1;
      this.setData({
        d:1,
        door:"/img/open.png"
      })
    }else{
      d=0;
      this.setData({
        d:0,
        door:"/img/close.png"
      })
    }
    this.changeLed(d,"door");
  },
  //打开界面时先获取设备信息
  onLoad(){
    wx.request({
      url: 'https://api.heclouds.com/devices/726320674',
      header:{
        "api-key":"6BDjHTJ3JKRO7ZsWtBIbgZGH2z8="
      },
      data:{
        
      },
      success(res){
        console.log(res);
      }
    })
  }
})
