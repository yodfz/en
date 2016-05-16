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
        }
    };
</script>
<style>

</style>
