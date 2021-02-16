<template>
    <div class="banners__banner">
        <Photo :deleteBanner="deleteBannerInMain" :index="index" :banner="banner"></Photo>
        <div class="banners__banner-add-photo">
            <input name="file" type="file" class="file_upload" accept=".jpg, .jpeg, .png" @change="changeFile($event)">
            Добавить
        </div>
        <p class="banners__banner-container">
            <label for="bannersUrl">URL: </label><input name="url" class="banners__banner-input" id="bannersUrl" type="text"
                                                        placeholder="URL" :value="banner.url"
                                                        @input="changeUrl($event)">
        </p>
        <p class="banners__banner-container">
            <label for="bannersText">Текст: </label><input name="text" class="banners__banner-input" id="bannersText" type="text"
                                                           placeholder="Текст" :value="banner.text"
                                                           @input="changeText($event)">
        </p>
    </div>
</template>

<script>
    import {mapMutations, mapActions} from 'vuex';
    import Photo from '../Photo'

    export default {
        name: "index",
        props: {
            banner: {
                type: Object
            },
            index: {
                type: Number
            }
        },
        components: {
            Photo
        },
        methods: {
            ...mapMutations(['deleteBannerInMain', 'changeTextInMain', 'changeUrlInMain', 'changeFileInMain']),
            ...mapActions(['changePhotoInMain']),
            changeText(event) {
                this.changeTextInMain({index: this.index, text: event.target.value})
            },
            changeUrl(event) {
                this.changeUrlInMain({index: this.index, url: event.target.value})
            },
            changeFile(event) {
                const payload = {index: this.index, file: event.target.files[0]}
                this.changeFileInMain(payload);
                this.changePhotoInMain(payload)
            }
        },
        updated() {
            console.log(this.banner.photo)
        }
    }
</script>

<style scoped>


    .banners__banner {
        display: flex;
        flex-flow: column nowrap;
        max-width: 210px;
        align-items: flex-end;
        padding-right: 16px;
        padding-top: 20px;
    }
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

    .file_upload {
        opacity: 0;
        cursor: pointer;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
    }

    .banners__banner-add-photo {
        display: inline-block;
        border: 1px solid black;
        border-radius: 5px;
        position: relative;
        cursor: pointer;
        margin-bottom: 10px;
        width: 150px;
        text-align: center;

    }

    .banners__banner-container {
        display: flex;
        align-items: center;
        font-size: 15px;
    }

    .banners__banner .banners__banner-container label {
        font-weight: normal;
        padding: 0;
        margin: 0;
        margin-right: 5px;
    }

    .banners__banner-input {
        display: inline-block;
        max-width: 150px;
        font-size: 12px;

    }
</style>