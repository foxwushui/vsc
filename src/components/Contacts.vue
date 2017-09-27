<<template>
  <div class='contacts'>    
    <!-- navbar -->
    <mt-navbar v-model='selected' fixed>
      <mt-tab-item id='my'>我负责的</mt-tab-item>
      <mt-tab-item id='branch'>我下属的</mt-tab-item>
    </mt-navbar>
    <!-- container -->
    <mt-tab-container v-model='selected'>
      <mt-tab-container-item id='my'>
        <mt-cell v-for='n in 10' :title=''内容 ' + n' />
      </mt-tab-container-item>
      <mt-tab-container-item id='branch'>
        <mt-cell v-for='n in 4' :title=''测试 ' + n' />
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
    }
  },
  created () {
    // 设置钉钉相关内容
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
    })
  }
}
</script>
