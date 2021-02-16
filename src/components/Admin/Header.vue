<template>
    <div class="header">
        <router-link to="/admin"><a href="#" class="header__logo">logo</a></router-link>
        <div class="header__admin">
            <i class="fa fa-fw fa-user header__admin-user-icon"></i><span class="header__admin-info">Администратор</span>
            <router-link to="/"><i class="fa fa-fw fa-power-off header__admin-logout"></i></router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
    .header {
        font-size: 18px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 40px;
        border-bottom: 2px solid black;
        flex-wrap: wrap;
    }
    .header__admin {
        display: flex;
        align-items: center;
    }
    .header__admin-user-icon {
        margin-right: 10px;
        font-size: 24px;
    }
    .header__logo {
        height: 60px;
        font-size: 16px;
        width: 180px;
        border: 2px solid black;
        display: flex;
        justify-content: center;
        align-items: center;
        color: black;
    }
    .header__admin-logout {
        margin-left: 20px;
        cursor: pointer;
        color: black;
    }
</style>