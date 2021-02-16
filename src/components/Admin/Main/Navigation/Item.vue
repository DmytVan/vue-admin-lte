<template>
    <router-link :to="info.path ? info.path : '/admin' "><li class="nav-item" :class="{active: isActive}"><a href="#">{{info.name}}</a><i class="arrow"></i></li></router-link>
</template>
<script>
    export default {
        name: "item",
        props: {
            'info': {
                type: Object
            }
        },
        computed: {
            isActive() {
                return this.$route.name === this.info.routeName
            }
        }
    }
</script>

<style scoped>
    .nav-item {
        padding: 5px 10px;
        position: relative;
    }
    .nav-item a{
        color: black;
    }
    .nav-item a:hover {
        opacity: .7;
    }
    .active {
        border-bottom: 1px solid black;
        border-top: 1px solid black;
    }
</style>