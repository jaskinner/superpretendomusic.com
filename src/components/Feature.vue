<template>
    <section id="feature" :style="{ backgroundImage: 'url(' + require('../assets/' + imgUrl) + ')' }">
        <div class="container">
            <span>{{ featureMsgTop }}</span>
            <div class="wrapper">
                <img :src="require('../assets/' + featureImgUrl)" :alt="featureMsgTop + ' | ' + featureMsgBottom">
            </div>
            <span>{{ featureMsgBottom }}</span>
            <a :href="featureLink">{{ featureBtn }}</a>
        </div>
    </section>
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
    @import url("https://use.typekit.net/acp4cdy.css");

    #feature {
        height: 700px;
        font-size: 2rem;
        font-family: poppins,sans-serif;
        font-weight: 200;
        font-style: normal;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        background-color: #999;
        background-blend-mode: screen;
        display: flex;
        margin-top: 80px;

        .container {
            flex: 1 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            & > * {
                flex: 0 0 auto;
            }

            .wrapper {
                width: 240px;
                box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.75);
                margin: 1.5rem 0;

                img {
                    max-width: 100%;
                    height: auto;
                    display: block;
                }
            }


            a {
                cursor: pointer;
                padding: 1rem;
                margin: 1.5rem;
                background-color: #f2e2c4;
                transition: all 100ms;
                text-decoration: none;
                color: #999;
                border-radius: 2px;
                font-weight: 800;

                &:hover {
                    background-color: #7fa0c9;
                }
            }
        }
    }

    @media only screen and (min-width: 1024px) {

    }
</style>