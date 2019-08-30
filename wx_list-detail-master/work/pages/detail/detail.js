// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:[],
    name2:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    let {id}=options
    wx.request({
      url: `http://localhost:3000/api/detail?id=${id}`,
      success:(res)=>{
        // console.log(res)
        if(res.data.code==200){
          let data = res.data.delList
          console.log(data.name)
          this.setData({
            name2:data.name
          })
        }
      }
    })
    this.setData({
      name:options.name
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})