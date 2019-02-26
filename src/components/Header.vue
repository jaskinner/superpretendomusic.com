<template>
    <section id="header">
        <span>
            Super Pretendo
        </span>
    </section>
</template>

<script>
    export default {
        name: "Header"
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
    @import url("https://use.typekit.net/acp4cdy.css");

    #header {
        font-family: league-gothic,sans-serif;
        font-style: italic;
        background-color: #fff; /* White background */
        padding: 1rem 0; /* Some padding */
        color: #7fa0c9;
        text-align: center; /* Centered text */
        font-size: 4rem; /* Big font size */
        font-weight: bold;
        position: fixed; /* Fixed position - sit on top of the page */
        top: 0;
        left: 0;
        width: 100%; /* Full width */
        transition: 0.5s; /* Add a transition effect (when scrolling - and font size is decreased) */

        &.header-collapsed {
            font-size: 2rem;
        }
    }

    @media only screen and (min-width: 1024px) {

    }
</style>