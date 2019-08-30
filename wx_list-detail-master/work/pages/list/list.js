// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page: 1,
    limit: 10,
    list:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      //调用获取列表函数 
      this.getList()
  },

  // 获取列表
  getList(){
    let {page,limit}=this.data;
    wx.request({
      url: 'http://localhost:3000/api/list',
      data:{
        page,
        limit
      },
      success: (res) => {
        console.log(res)
        if (res.data.code == 200) {
          let {list}=this.data
          list=list.concat(res.data.list)
          this.setData({
            list
          })
        }
      }
    })
  },

  // bscroll 事件
  handleScroll(e){
    console.log(e)
    //触发滚动事件 滚动到这条数据的底部 page++
    let {page}=this.data
    page=page+1
    console.log(page)
    this.setData({
      page
    },()=>{
      this.getList()
    })
  },

  // 跳转详情的数据
  handleDetail(e){
    //如若写点击事件 必须在点击的标签写上data-id="{{}}"
    // console.log(e) //e.currentTarget.dataset
    let { id } = e.currentTarget.dataset
    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}`,
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