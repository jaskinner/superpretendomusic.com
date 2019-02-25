<template>
    <div id="channels">
        <Channel v-for="channel in channelList"
                 :channelName="channel.channelName"
                 :imgUrl="channel.imgUrl"
                 :profileUrl="channel.profileUrl"
        ></Channel>
    </div>
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
    #channels {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        max-width: 960px;
        margin: auto;
        padding: 60px 0;
    }

</style>