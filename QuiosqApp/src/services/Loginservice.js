import axios from 'axios';
import config from '../../config';
import SecureStore from './SecurestoreService';

module.exports = {
    login: async (login, pswd) => {
        try {
            const response = await axios.post(config.LOGIN_URL, {
                pswd: pswd.trim(),
                login: login.trim(),
            });
            const token = response.data.token;
            await SecureStore.store_token(config.STORED_TOKEN, token);
            return await SecureStore.get_token(config.STORED_TOKEN);
           

        } catch (error) {
            console.log(error)
            return null;
        }
    },
    signin: async (nome, login, pswd) => {
        try {
            console.log('entrou');
            const response = await axios.post(config.SIGNIN_URL, {
                nome: nome.trim(),
                login: login.trim(),
                pswd: pswd.trim(),
            });
            const token = response.data.token;
            await SecureStore.store_token(config.STORED_TOKEN, token);
            return await SecureStore.get_token(config.STORED_TOKEN);

        } catch (error) {
            console.log(error)
            return null;
        }
    },
}