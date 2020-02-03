import React, { useState } from 'react';
import { KeyboardAvoidingView, TextInput, Button } from 'react-native';
import { StyleSheet } from 'react-native';
import Loginservice from '../services/Loginservice'

function Login({ navigation }) {

    const [login, setLogin] = useState('');
    const [pswd, setPswd] = useState('');

    const tryLogin = async () => {
        const response = await Loginservice.login(login, pswd);
        if (response) {
            navigation.navigate('Notas');
        }
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <TextInput
                value={login}
                placeholder="login"
                style={styles.input}
                onChange={
                    e => {
                        setLogin(e.nativeEvent.text)
                    }
                }
            />
            <TextInput
                onChange={
                    e => setPswd(e.nativeEvent.text)
                }
                secureTextEntry={true}
                textContentType='password'
                value={pswd}
                placeholder='senha'
                style={styles.input}
            />
            <Button
                onPress={tryLogin}
                title={'login'}
                style={styles.input}
            />
        </KeyboardAvoidingView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#545454',
        justifyContent: 'center',
        alignItems: "center",
        color: '#fff',
    },
    input: {
        borderRadius: 5,
        backgroundColor: '#fff',
        borderColor: '#fff',
        fontSize: 24,
        height: 50,
        marginBottom: 20,
        paddingLeft: '5%',
        width: '70%',
    },
});

export default Login;