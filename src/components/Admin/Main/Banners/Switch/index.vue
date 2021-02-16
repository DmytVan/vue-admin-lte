<template>
    <label class="switch">
        <input type="checkbox" checked>
        <span class="slider round"></span>
    </label>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
    .switch {
        position: relative;
        display: inline-block;
        width: 40px;
        height: 24px;
        margin: 0;
        padding: 0;
    }

    .switch input {display:none;}

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: .4s;
        transition: .4s;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 18px;
        width: 18px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
    }

    input:checked + .slider {
        background-color: #0cb300;
    }

    input:focus + .slider {
        box-shadow: 0 0 1px #0cb300;
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(16px);
        -ms-transform: translateX(16px);
        transform: translateX(16px);
    }

    /* Rounded sliders */
    .slider.round {
        border-radius: 34px;
    }

    .slider.round:before {
        border-radius: 50%;
    }
</style>