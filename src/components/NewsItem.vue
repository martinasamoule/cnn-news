<script>
export default {
    props: {
        itemTitle: String,
        itemImageSrc: String,
        itemDate: String,
        itemDecription: String,
        itemId: Number,
        hovered: null
    },

}
</script>

<template>
    <div id="photo">
        <div class="wrapper flex-center">
            <div class="image" :key="itemId"  @mouseover="hovered = itemId" @mouseleave="hovered = null">
                <transition name="fade">
                    <div class="overlay" v-if="hovered === itemId">
                        <div class="itemDataTransaction">
                            <p class="readMoreData">{{ itemTitle.includes('READ') ? itemTitle.split(':')[1] : itemTitle }}{{
                                }}
                            </p>
                            <p class="readMoreData">
                                <small>
                                    {{ itemDate != null ? itemDate.split(' ')[0].split('-').reverse().join('/') : '' }}
                                </small>
                            </p>
                            <p class="itemDescription">{{ itemDecription }}</p>

                        </div>
                    </div>
                </transition>
                <div class="item">
                    <img :src='itemImageSrc' class="itemImage">
                    <p class="itemTitle" v-if="hovered == null">{{ itemTitle.includes('READ') ? itemTitle.split(':')[1] :
                        itemTitle }}{{ }}</p>
                    <p class="itemDate" v-if="hovered == null">
                        <small>
                            {{ itemDate != null ? itemDate.split(' ')[0].split('-').reverse().join('/') : '' }}
                        </small>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
#photo{
    height: 250px;
    margin: 5px;
}
.item {
    z-index: -5;
    display: flex;
    align-items: stretch;
    position: relative;
    flex-wrap: wrap;
    height: 100%;
    overflow: hidden;
}

.itemDescription {
    width: 100%;
    padding-left: 16px;
    font-size: 0.8rem;
    margin-left: 0;
    color: white;
}

.readMoreData {
    width: 100%;
    padding-top: 4px;
    padding-left: 16px;
    margin-left: 0;
    font-size: 1.2rem;
    font-weight: bold;
    color: white;
}

.itemDataTransaction {
    overflow-y: scroll;
    padding-right: 16px;
    display: flex;
    flex-flow: column;
    width: 100%;
}

.itemTitle {

    width: 100%;
    padding-left: 16px;
    margin-left: 0;
    background-color: #0000006e;
    position: absolute;
    bottom: 20px;
    height: 40px;
    overflow: hidden;
    white-space: pre;
    text-overflow: ellipsis;
    font-weight: bold;
    font-size: 1rem;
    color: white;
}

.itemDate {
    height: 20px;
    position: absolute;
    bottom: 0;
    padding-left: 16px;
    margin-left: 0;
    width: 100%;
    background-color: #0000006e;
    font-size: 0.8rem;
    color: white;
}

.itemDate small {
    position: absolute;
    bottom: 13px;
}

.itemImage {
    width: 100%;
}

.wrapper {
    flex-wrap: wrap;
    height: 100%;
}

.wrapper .image {
    height: 100%;
    position: relative;
}


.wrapper .image .overlay {
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    height: 100%;
    position: absolute;
    width: 100%;
}


.flex-center {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

@media(max-width:1000px) and (min-width:601px){
  .itemDescription{
    font-size: 1rem;
  }
}
</style>