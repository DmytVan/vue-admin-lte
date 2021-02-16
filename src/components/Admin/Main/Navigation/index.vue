<template>
    <nav>
        <ul class="main__nav">
            <Item v-for="(item, i) in sections" :info="item" :key="i"></Item>
        </ul>
    </nav>
</template>

<script>
    import Item from './Item';

    export default {
        name: "Navigation",
        components: {
            Item
        },
        data() {
            return {
                sections: [
                    {
                        name: "Статистика",
                        path: '/admin/statistics',
                        routeName: 'Statistics'
                    },
                    {
                        name: "Баннера/Слайдеры",
                        path: '/admin/banners',
                        routeName: 'Banners'
                    },
                    {
                        name: "Фильмы",
                    },
                    {
                        name: "Кинотеатры"
                    },
                    {
                        name: "Новости"
                    },
                    {
                        name: "Акции"
                    },
                    {
                        name: "Страницы"
                    },
                    {
                        name: "Пользователи"
                    },
                    {
                        name: "Рассылка"
                    }
                ]
            }
        }
    }
</script>

<style scoped>
.main__nav {
    border: 1px solid black;
}
</style>