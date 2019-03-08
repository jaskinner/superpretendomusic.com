<template>
    <li class="nav-item">
        <a class="nav-link text-center" :href="profileUrl">
            <img class="img-fluid" :src="require('../assets/' + imgUrl)" :title="channelAlt" :alt="channelAlt">
        </a>
    </li>
</template>

<script>
    export default {
        name: "channel",
        props: {
            channelId: Number,
            channelAlt: String,
            profileUrl: String,
            imgUrl: String,
            hoverColor: String // NOT USED YET
        }
    }

</script>

<style scoped lang="scss">

    .img-fluid {
        max-height: 35px;
    }

</style>
