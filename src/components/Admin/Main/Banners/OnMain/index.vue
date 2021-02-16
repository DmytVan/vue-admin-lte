<template>
    <Section title="На главной верх" class="banner__on-main">
        <div class="banner__on-main-header">
            <div class="banner__on-main-header-switch">
                <Switch/>
            </div>
            <p class="banner__on-main-size">Размер: 1000x190</p>
        </div>
        <div v-if="isLoading" class="d-flex justify-content-center banner__on-main-spinner">
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        <div v-else class="banner__on-main-content">
            <div class="banner__on-main-banners">
                <transition-group name="list-complete">
                    <Banner v-for="(banner, index) in bannersOnMain" :banner="banner" :key="banner.id"
                            :index="index" class="list-complete-item"/>
                </transition-group>
                <AddPhotoBtn class="banner__on-main-add-photo" @click="addNewBannerInMain"/>
            </div>
            <div class="banners__banner-form">
                Скорость вращения
                <select v-model="rotateSpeed" class="banner__on-main-rotate-sp">
                    <option value="2s">2c</option>
                    <option value="3s">3c</option>
                    <option value="4s">4c</option>
                    <option value="5s">5c</option>
                    <option value="6s">6c</option>
                </select>
                <a href="#" class="banner__on-main-save" @click="fetchBanners">Сохранить</a>
            </div>
        </div>
    </Section>
</template>

<script>
    import Section from '../Section'
    import Switch from '../Switch'
    import AddPhotoBtn from '../AddPhotoBtn'
    import Banner from './Banner'

    export default {
        name: "index",
        components: {
            Section,
            Switch,
            AddPhotoBtn,
            Banner
        },
        methods: {
            addNewBannerInMain() {
                this.$store.commit('addNewBannerInMain');
            },
            fetchBanners() {
                this.$store.dispatch('fetchBannersInMain');
            }
        },
        computed: {
            bannersOnMain() {
                return this.$store.state.banners.bannersOnMain.data;
            },
            isLoading() {
                return this.$store.state.banners.bannersOnMain.isLoading;
            },
            rotateSpeed: {
                get() {
                    return this.$store.state.banners.bannersOnMain.rotateSpeed;
                },
                set(value) {
                    this.$store.commit('changeRotateSpeed', value);
                }
            }
        },
        mounted() {
            this.$store.dispatch('getBannersInMain')
        }
    }
</script>

<style scoped>
    .banner__on-main {
        margin-bottom: 30px;
    }
    .banner__on-main-header-switch {
        text-align: right;
    }

    .banner__on-main-size {
        word-spacing: 5px;
        font-size: 16px;
    }

    .banner__on-main-banners {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin-bottom: 50px;
    }

    .banner__on-main-add-photo {
        margin-left: 10px;
    }

    .banners__banner-form {
        margin-left: 30px;
        margin-bottom: 10px;
    }

    .banner__on-main-rotate-sp {
        margin-left: 5px;
        margin-right: 30px;
    }

    .banner__on-main-save {
        color: black;
        border: 1px solid black;
        border-radius: 5px;
        padding: 1px 20px;
    }

    .banner__on-main-save:hover {
        opacity: .7;
    }

    .list-complete-item {
        transition: all 0.8s ease;
        margin-right: 10px;
    }

    .list-complete-enter-from,
    .list-complete-leave-to {
        opacity: 0;
        transform: translateY(30px);
    }

    .list-complete-leave-active {
        position: absolute;
    }

    .banner__on-main-spinner {
        margin-bottom: 20px;
    }
</style>