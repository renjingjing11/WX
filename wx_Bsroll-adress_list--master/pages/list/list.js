// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 全部数据
    list:[],
    // 每天滚动列表的高度
    listItemTops:[],
    // 添加高亮
    currentIndex:0,
    // 点击nav
    currentKey:"A"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://www.easy-mock.com/mock/5ceb8bac32cfe337f96fe748/example/car',
      success:(res)=>{
        console.log(res.data.data.items)
        this.setData({
          list:res.data.data.items
        },()=>{
          const query=wx.createSelectorQuery();
          query.selectAll('.list_title').boundingClientRect((res) => {
            // console.log(res)//可以获取到每条列表高度
            this.setData({
              listItemTops: res.map(item => item.top)
            })
          }).exec()
        })
      }
    })
  },

  // 列表滚动事件
  handleScroll(e){
    console.log(e)
    let scrollTop = e.detail.scrollTop;
    let {listItemTops}=this.data
    console.log(listItemTops)
    for (var i = 0; i < listItemTops.length;i++){
      if(scrollTop>=listItemTops[i]){
        this.setData({
          currentIndex:i
        })
      }
    }
  },


  // 点击导航nav事件
  handleNav(e){
    console.log(e)
    let { key } = e.currentTarget.dataset
    this.setData({
      currentKey:key
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