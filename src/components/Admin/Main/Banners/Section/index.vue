<template>
    <div class="banner__section">
        <h2 class="banner__section-title">{{title}}</h2>
        <div class="banner__section-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        props: {
            title: {
                type: String,
                default: "Название"
            }
        }
    }
</script>

<style scoped>
    .banner__section-title {
        text-align: center;
        font-size: 24px;
        font-weight: bold;
    }
    .banner__section-content {
        padding: 20px 10px;
        border: 1px solid black;
        border-radius: 10px;
    }
</style>