<template>
    <nav id="header" class="navbar navbar-expand-lg fixed-top navbar-light bg-white">
        <div class="container">
            <span class="navbar-brand mb-0">Super Pretendo</span>
            <!--<ul class="navbar-nav ml-auto">-->
                <!--<Channels></Channels>-->
            <!--</ul>-->
        </div>
    </nav>
</template>

<script>
    import Channels from './Channels'

    export default {
        name: "Header",
        components: {Channels}
    }

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById("header").classList.add('header-collapsed')
        } else {
            document.getElementById("header").classList.remove('header-collapsed')
        }
    }
</script>

<style scoped lang="scss">
    #header {

        .navbar-brand {
            font-family: league-gothic, sans-serif;
            font-style: italic;
            font-weight: 700;
            color: #7fa0c9;
            transition: 0.5s;
        }

        &.header-collapsed {
            .navbar-brand {
                font-size: 2rem;
            }
        }
    }
</style>
