import vue from 'vue';
import config from '../config';

export default {
    login (uid, pwd) {
        return vue.$http.post(config.user.login, {uid, pwd});
    },
    getData () {
        return vue.$http.get(config.user.getData);
    }
};
