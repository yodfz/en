<template>
    <div class="login">
        <section id="banners">

        </section>
        <section id="login" class="loginBounds">

        </section>
        <section id="loginInfo" class="loginBounds">
            <ul>
                <li>帐号:</li>
                <li></li>
                <li>密码</li>
                <li></li>
                <li>
                    <xbutton types="default">登陆</xbutton>
                    <!--<button>登陆</button>-->
                </li>
            </ul>
        </section>
    </div>
</template>
<script>
    import xbutton from 'vux-c/x-button';
    export default {
        components: {
            xbutton
        }
    };
</script>
<style>

</style>
