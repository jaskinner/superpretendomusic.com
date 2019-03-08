<template>
    <div id="app">
        <Header></Header>
        <Feature></Feature>
        <Channels></Channels>
        <!--<Footer></Footer>-->
    </div>
</template>

<script>
    import Header from './components/Header.vue'
    import Feature from './components/Feature.vue'
    import Channels from './components/Channels.vue'
    // import Footer from './components/Footer.vue'

    export default {
        name: 'app',
        components: {
            Header, Feature, Channels
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
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }
</style>
