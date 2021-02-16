<template>
    <main class="main">
        <Navigation></Navigation>
        <div class="content">
            <div class="channel-statistic-wrapper">
                <!--<Statistics usersRegistered="44"></Statistics>-->
                <router-view v-slot="{ Component }">
                    <transition name="fade" mode="out-in" >
                        <component :is="Component" class="view"/>
                    </transition>
                </router-view>
            </div>
        </div>
    </main>
</template>

<script>
    import Navigation from './Navigation/index'

    export default {
        name: "index",
        components: {
            Navigation,
        }
    }
</script>

<style scoped>
    .main {
        display: flex;
    }

    .content {
        flex: 1;
        padding: 20px;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .2s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
        opacity: 0;
    }
</style>

