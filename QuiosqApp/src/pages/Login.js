import React, { useState } from 'react';
import { KeyboardAvoidingView, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';

import Loginservice from '../services/LoginService'

function Login({ navigation }) {

    const [login, setLogin] = useState('');
    const [pswd, setPswd] = useState('');

    const tryLogin = async () => {
        const response = await Loginservice.login(login, pswd);
        if (response) {
            navigation.navigate('Notas');
        }
    }

    const goToSignIn = () => {
        navigation.navigate('SignIn');
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
            <TouchableOpacity
                style={{ width: '70%' }}
                onPress={tryLogin}
                title={'login'}>
                <Text style={styles.touchable}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToSignIn}>
                <Text style={styles.sign_in}>não possui uma conta ?</Text>
            </TouchableOpacity>
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
    touchable: {
        borderRadius: 5,
        backgroundColor: '#3cabde',
        borderColor: '#fff',
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        height: 50,
        paddingTop: 7,
        marginBottom: 20,
        textAlign: "center",
        width: '100%',
    },
    sign_in: {
        fontSize: 18,
        color: '#fff',
        textDecorationLine: "underline",
    }
});

export default Login;