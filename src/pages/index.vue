<template>
  <div class="page-index">
    <mt-header fixed title="旅游咨询">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="page-index-body">
      <div class="body-banner">
        <mt-swipe :auto="3000">
          <mt-swipe-item>
            <img src="../assets/banner/001.jpg" alt="">
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="../assets/banner/002.png" alt="">
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="../assets/banner/003.png" alt="">
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="body-list">
        <mt-tab-container v-model="active">
          <mt-tab-container-item id="hot">
            <tour-item/>
          </mt-tab-container-item>
          <mt-tab-container-item id="recom">
            <tour-item/>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
    </div>
    <mt-tabbar fixed v-model="selected">
      <mt-tab-item id="hot" @click="switchTab('hot')">
        <img slot="icon" src="../assets/logo.png">
        最热景点
      </mt-tab-item>
      <mt-tab-item id="recom" @click="switchTab('recom')">
        <img slot="icon" src="../assets/logo.png">
        推荐景点
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  import TourItem from '../components/TourItem'

  export default {

    name: 'index',

    components: {TourItem},

    methods: {
      switchTab(id) {
        this.active = id
      }
    },

    comments: {
      'tour-item': TourItem
    },

    data() {
      return {
        selected: 'tour',
        active: 'hot'
      }
    }


  }
</script>

<style scoped>
  .body-list {
    padding: 5px;
  }
  .page-index-body {
    width: 100%;
  }

  .body-banner {
    width: 100%;
    height: 12rem;
  }

  .page-index-body img {
    width: 100%;
    height: 100%;
  }
</style>
