<template>
    <section class="course">
        <section class="hot" id="hot">
            <!--推荐内容-->
        </section>
        <ul class="list">
            <li v-link="{path:'/courseDetail',query:{id:''}}">
                <p class="date">2015-3-3</p>
                <h3>这个只是一个标题,告诉你程序员要怎么写程序咯</h3>
                <p class="des">网页可见区域宽： document.body.clientWidth
                    网页可见区域高： document.body.clientHeight
                    网页可见区域宽： document.body.offsetWidth (包括边线的宽)</p>
                <span class="bfb">
                    80%
                </span>
            </li>
        </ul>
    </section>
</template>
<script>
    export default {
        created () {

        }
    }
</script>
<style>
    .course .list li {
        position: relative;
    }

    .course .list .bfb {
        position: absolute;
        right:.2rem;
        top:.2rem;
        width:80px;
        height:80px;
        text-align: center;
        line-height:80px;
        -webkit-border-radius:5px;
        -moz-border-radius:5px;
        border-radius:5px;
    }
</style>
