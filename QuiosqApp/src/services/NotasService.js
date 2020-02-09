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
            console.error(error)
        }
    },
    update: async (STORED_TOKEN, nota) => {
        try {
            const token = await secureStore.get_token(STORED_TOKEN);   
            console.log(nota._id)
            console.log('olha a merda')
            return await axios.put(`${config.NOTAS_URL}/${nota._id}`, nota,{
                headers: { 'x-access-token': token }
            });
        } catch (error) {
            console.error(error)
        }
    },
    exclude: async (STORED_TOKEN, nota) => {
        try {
            const token = await secureStore.get_token(STORED_TOKEN);   
            console.log(`${config.NOTAS_UPDATE_URL}${nota._id}`)
            console.log('deletando')
            return await axios.delete(`${config.NOTAS_UPDATE_URL}${nota._id}`,{
                headers: { 'x-access-token': token }
            });
        } catch (error) {
            console.error(error)
        }
    }
    
}