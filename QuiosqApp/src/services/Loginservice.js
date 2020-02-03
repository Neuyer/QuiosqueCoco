import axios from 'axios';
import config from '../../config';
import SecureStore from '../services//SecurestoreService';

module.exports = {
    login: async (login, pswd) => {
        try {
            const response = await axios.post(config.LOGIN_URL, {
                login: login.trim(),
                pswd: pswd.trim()
            });
            const token = response.data.token;
            await SecureStore.store_token(config.STORED_TOKEN, token);
            const stoken = await SecureStore.get_token(config.STORED_TOKEN);
            return stoken;

        } catch (error) {
            console.error(error)
            return null;
        }
    }
}