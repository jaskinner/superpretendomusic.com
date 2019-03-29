<template>
    <nav id="header" class="navbar navbar-expand-lg fixed-top navbar-light bg-white">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img src="../assets/images/super-pretendo-logo.svg" alt="">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <Channels></Channels>
            </div>
        </div>
    </nav>
</template>

<script>
    import Channels from './Channels'

    export default {
        name: "Header",
        components: {Channels}
    }

    // window.onscroll = function () {
    //     scrollFunction()
    // };

    // function scrollFunction() {
    //     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    //         document.getElementById("header").classList.add('header-collapsed')
    //     } else {
    //         document.getElementById("header").classList.remove('header-collapsed')
    //     }
    // }
</script>

<style scoped lang="scss">
    #header {
        .navbar-brand img {
            height: 60px;
            transition: all .5s;
        }
    }
</style>
