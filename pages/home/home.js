var http = require('../../utils/util')
var url = 'https://api.ufengqiu.com/Api/Job/lists'
Page({
  data: {
    page: 1,
    homeList: []
  },
  onLoad: function (options) {
    var that = this
    wx.showNavigationBarLoading()
    wx.request({
      url: 'https://api.ufengqiu.com/Api/Job/lists',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: { 'Accept': 'application/json' }, // 设置请求的 header
      success: function (res) {
        that.setData({
          homeList: res.data.data
        })
        wx.hideNavigationBarLoading()
      },
      fail: function () {
        wx.hideNavigationBarLoading()
      }
    })
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
  },
  loadMore: function () {
    var that = this
    http.request(url, ++this.data.page, function (dataJson) {
      that.setData({
        homeList: that.data.homeList.concat(dataJson.data)
      })
      wx.hideNavigationBarLoading()
    }, function (reason) {
    })
  }
})