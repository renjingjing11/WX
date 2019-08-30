// components/nav/nav.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    navTitle:Array,
    navId:Number
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleNav(e){
      console.log(e)
      let { tempindex } = e.currentTarget.dataset
      this.triggerEvent("HandleClickNavFromComponent", {tempindex})
    }
  }
})
