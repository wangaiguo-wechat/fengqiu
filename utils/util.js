function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}


function request( url, page, success, fail ) {
  if( typeof success != 'function' || typeof fail != 'function' ) {
    return
  }
  var app = getApp()
  wx.showNavigationBarLoading()
  wx.request( {
    url: url,
    data: {
      key: app.globalData.appkey,
      page: page,
      pagesize: 20
    },
    success: function( res ) {
      if( res.data.code == 200 ) {
        success( res.data )
      } else {
        fail( res.data.reason )
      }
      wx.hideNavigationBarLoading()
    },
    fail: function() {
      fail( '网络错误' )
      wx.hideNavigationBarLoading()
    }

  })
}

module.exports = {
  request: request
}
