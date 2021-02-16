<template>
    <div class="banners__banner-photo-container">
        <img v-if="banner.photo" :src="banner.photo" alt="banner" class="banners__banner-photo">
        <div v-else class="banners__banner-photo-div">
        </div>
        <span class="banners__banner-delete" @click="deleteBanner(index)">x</span>
    </div>
</template>

<script>
    export default {
        name: "index",
        props: {
            deleteBanner: {
                type: Function,
                default: () => (()=> {})
            },
            index: {
                type: Number
            },
            banner: {
                type: Object
            }
        }
    }
</script>

<style scoped>
    .banners__banner-photo-container {
        position: relative;
    }
    .banners__banner-photo {
        max-width: 150px;
        margin-bottom: 10px;
    }

    .banners__banner-photo-div {
        width: 150px;
        height: 80px;
        border: 1px solid black;
        margin-bottom: 10px;
    }

    .banners__banner-delete {
        border: 2px solid black;
        border-radius: 50%;
        width: 22px;
        height: 22px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        position: absolute;
        right: -16px;
        top: -16px;
        z-index: 3;
        background-color: white;
    }
</style>