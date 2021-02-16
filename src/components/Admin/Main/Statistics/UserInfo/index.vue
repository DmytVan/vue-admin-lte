<template>
    <div class="col-lg-4 col-6">
        <div class="small-box bg-warning">
            <div class="inner">
                <h3>{{ usersRegistered }}</h3>

                <p>User Registrations</p>
            </div>
            <div class="icon">
                <i class="ion ion-person-add"></i>
            </div>
            <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UserInfo",
        props: {
            usersRegistered: {
                type: String,
                default: '0'
            }
        }
    }
</script>

<style scoped>

</style>