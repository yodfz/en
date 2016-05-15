<template>
    <div class="login">
        <section id="banners">

        </section>
        <section id="login" class="loginBounds">

        </section>
        <section id="loginInfo" class="loginBounds">
            <ul>
                <li>帐号:</li>
                <li><input type="text" v-model="uid"></li>
                <li>密码</li>
                <li><input type="text" v-model="pwd"></li>
                <li>
                    <xbutton types="default">登陆</xbutton>
                </li>
            </ul>
        </section>
    </div>
</template>
<script>
    import userService from './resource/user';
    import xbutton from 'vux-c/x-button';
    import './style/login.less';
    export default {
        data () {
            return {
                uid: '',
                pwd: ''
            };
        },
        components: {
            xbutton
        },
        methods: {
            login () {
            }
        }
    };
</script>
<style>

</style>
