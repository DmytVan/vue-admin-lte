<template>
    <div class="main__statistics-parameter">
        <p class="main__statistics-parameter-title">{{title}}</p>
        <select class="main__statistics-parameter-select" :value="mainParameter" @change="selectMain($event.target.value)">
            <slot></slot>
        </select>
    </div>
</template>

<script>
    export default {
        name: "MainParameterForm",
        props: {
            mainParameter: {
                type: String
            },
            selectMain: {
                type: Function
            },
            title: {
                type: String
            }
        },
        methods: {
            selected: function (event) {
                this.$emit('selectMain', event)
            }
        }
    }
</script>

<style scoped>
    .main__statistics-parameter {
        margin-right: 20px;
    }
    .main__statistics-parameter-title {
        margin-bottom: 10px;
    }
    .main__statistics-parameter-select {
        font-weight: bold;
    }
</style>