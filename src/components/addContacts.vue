<template>
  <div class="addContacts">
    <form class="am-form am-form-horizontal">
      <div class="am-form-group  am-container">
        <label for="doc-ipt-3" class="am-u-sm-2 am-form-label">姓名<span>*</span></label>
        <div class="am-u-sm-10">
          <input type="text" id="doc-ipt-3" placeholder="输入联系人姓名（必填）">
        </div>
      </div>
      <div class="am-form-group am-container">
        <label for="doc-ipt-pwd-2" class="am-u-sm-2 am-form-label">电话</label>
        <div class="am-u-sm-10">
          <input type="password" id="doc-ipt-pwd-2" placeholder="请输入手机号或固定号码（必填）">
        </div>
      </div>
      <div class="am-form-group am-container">
        <label for="doc-ipt-pwd-2" class="am-u-sm-2 am-form-label">公司</label>
        <div class="am-u-sm-10">
          <input type="password" id="doc-ipt-pwd-2" placeholder="请输入手机号或固定号码（必填）">
        </div>
      </div>
      <div class="am-form-group am-container">
        <label for="doc-ipt-pwd-2" class="am-u-sm-2 am-form-label">职位</label>
        <div class="am-u-sm-10">
          <input type="password" id="doc-ipt-pwd-2" placeholder="请输入手机号或固定号码（必填）">
        </div>
      </div>
      <div class="am-form-group am-container">
        <label for="doc-ipt-pwd-2" class="am-u-sm-2 am-form-label">地址</label>
        <div class="am-u-sm-10">
          <input type="password" id="doc-ipt-pwd-2" placeholder="请输入手机号或固定号码（必填）">
        </div>
      </div>
      <div class="am-form-group am-container">
        <label for="doc-ipt-pwd-2" class="am-u-sm-2 am-form-label">邮箱</label>
        <div class="am-u-sm-10">
          <input type="password" id="doc-ipt-pwd-2" placeholder="请输入手机号或固定号码（必填）">
        </div>
      </div>
      <div class="am-form-group am-container">
        <label for="doc-ipt-pwd-2" class="am-u-sm-2 am-form-label">备注</label>
        <div class="am-u-sm-10">
          <input type="text" id="doc-ipt-pwd-2" placeholder="请输入手机号或固定号码（必填）">
        </div>
      </div>

      <br/>
      
      <div class="am-form-group am-container">
        <label for="doc-ipt-pwd-2" class="am-u-sm-2 am-form-label">类型</label>
        <div class="am-u-sm-10">
          <select name="" id="">
            <option value="1">请选择</option>
            <option value="1">1</option>
            <option value="1">2</option>
          </select>
        </div>
      </div>

      <div class="am-form-group am-container">
        <label for="doc-ipt-pwd-2" class="am-u-sm-2 am-form-label">级别</label>
        <div class="am-u-sm-10">
          <select name="" id="">
            <option value="1">请选择</option>
            <option value="1">1</option>
            <option value="1">2</option>
          </select>
        </div>
      </div>

      <div class="am-form-group am-container">
        <label for="doc-ipt-pwd-2" class="am-u-sm-2 am-form-label">状态</label>
        <div class="am-u-sm-10">
          <select name="" id="">
            <option value="1">请选择</option>
            <option value="1">1</option>
            <option value="1">2</option>
          </select>
        </div>
      </div>


      <div class="am-form-group am-container">
        <div class="am-u-sm-10 am-u-sm-offset-2">
          <button type="submit" class="am-btn am-btn-default">提交登入</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'addContacts',
  data () {
    return {}
  },
  created () {
    // 隐藏tabbar
    this.$store.state.tabbar.show = false
    // 设置钉钉相关内容
    this.dd.ready(() => {
      this.dd.biz.navigation.setRight({
        show: false
      })
      this.dd.biz.navigation.setTitle({
        title: '添加客户'
      })
    })
  }
}
</script>

<style>
label{font-weight: normal;}
.addContacts .am-form{padding-top: 10px;}
.addContacts .am-form-group{background: #fff; line-height: 45px; margin-bottom: 0;border-bottom: 1px solid #f1f1f1;}
.addContacts .am-form-group input{border: none; margin-top: 5px;}
.addContacts .am-form-group label{padding: 0;}
.addContacts .am-form-group label span{color: #ff5a09;margin-left: 5px;}
input::-webkit-datetime-edit-fields-wrapper{background-color:red;} 
</style>
