<template>
    <header class="jumbotron jumbotron-fluid" id="feature" :style="{ backgroundImage: 'url(' + require('../assets/images/' + imgUrl) + ')' }">
        <div class="container">
            <p class="display-4">{{ featureMsgTop }}</p>
            <img class="img-fluid feature-img" :src="require('../assets/images/' + featureImgUrl)" :alt="featureMsgTop + ' | ' + featureMsgBottom">
            <p class="lead">{{ featureMsgBottom }}</p>
            <a class="btn btn-primary btn-lg" target="_blank" :href="featureLink">{{ featureBtn }}</a>
        </div>
    </header>
</template>

<script>
    import FeatureInfo from '../params.json'

    export default {
        name: "Feature",
        data() {
            return {
                imgUrl: FeatureInfo.featureInfo.imgUrl,
                featureImgUrl: FeatureInfo.featureInfo.featureImgUrl,
                featureMsgTop: FeatureInfo.featureInfo.featureMsgTop,
                featureMsgBottom: FeatureInfo.featureInfo.featureMsgBottom,
                featureBtn: FeatureInfo.featureInfo.featureBtn,
                featureLink: FeatureInfo.featureInfo.featureLink
            }
        }
    }
</script>

<style scoped lang="scss">
    #feature {
        background-size: cover;
        background-color: #999;
        background-blend-mode: screen;
        background-position-y: 25%;
        text-align: center;
        font-weight: 200;
        font-style: normal;

        .feature-img {
            max-width: 200px;
            box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.75);
        }
    }
</style>
