<script setup>
import NewsItem from './components/NewsItem.vue';
import { FulfillingBouncingCircleSpinner } from 'epic-spinners'
</script>

<template>
  <!-- <main> -->
   
    <div class="contianer">
      <p class="header"><span class="headerLogo">{{ header.split('.')[0] }}</span>.{{ header.split('.')[1] }}</p>
  <div class="items" >
    <div v-for="(item,index) in listByNumber">
      <NewsItem :itemTitle="item.title" :itemImageSrc='item.enclosure.link' :itemDate="item.pubDate" :itemId="index" :itemDecription="item.description"></NewsItem>
    </div>
  </div>
  <fulfilling-bouncing-circle-spinner
  :animation-duration="5000"
  :size="80"
  class="spinner"
  color="black"
  v-if="showSpinner"
/>
  <div class="btnDiv" v-if="!showSpinner">
    <button class="viewBtn" @click="$event=>showMore()" v-if="!viewBtnClick">View more</button>
    <button class="viewBtn" @click="$event=>showLess()" v-if="viewBtnClick">View Less</button>
  </div></div>
  <!-- </main> -->
</template>

<script>
export default {
  data() {
    return {
            listItems: [],
            listByNumber: [],
            viewBtnClick:false,
            header:'',
            showSpinner:false,
        }
  },
  watch:{
    viewBtnClick:async function () {
      if(this.viewBtnClick){
        this.listByNumber = this.listItems ;
      }
      if(!this.viewBtnClick){
        await this.getSomeOfItems(7);
      }
    }
  },
  methods: {
   async sortedItems() {
        this.listItems.sort( ( a, b) => {
            return new Date(b.pubDate) - new Date(a.pubDate);
        });
        console.log(this.listItems)
        return this.items;
    },
    async getData() {
      const res = await fetch("https://api.rss2json.com/v1/api.json?rss_url=http://rss.cnn.com/rss/edition.rss");
      const finalRes = await res.json();
      this.header = finalRes.feed.title ;
      this.listItems = finalRes.items;
      
    },
    async getSomeOfItems(itemsNumber) {
      let items = this.listItems;
      this.listByNumber = items.slice(0, itemsNumber);
    },
    showMore(){
      this.showSpinner = true ;
      setTimeout(() => {
        this.viewBtnClick = true ;
        this.showSpinner = false ;
      }, 3000);
    },
    showLess(){
      this.showSpinner = true ;
      setTimeout(() => {
        this.viewBtnClick = false ;
        this.showSpinner = false ;
      }, 3000);
    },
  },
  async mounted() {
    await this.getData();
    await this.sortedItems()
    await this.getSomeOfItems(7);
  }
}
</script>
<style scoped>
.spinner{
  margin-left: 45%;
  margin-top: 3rem ;
  margin-bottom: 3rem ;
}
.header{
  color: black;
  font-weight: bold;
  margin: 2rem ;
  margin-bottom: 1rem;
  margin-left: 1rem ;
  line-height: 32px;
  font-size: 1rem;
}
.headerLogo{
  color: black;
  font-weight: bold;
  text-decoration: underline yellow 2px;
  text-underline-offset: 40%;
}
.contianer{
  display: block;
  overflow: hidden;
}
.btnDiv {
 margin-left: 42%;
}

.viewBtn {
  margin: 2rem;
  cursor: pointer;
  width: 150px !important;
  height: 37px;
  color: black;
  background-color: white;
  font-size: 1rem ;
}

.items {
  display: flex;
  flex-wrap: wrap;
}

.items>* {
  /* padding: 1rem; */
  flex: 1 1 350px;
}
:first-child{
  flex: 1 1 755px;
}
:last-child{
  flex: 1 1 755px;
}
@media(max-width:1200px) and (min-width:1001px){
  .items>* {
  /* padding: 1rem; */
  flex: 1 1 400px;
}
:first-child{
  flex: 1 1 600px;
}
:last-child{
  flex: 1 1 400px;
}
  .btnDiv ,.spinner{
    margin-left: 40%;
  }
}
@media(max-width:1000px) and (min-width:601px){
  .items>* {
  /* padding: 1rem; */
  flex: 1 1 350px;
}
:first-child{
  flex: 1 1 500px;
}
:last-child{
  flex: 1 1 350px;
}
  .btnDiv , .spinner{
    margin-left: 35%;
  }
  .header{
    
  font-size: 1.5rem;
  }
}
@media(max-width:600px) and (min-width:501 ){
  .btnDiv , .spinner{
    margin-left: 30%;
  }
}
@media(max-width:500px){
  .btnDiv , .spinner{
    margin-left: 20%;
  }
}

</style>
