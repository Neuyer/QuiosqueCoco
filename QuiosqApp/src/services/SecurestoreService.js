import SecureStore from 'expo-secure-store';

module.exports = {
    store_token : async (USER_TOKEN, token) => {
        await SecureStore.setItemAsync(USER_TOKEN, token);
    },
    get_token : async (USER_TOKEN) => {
        return await SecureStore.getItemAsync(USER_TOKEN);
    }
}