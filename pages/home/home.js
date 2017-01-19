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
          homeList: res.data

        })
        wx.hideNavigationBarLoading()
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
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
    wx.showNavigationBarLoading()
    var that = this
    http.request(url, ++this.data.page, function (dataJson) {
      that.setDate({
        homeList: that.data.homeList.concat(dataJson.result.data)
      })
    }), function (reason) {
      that.setData({

      })
    }
  }
})