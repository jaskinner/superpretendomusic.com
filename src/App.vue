<template>
    <div id="app">
        <Header></Header>
        <Feature></Feature>
        <Media></Media>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from './components/Header'
    import Feature from './components/Feature'
    import Media from './components/Media'
    import Footer from './components/Footer'

    export default {
        name: 'app',
        components: {
            Header, Feature, Media, Footer
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

    .iframe-container {
        position: relative;
        width: 100%;
        padding-bottom: 56.25%;
        height: 0;

        iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    }
</style>
