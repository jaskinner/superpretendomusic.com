<template>
    <section id="reel" class="container">
        <div class="row">
            <div v-for="video in videoList"
                 :key="video.id"
                 v-bind:class="{ 'col-12': (video.id == 1), 'col-lg-4 col-md-12': (video.id > 1) }"
            >
                <div class="media-container">
                    <div class="iframe-container" v-html="video.videoEmbed">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import VideoData from '../params.json'

    export default {
        name: "Reel",
        data(){
            return{
                videoList: VideoData.videos
            }
        }
    }
</script>

<style lang="scss" scoped>
    #reel {
        margin: 25vh auto;
    }
    .media-container {
        padding: 1rem;
    }
</style>
