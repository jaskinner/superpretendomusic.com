<template>
    <header class="jumbotron jumbotron-fluid" id="feature">
        <div class="container feature-grid">
            <div class="feature-headline">
                <p class="display-3 main-header">{{ featureMsgTop }}</p>
            </div>
            <div class="feature-img-wrapper">
                <img class="img-fluid feature-img" :src="require('../assets/images/' + featureImgUrl)" :alt="featureMsgTop + ' | ' + featureMsgBottom">
            </div>
            <div class="feature-date">
                <p class="lead">{{ featureMsgBottom }}</p>
            </div>
            <div class="feature-btn p-3">
                <a class="btn btn-primary btn-lg" target="_blank" :href="featureLink">{{ featureBtn }}</a>
            </div>
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
        /*background-size: cover;*/
        background-color: lightblue;
        background-blend-mode: screen;
        background-position-y: 25%;
        /*text-align: center;*/
        font-weight: 200;
        font-style: normal;

        .feature-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
            grid-template-areas:
                "headline feature"
                "date feature"
                "button feature";

            .feature-btn, .feature-date, .feature-headline, .feature-img-wrapper {
                justify-self: center;
                align-self: center;
            }

            .feature-headline {
                grid-area: headline;
            }

            .feature-date {
                grid-area: date;
            }

            .feature-img-wrapper {
                grid-area: feature;
            }

            .feature-btn {
                grid-area: button;
            }
        }

        .feature-img {
            max-width: 200px;
            box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.75);
        }
    }
</style>
