import vue from 'vue';
import config from '../config';

export default {
    login () {
        vue.$http.post(config.user.login);
    },
    getData () {
        vue.$http.get(config.user.getData);
    }
};
