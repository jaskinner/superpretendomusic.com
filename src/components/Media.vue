<template>
    <section id="media" class="container-fluid">
        <div class="row">
            <div class="col-6 mx-auto">
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
    #media {
        margin-bottom: 15vh;
    }
    .media-container {
        padding: 1rem;
    }
</style>
