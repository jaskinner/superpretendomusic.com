<template>
    <section class="container-fluid">
        <div class="row">
            <div class="col-lg-6 col-md-12 text-center">
                <div class="media-container">
                    <div class="iframe-container">
                        <iframe width="675" height="380" src="https://www.youtube.com/embed/Yj99XdD6LEE" frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-12 text-center">
                <div class="media-container">
                    <div class="iframe-container">
                        <iframe src="https://open.spotify.com/embed/artist/39bazNvS2uaVmod4LdwpCx" width="675" height="380"
                                frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Media"
    }
</script>

<style lang="scss" scoped>
    .media-container {
        padding: 1rem;
    }
</style>
