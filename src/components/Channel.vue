<template>
    <a class="channel" :href="profileUrl">
        <img :src="require('../assets/' + imgUrl)" :title="channelAlt" :alt="channelAlt">
    </a>
</template>

<script>
    export default {
        name: "channel",
        props: {
            channelAlt: String,
            profileUrl: String,
            imgUrl: String,
            hoverColor: String // NOT USED YET
        }
    }

</script>

<style scoped lang="scss">
    .channel {
        flex: 0 0 auto;
        height: 50px;
        padding: 16px;
        max-height: 150px;

        img {
            display: block;
            height: 100%;
            max-width: 100%;
        }
    }

    @media only screen and (min-width: 768px) {
        .channel {

        }
    }


</style>