import axios from 'axios';
import config from '../../config';
import SecureStore from '../services//SecurestoreService';


module.exports = {
    login: async (login, pswd) => {
        console.log(login)
        console.log(pswd)
        
        try {
            console.log('entrou')
            const response = await axios.post(config.LOGIN_URL, {
                login: login,
                pswd: pswd
            });
            const token = response.token;
                SecureStore.store_token('token', token);
            
        } catch (error) {
            console.log(error)
        }
    }

}