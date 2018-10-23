<template>
    <div class="page-detail">
      <mt-header fixed title="旅游咨询">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
      <div class="page-detail-body">
        <div class="body-banner" :style="bg">
        </div>
        <div class="body-content">
          <div class="detail-wrap">
            <div class="d-w-1">
              <div class="d-w-1-l">
                <div style="font-size: 1.2rem; font-weight: bold; margin: 0.5rem 0;">象山景区(5A)</div>
                <div style="margin: 0.5rem 0;">
                  <mt-badge size="small" type="success">今日可订</mt-badge>
                  <mt-badge size="small" type="success">今日可订</mt-badge>
                  <mt-badge size="small" type="success">今日可订</mt-badge>
                </div>
                <div style="margin-top: 1rem;">桂林的地标性景点</div>
              </div>
              <div class="d-w-1-r">
                <p style="font-size: 1.2rem; color: orange;">3.9分</p>
                <p style="font-size: 0.8rem; color: orange;">1.6万+评论</p>
                <p><el-rate v-model="value" disabled show-score text-color="orange" score-template="{value}"/></p>
              </div>
            </div>
          </div>
          <div class="article-wrap">

            <!-- 模拟文章 -->
            <div class="art">
              <div>
                在5月19日发表的博客中，就已经美食美景眉毛胡子一把抓地介绍了桂林象鼻山，此举遭到了鱼儿老师的狠狠表扬。为了更好地分类，以便检索，不好意思再发一次，特补充点图片。看过的朋友请绕道走啊。</div>
              <div>
                &nbsp;</div>
              <div>
                &nbsp;&nbsp;&nbsp; 5月11日,开始游览桂林景点的第一站，也是桂林市城徽——象鼻山。</div>
              <div>
                &nbsp;</div>
              <div>
                　　象鼻山原名漓山，又叫仪山、沉水山，简称象山，位于广西省桂林市内桃花江与漓江汇流处，山因酷似一只站在江边伸鼻豪饮漓江甘泉的巨象而得名，被人们称为桂林山水的象征。</div>
              <div style="text-align: center;">
                <img alt="桂林之行2——象鼻山" border="0" src="http://www.glxbs.com/uploads/allimg/140519/1K0354V5-0.jpg"></div>
              <div>
                &nbsp;</div>
              <div>
                &nbsp;&nbsp;&nbsp; 面对公园大门右侧人工小型瀑布</div>
              <div style="text-align: center;">
                <img alt="桂林之行2——象鼻山" border="0" src="http://www.glxbs.com/uploads/allimg/140519/1K035MY-1.jpg"></div>
              <div>
                &nbsp;</div>
              <div>
                &nbsp;&nbsp;&nbsp; 面对公园大门左侧小桥流水</div>
              <div style="text-align: center;">
                <img alt="桂林之行2——象鼻山" border="0" src="http://www.glxbs.com/uploads/allimg/140519/1K035Lc-2.jpg"></div>
              <div>
                &nbsp;</div>
              <div>
                &nbsp;&nbsp;&nbsp; 大门内石雕群象墙</div>
              <div style="text-align: center;">
                <img alt="桂林之行2——象鼻山" border="0" src="http://www.glxbs.com/uploads/allimg/140519/1K035O35-3.jpg"></div>
              <div>
                &nbsp;</div>
              <div>
                &nbsp;&nbsp;&nbsp; 水流湍急</div>
              <div style="text-align: center;">
                <img alt="桂林之行2——象鼻山" border="0" src="http://www.glxbs.com/uploads/allimg/140519/1K0351116-4.jpg"></div>
              <div>
                &nbsp;</div>
              <div>
                &nbsp;&nbsp;&nbsp; 水中嬉戏的可爱象群</div>
              <div style="text-align: center;">
                <img alt="桂林之行2——象鼻山" border="0" src="http://www.glxbs.com/uploads/allimg/140519/1K0352954-5.jpg"></div>
              <div>
                &nbsp;</div>
              <div style="text-align: center;">
                <img alt="桂林之行2——象鼻山" border="0" src="http://www.glxbs.com/uploads/allimg/140519/1K035GV-6.jpg"></div>
              <div>
                &nbsp;</div>
              <div>
                &nbsp;&nbsp;&nbsp; “陪照MM”</div>
              <div style="text-align: center;">
                <img alt="桂林之行2——象鼻山" border="0" src="http://www.glxbs.com/uploads/allimg/140519/1K0356234-7.jpg"></div>
              <div>
                &nbsp;</div>
              <div>
                &nbsp;&nbsp;&nbsp; 换个角度照，这次就不像象鼻山了，有人说像老鼠，有人说像刺猬...</div>
              <div style="text-align: center;">
                <img alt="桂林之行2——象鼻山" border="0" src="http://www.glxbs.com/uploads/allimg/140519/1K03511U-8.jpg">&nbsp;&nbsp;&nbsp;</div>
              <div>
                &nbsp;</div>
              <div>
                &nbsp;&nbsp;&nbsp; 普贤塔，远看像插在象背上的剑柄，又像一只古雅的宝瓶，因此称剑柄塔，或宝瓶塔。</div>
              <div style="text-align: center;">
                <img alt="桂林之行2——象鼻山" border="0" src="http://www.glxbs.com/uploads/allimg/140519/1K0351919-9.jpg"></div>
              <div>
                &nbsp;</div>
              <div>
                &nbsp;&nbsp;&nbsp; 象眼岩位于象鼻山山腰南北两侧, 互相贯通, 高约2米, 宽5～10米, 长52.8米, 呈扁长形, 面积约274平方米。象眼岩原是一段不长的古地下河道, 形成年代比水月洞早。 因部位恰巧在象眼处而得名。</div>
              <div style="text-align: center;">
                <img alt="桂林之行2——象鼻山" border="0" src="http://www.glxbs.com/uploads/allimg/140519/1K0354952-10.jpg"></div>
              <div>
                &nbsp;</div>
              <div>
                　　可爱的提示牌，与公园很搭</div>
              <div style="text-align: center;">
                <img alt="桂林之行2——象鼻山" border="0" src="http://www.glxbs.com/uploads/allimg/140519/1K0355G1-11.jpg"></div>
              <div>
                &nbsp;</div>
              <div>
                &nbsp;&nbsp;&nbsp;&nbsp;“桂林三宝”之一三花酒，桂林三花酒是中国米香型白酒的代表，被誉为为酒之王，是桂林人的骄傲。象鼻山地洞还是桂林三花酒储藏室,隔着地洞便可闻到桂林三花酒的阵阵清香。</div>
              <div style="text-align: center;">
                <img alt="桂林之行2——象鼻山" border="0" src="http://www.glxbs.com/uploads/allimg/140519/1K0351415-12.jpg"></div>
              <div>
                &nbsp;</div>
              <div style="text-align: center;">
                <img alt="桂林之行2——象鼻山" border="0" src="http://www.glxbs.com/uploads/allimg/140519/1K0352032-13.jpg"></div>
              <div>
                &nbsp;</div>
              <div style="text-align: center;">
                <img alt="桂林之行2——象鼻山" border="0" src="http://www.glxbs.com/uploads/allimg/140519/1K035O62-14.jpg"></div>
              <div>
                &nbsp;</div>
              <div>
                &nbsp;&nbsp;&nbsp; 桂林三花酒颇有历史，古时，被称作“瑞露”。</div>
              <div style="text-align: center;">
                <img alt="桂林之行2——象鼻山" border="0" src="http://www.glxbs.com/uploads/allimg/140519/1K035KL-15.jpg"></div>
              <div>
                &nbsp;</div>
              <div style="text-align: center;">
                <img alt="桂林之行2——象鼻山" border="0" src="http://www.glxbs.com/uploads/allimg/140519/1K0351091-16.jpg"></div>
              <div>
                &nbsp;</div>
              <div style="text-align: center;">
                <img alt="桂林之行2——象鼻山" border="0" src="http://www.glxbs.com/uploads/allimg/140519/1K0354415-17.jpg"></div>
              <div>
                &nbsp;</div>
              <div style="text-align: center;">
                <img alt="桂林之行2——象鼻山" border="0" src="http://www.glxbs.com/uploads/allimg/140519/1K0355114-18.jpg"></div>
              <div>
                &nbsp;</div>
              <div style="text-align: center;">
                <img alt="桂林之行2——象鼻山" border="0" src="http://www.glxbs.com/uploads/allimg/140519/1K035B23-19.jpg"></div>
              <div>
                &nbsp;</div>
              <div style="text-align: center;">
                <img alt="桂林之行2——象鼻山" border="0" src="http://www.glxbs.com/uploads/allimg/140519/1K0352962-20.jpg"></div>
              <div>
                &nbsp;</div>
              <div style="text-align: center;">
                <img border="0" src="http://www.glxbs.com/uploads/allimg/140519/1K0351931-21.jpg"></div>
              <div>
                &nbsp;</div>
              <div>
                &nbsp;&nbsp;&nbsp; 展厅中的红色官窑精品。</div>
              <div style="text-align: center;">
                <img alt="桂林之行2——象鼻山" border="0" src="http://www.glxbs.com/uploads/allimg/140519/1K0355D0-22.jpg"></div>

            </div>
            <!-- 模拟文章end -->


          </div>
        </div>
      </div>
      <mt-tabbar fixed>
        <div class="footer" @click="onJoinCartTap">
          加入购物车
        </div>
      </mt-tabbar>
    </div>
</template>

<script>
  export default {

    name: "detail",

    methods: {
      onJoinCartTap() {
        console.log("aaa")
      }
    },

    data() {
      return {
        value: 4.5,
        bg: 'background: url(http://thyrsi.com/t6/394/1540297598x-1404775437.jpg) center center no-repeat; background-size: cover;'
      }
    }
  }
</script>

<style scoped>
  .footer {
    width: 100%;
    padding: 0.75rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1E9FFF;
    color: #fff;
  }
  .d-w-1 {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0.5rem 1rem;
  }
  .d-w-1-l {
    text-align: left;
    width: 60%;
    border-right: 1px solid #eee;
  }
  .d-w-1-r {
    text-align: center;
    width: 40%;
  }
  .article-wrap {
    background-color: #fff;
    border-radius: 5px;
    margin-top: 5px;
    padding: 0.5rem
  }
  .detail-wrap {
    background-color: #fff;
    border-radius: 5px;
  }
  .page-detail-body {
    width: 100%;
    height: 100%;
  }
  .body-banner {
    width: 100%;
    height: 12rem;
  }
  .page-detail-body img {
    width: 100%;
    height: 100%;
  }
  .body-content {
    margin-top: -1.5rem;
    padding: 5px;
  }
</style>
