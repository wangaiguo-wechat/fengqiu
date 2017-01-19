var http = require('../../utils/util')
var url = 'https://api.ufengqiu.com/Api/Model/lists'
Page({
  data: {
    modelList:[]
  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载
    var that = this
    // http.request(url, 1, function (dataJson) {
    //   console.log(dataJson.data.count)
    //   that.setDate({
    //     modelist: dataJson.data

    //   })
    //   console.log(dataJson.data)
    // }, function (reason) {
    //   console.log(reason)
    //   that.setData({

    //   })
    // }
    // )
    wx.showNavigationBarLoading(),
    wx.request({
      
      url: 'https://api.ufengqiu.com/Api/Model/lists',
      // data: {
      //   page:1,
      //   pageSize:20
      // },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      //header: {'Accept': 'application/json'}, // 设置请求的 header
      success: function(res){
        console.log('5555555555555555555555555555555555555555555')
        console.log(res.data)
        wx.hideNavigationBarLoading()
        that.setData({
          modelList:res.data
          
        })
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  onReady: function () {
    // 生命周期函数--监听页面初次渲染完成

  },
  onShow: function () {
    // 生命周期函数--监听页面显示

  },
  onHide: function () {
    // 生命周期函数--监听页面隐藏

  },
  onUnload: function () {
    // 生命周期函数--监听页面卸载

  },
  onPullDownRefresh: function () {
    // 页面相关事件处理函数--监听用户下拉动作

  },
  onReachBottom: function () {
    // 页面上拉触底事件的处理函数

  },
  onShareAppMessage: function () {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }
})