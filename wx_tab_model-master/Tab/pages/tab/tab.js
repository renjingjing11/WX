// pages/tab/tab.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //标题
    navTitle:[],
    // 列表内容
    navData:[],
    // 点击内容列表
    currentList: [],
    // id
    navId: 0
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 请求后端接口
    wx.request({
        url:'http://localhost:3000/api/list/',
        success:(res)=> {
          let data=res.data.data
          if(res.data.code==200){
            this.setData({
              navTitle: data.navtitle,
              navData: data.navdata,
              currentList:data.navdata[0]
            })
            console.log(this.data.navTitle)
            // console.log(this.data.navData, "=====内容")
            // console.log(this.data.currentList, "=====点击内容")
          }
        }
    })
  },
  // 组件点击事件
  handleClickNavFromComponent(e){
    console.log(e.detail)
    let {tempindex}=e.detail
    this.setData({
      navId: tempindex,
      currentList: this.data.navData[tempindex]
    })
    console.log(this.data.navData[tempindex])
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