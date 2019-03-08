<template>
    <ul class="navbar-nav ml-auto">
        <Channel v-for="channel in channelList"
                 :channelName="channel.channelName"
                 :imgUrl="channel.imgUrl"
                 :profileUrl="channel.profileUrl"
                 :channelAlt="channel.channelAlt"
                 :key="channel.id"
        ></Channel>
        <!--<li class="nav-item">-->
            <!--<iframe src="https://open.spotify.com/follow/1/?uri=spotify:artist:39bazNvS2uaVmod4LdwpCx&size=basic&theme=light&show-count=0" width="200" height="25" scrolling="no" frameborder="0" style="border:none; overflow:hidden;" allowtransparency="true"></iframe>-->
        <!--</li>-->
    </ul>
</template>

<script>
    import Channel from './Channel.vue'
    import ChannelData from '../params.json'

    export default {
        name: "Channels",
        components: {
            Channel
        },
        data(){
            return{
                channelList: ChannelData.channels
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
