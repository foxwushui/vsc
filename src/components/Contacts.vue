<<template>
  <div class='contacts'>    
    <!-- navbar -->
    <mt-navbar v-model='selected'>
      <mt-tab-item id='my'>我负责的</mt-tab-item>
      <mt-tab-item id='branch'>我下属的</mt-tab-item>
    </mt-navbar>
    <!-- container -->
    <mt-tab-container v-model='selected'>
      <mt-tab-container-item id='my'>
        <!-- search -->
        <p>搜索</p>
        <!-- total -->
        <p>共1人</p>
        <div class="cell">
          <div class="cell-icon left"><span>陈斯达克</span></div>
          <div class="cell-title left">
            <p>陈斯达克</p>
            <div class="cell-tips">
                <span>一般</span>
                <span>潜在</span>
                <span>其他类型</span>
            </div>
          </div>
          <div class="cell-more right">啊是大负责</div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id='branch'>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
export default {
  name: 'contacts',
  data () {
    return {
      selected: 'my'
    }
  },
  methods: {
    addContact () {
      // 添加联系人
      alert('addContact')
      this.$router.push({path: '/addContacts'})
    }
  },
  created () {
    // 设置钉钉相关内容
<<<<<<< HEAD
    this.dd.ready(() => {
      this.dd.biz.navigation.setMenu({
        backgroundColor: '#ADD8E6',
        textColor: '#ADD8E611',
        items: [
          {
            'id': '1',
            'iconId': 'add',
            'text': '添加'
          }
        ],
        onSuccess: data => {
          this.addContact()
        },
        onFail: err => {
          console.log(err)
        }
      })
      this.dd.biz.navigation.setTitle({
        title: '外部联系人'
      })
=======
    this.dd.biz.navigation.setMenu({
      backgroundColor: '#ADD8E6',
      textColor: '#ADD8E611',
      items: [
        {
          'id': '1',
          'iconId': 'add',
          'text': '添加'
        }
      ],
      onSuccess: data => {
        this.addContact()
      },
      onFail: function (err) {
        console.log(err)
      }
    })
    this.dd.biz.navigation.setTitle({
      title: '外部联系人'
>>>>>>> c37b42436e774d3a76951c98cb7b56a131c7e0c1
    })
  }
}
</script>
<style>
.cell{height: 42px; background: #fff; font-size: 16px; padding: 8px 0;}
.cell-icon {margin-left: 5px;}
.cell-icon span{width: 42px; height: 42px; text-align: center; line-height: 42px; background: #ff5a09; border-radius: 50%; display: block; color: #fff;}
.cell-title{ margin-left: 10px; color: #333;}
.cell-title p{ line-height: 26px;}
.cell-tips span{font-size: 12px;float: left; color: #999; background: #f3f3f3; margin-right: 5px; padding: 2px 5px;}
.cell-more{ font-size: 12px; color: #999; margin-right: 5px;}

.contacts .mint-tab-container{padding-top: 5px;}
.contacts .mint-tab-item-label{font-size: 16px; color: #ff5a09;}
.contacts .mint-navbar .mint-tab-item.is-selected{border-color: #ff5a09;}
</style>

