Page({
  data:{
 
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    var that = this
    that.setData({
      logo:options.logo,
      company:options.company,
      tag:options.tag,
      provinceName:options.provinceName,
      cityName:options.cityName,
      job:options.job,
      workingPayStr:options.workingPayStr,
      workingAgeStr:options.workingAgeStr,
      workingDegreeStr:options.workingDegreeStr,
      workingTypeStr:options.workingTypeStr
    })
   
    
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
      wx.setNavigationBarTitle({
      title: '详情',
    })
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
   
  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }
})