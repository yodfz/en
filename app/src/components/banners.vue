<template>
    <section class="js-module-banner" style="height:{{height}}px">
        <div class="bg clear" style="height:{{height}}px" v-for="item in data">
            <div class="bgNode" style="height:{{height}}px;" onclick="window.open(item.url)">
                <img :src="item.img">
            </div>
        </div>
        <div class="dots">
            <!--<i class="dot active"></i>-->
            <!--<i class="dot"></i>-->
            <!--<i class="dot"></i>-->
        </div>
    </section>
</template>
<script>
    export default{
        props: ['data'],
        data () {
            return {
                height: 0
            };
        },
        ready () {
            window.toucheBanner('.js-module-banner');
        }
    }
</script>
<style>

</style>
