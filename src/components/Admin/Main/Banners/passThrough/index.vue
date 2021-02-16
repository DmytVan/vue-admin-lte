<template>
    <Section title='Сквозной банер на заднем фоне' class="banner__pass-through">
        <div class="banner__pass-through-header">
            <p class="banner__on-main-size">Размер: 2000х3000</p>
        </div>
    </Section>
</template>

<script>
    import Section from '../Section'

    export default {
        name: "index",
        components: {
            Section
        }
    }
</script>

<style scoped>
    .banner__pass-through {
        word-spacing: 5px;
        font-size: 16px;
    }
</style>