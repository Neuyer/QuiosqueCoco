import axios from 'axios';
import secureStore from './SecurestoreService';
import config from '../../config';

module.exports = {
    getNotas: async (STORED_TOKEN) => {
        try {
            const token = await secureStore.get_token(STORED_TOKEN);
            return await axios.get(config.NOTAS_URL, {
                headers: { 'x-access-token': token }
            })
        } catch (error) {
            console.error(error)
        }
    }
}