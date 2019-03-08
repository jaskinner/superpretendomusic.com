<template>
    <div id="app">
        <Header></Header>
        <Feature></Feature>
        <!--<Media></Media>-->
    </div>
</template>

<script>
    import Header from './components/Header.vue'
    import Feature from './components/Feature.vue'
    import Media from './components/Media.vue'

    export default {
        name: 'app',
        components: {
            Header, Feature, Media
        }
    }
</script>

<style lang="scss">
    @import "./assets/scss/style.scss";

    body, * {
        margin: 0;
        border: none;
        padding: 0;
    }

    #app {
        color: #2c3e50;
        margin-top: 86px;
    }
</style>
