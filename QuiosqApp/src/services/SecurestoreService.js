import * as SecureStore from 'expo-secure-store';

module.exports = {
    store_token: async (STORED_TOKEN, token) => {
        try {
            await SecureStore.setItemAsync(STORED_TOKEN, token);
        } catch (error) {
            console.log(error);
        }
    },
    get_token: async (STORED_TOKEN) => {
        try {
            const token = await SecureStore.getItemAsync(STORED_TOKEN);
            return token;
        } catch (error) {
            console.log(error)
        }
    }
}