<template>
    <div id="app">
        <Header></Header>
        <Feature></Feature>
        <Reel></Reel>
        <Media></Media>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from './components/Header'
    import Feature from './components/Feature'
    import Reel from './components/Reel'
    import Media from './components/Media'
    import Footer from './components/Footer'

    export default {
        name: 'app',
        components: {
            Header, Feature, Reel, Media, Footer
        }
    }
</script>

<style lang="scss">
    @import "./assets/scss/style.scss";
    @import url("https://use.typekit.net/owx4dww.css");


    body, * {
        margin: 0;
        border: none;
        padding: 0;
    }

    #app {
        color: #2c3e50;
        margin-top: 86px;
    }

    .main-header {
        font-family: blockhead-unplugged,sans-serif;
        font-weight: 400;
        font-style: normal;
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
