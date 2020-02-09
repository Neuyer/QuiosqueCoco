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
            console.log(error)
        }
    },
    createNota: async (STORED_TOKEN, nota) => {
        console.log('criando nota');
        console.log(nota);
        try {
            const token = await secureStore.get_token(STORED_TOKEN);
            return await axios.post(config.NOTAS_URL, nota,{
                headers: { 'x-access-token': token }
            })
        } catch (error) {
            console.log(error)
        }
    },
    update: async (STORED_TOKEN, nota) => {
        try {
            const token = await secureStore.get_token(STORED_TOKEN);   
            return await axios.put(`${config.NOTAS_URL}/${nota._id}`, nota,{
                headers: { 'x-access-token': token }
            });
        } catch (error) {
            console.log(error)
        }
    },
    exclude: async (STORED_TOKEN, nota) => {
        try {
            const token = await secureStore.get_token(STORED_TOKEN);   
            console.log('deletando')
            return await axios.delete(`${config.NOTAS_UPDATE_URL}${nota._id}`,{
                headers: { 'x-access-token': token }
            });
        } catch (error) {
            console.log(error)
        }
    }
    
}