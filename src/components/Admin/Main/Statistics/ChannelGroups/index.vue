<template>
    <div class="main__channel-group">
        <MainParameterForm :mainParameter="mainParameter" :selectMain="selectMain" title="Основной параметр:">
            <slot>
                <option value="option1">Лучшие каналы</option>
            </slot>
        </MainParameterForm>
        <MainParameterForm :mainParameter="mainParameter" :selectMain="selectConvention" title="Конвенция:">
            <slot>
                <option value="option1">Цель 1: Заявка консультация</option>
            </slot>
        </MainParameterForm>
        <a href="#" class="main__channel-group-link">Изменение группы каналов</a>
    </div>
</template>

<script>
    import MainParameterForm from './MainParameterForm';

    export default {
        name: "ChannelGroups",
        components: {MainParameterForm},
        data() {
            return {
                mainParameter: 'option1',
                convention: 'option1'
            }
        },
        methods: {
            selectMain(value) {
                this.mainParameter = value;
                alert(this.mainParameter)
            },
            selectConvention(value) {
                this.convention = value;
                alert(this.convention)
            }
        }
    }
</script>

<style scoped>
    .main__channel-group {
        display: flex;
        align-items: flex-end;
    }
    .main__channel-group-link {
        padding-bottom: 3px;
    }
</style>