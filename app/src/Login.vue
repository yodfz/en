<template>
    <div class="login">
        <section class="js-module-banner" id="js-module-banner">
            <div class="bg clear">
                <div class="bgNode" style="height:6rem;background-color: red;"></div>
                <div class="bgNode" style="height:6rem;background-color: blue;"></div>
                <div class="bgNode" style="height:6rem;background-color: green;"></div>
            </div>
            <div class="dots">
                <!--<i class="dot active"></i>-->
                <!--<i class="dot"></i>-->
                <!--<i class="dot"></i>-->
            </div>
        </section>
        <section id="loginInfo" class="loginBounds">
            <ul class="clear">
                <li style="width:15%">帐号:</li>
                <li style="width:25%"><input type="text" v-model="uid" class="text01"></li>
                <li style="width:15%">密码</li>
                <li style="width:25%"><input type="text" v-model="pwd" class="text01"></li>
                <li style="padding:0 10px 0 20px;">
                    <xbutton types="default" @click="login">登陆</xbutton>
                </li>
            </ul>
        </section>
    </div>
</template>
<script type="text/babel">
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
                let that = this;
                if (!that.uid) {
                    window.alert('请输入登陆帐号');
                    return;
                }
                if (!that.pwd) {
                    window.alert('请输入登陆密码');
                    return;
                }

                userService.login(that.uid, that.pwd).then(_res=> {
                    if (_res.status === 200) {
                        that.$router.route.go('/main');
                    } else {
                        window.alert('登陆失败,失败原因:' + _res.data.error);
                    }
                });
            }
        },
        created () {
        },
        ready () {
            window.touchBanner('#js-module-banner');
        }
    };
</script>
<style>

</style>
