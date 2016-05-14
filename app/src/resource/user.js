import vue from 'vue';
import config from '../config';

export default {
    login () {
        this.$http.post(config.user.login);
    },
    getData () {
        this.$http.get(config.user.getData);
    }
};
