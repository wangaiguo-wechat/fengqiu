var http = require('../../utils/util')
var url = 'https://api.ufengqiu.com/Api/Model/lists'
Page({
  data: {
    modelList: [],
    page:1
  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载
    var that = this
    http.request(url, 1, function (dataJson) {
      console.log(dataJson.data.count)
      that.setData({
        modelList: dataJson.data
      })
      console.log(dataJson.data)
    }, function (reason) {
      console.log(reason)
      that.setData({

      })
    }
    )
  },
  onShareAppMessage: function () {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  },
  loadMore:function(){
    var that=this
    http.request(url,++this.data.page, function(dataJson){
      that.setData({
        modelList:that.data.modelList.concat(dataJson.data)
      })
    },function(reason){
    })
  }
})