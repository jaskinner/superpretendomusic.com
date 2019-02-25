<template>
    <a class="channel" :href="profileUrl">
        <img :src="require('../assets/' + imgUrl)" alt="">
    </a>
</template>

<script>
    export default {
        name: "channel",
        props: {
            channelName: String,
            profileUrl: String,
            imgUrl: String,
            hoverColor: String // NOT USED YET
        }
    }

</script>

<style scoped lang="scss">
    .channel {
        height: 100vw;
        display: flex;
        align-items: center;
        justify-content: space-around;
        background-color: transparent;
        transition: all 0.2s;

        &:hover {
            background-color: rgba(0, 0, 0, 0.4);
            padding: 1rem;
        }

        img {
            display: block;
            height: auto;
            width: 50%;
            max-width: 100%;
        }
    }

    @media only screen and (min-width: 768px) {
        .channel {
            height: 30%;
            flex: 0 0 30%;
        }
    }


</style>