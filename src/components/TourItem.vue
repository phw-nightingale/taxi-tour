<template>
  <div>
    <div v-for="item in items" :key="item.id">
      <router-link :to="{path: '/tour/' + item.id}" class="tour-item">
        <img v-bind:src="item.titleImg" alt="" class="tour-title-img">
        <div class="tour-detail">
          <div class="tour-title">{{item.title}}</div>
          <div>
            <span class="tour-txt-mark">很好，{{item.mark}}分</span>
            <span class="tour-txt-line">|</span>
            <span class="tour-txt-sale">{{item.sale}}+人消费</span>
          </div>
          <div class="tour-tag-wrap">
            <mt-badge style="margin-right: 5px;" v-for="tag in item.tags" :key="tag.text" size="small"
                      v-bind:type="tag.type">{{tag.text}}
            </mt-badge>
            <!--<mt-badge size="small" type="primary">今日可订</mt-badge>
            <mt-badge size="small" type="success">今日可订</mt-badge>
            <mt-badge size="small" type="warning">今日可订</mt-badge>-->
          </div>
          <div class="tour-price">
            <span class="tour-txt-symbol">￥</span><span class="tour-txt-price">{{item.price}}</span><span
            class="tour-txt-qi">起</span>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {

    name: "TourItem",

    props: [],

    data: () => {
      return {
        items: null
      }
    },

    /**
     * 数据初始化应该放在created里
     * 放在beforeCreate里无效
     */
    created() {
      let that = this
      that.items = [
        {
          id: 1,
          titleImg: 'http://thyrsi.com/t6/394/1540269431x-1404795696.png',
          title: '象山景区(4A)',
          mark: 4.6,
          sale: 6000,
          tags: [
            {text: '当日可订', type: 'primary'},
            {text: '美团专营', type: 'success'},
            {text: '特价优惠', type: 'warning'}
          ],
          price: 48.5
        },
        {
          id: 2,
          titleImg: 'http://thyrsi.com/t6/394/1540269431x-1404795696.png',
          title: '象山景区(4A)',
          mark: 4.6,
          sale: 6000,
          tags: [
            {text: '当日可订', type: 'primary'},
            {text: '美团专营', type: 'success'},
            {text: '特价优惠', type: 'warning'}
          ],
          price: 48.1
        },
        {
          id: 3,
          titleImg: 'http://thyrsi.com/t6/394/1540269431x-1404795696.png',
          title: '象山景区(4A)',
          mark: 4.6,
          sale: 6000,
          tags: [
            {text: '当日可订', type: 'primary'},
            {text: '美团专营', type: 'success'},
            {text: '特价优惠', type: 'warning'}
          ],
          price: 48.1
        },
        {
          id: 4,
          titleImg: 'http://thyrsi.com/t6/394/1540269431x-1404795696.png',
          title: '象山景区(4A)',
          mark: 4.6,
          sale: 6000,
          tags: [
            {text: '当日可订', type: 'primary'},
            {text: '美团专营', type: 'success'},
            {text: '特价优惠', type: 'warning'}
          ],
          price: 48.1
        },
        {
          id: 5,
          titleImg: 'http://thyrsi.com/t6/394/1540269431x-1404795696.png',
          title: '象山景区(4A)',
          mark: 4.6,
          sale: 6000,
          tags: [
            {text: '当日可订', type: 'primary'},
            {text: '美团专营', type: 'success'},
            {text: '特价优惠', type: 'warning'}
          ],
          price: 48.1
        },
        {
          id: 6,
          titleImg: 'http://thyrsi.com/t6/394/1540269431x-1404795696.png',
          title: '象山景区(4A)',
          mark: 4.6,
          sale: 6000,
          tags: [
            {text: '当日可订', type: 'primary'},
            {text: '美团专营', type: 'success'},
            {text: '特价优惠', type: 'warning'}
          ],
          price: 48.1
        }
      ]
      console.log(that.items)
    }
  }
</script>

<style scoped>

  .tour-item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0.5rem;
    background-color: #fff;
    border-radius: 5px;
    margin: 5px 0;
  }

  .tour-title-img {
    width: 120px;
    height: 100px;
    background-color: #eee;
  }

  .tour-detail {
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding-left: 0.5rem;
  }

  .tour-title {
    font-size: 1.2rem;
    color: #000;
  }

  .tour-txt-mark {
    font-size: 0.8rem;
    color: #01AAED;
  }

  .tour-txt-line {
    font-weight: lighter;
    color: #bbb;
  }

  .tour-txt-sale {
    font-size: 0.8rem;
    color: #bbb;
  }

  .tour-txt-symbol {
    font-size: 0.6rem;
    color: orangered;
  }

  .tour-txt-price {
    font-size: 1.2rem;
    color: orangered;
  }

  .tour-txt-qi {
    font-size: 0.8rem;
    color: #bbb;
  }
</style>
