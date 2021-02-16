<template>
    <div class="banners">
        <BannersOnMain></BannersOnMain>
        <BannersPassThrough></BannersPassThrough>
    </div>
</template>

<script>
    import BannersOnMain from './OnMain'
    import BannersPassThrough from './passThrough'
    export default {
        name: "index",
        components: {
            BannersOnMain,
            BannersPassThrough
        }
    }
</script>

<style scoped>
    .banners {
        padding: 0 20px;
        font-size: 18px;
    }
</style>