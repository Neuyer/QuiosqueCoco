import React, { useState } from 'react';
import Toast from 'react-native-simple-toast';
import { KeyboardAvoidingView, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';

import { minLength, equals } from '../utils/ValidaInput';
import Loginservice from '../services/LoginService';

function SignIn({ navigation }) {

    const [alerta, setAlerta] = useState('');
    const [nome, setNome] = useState('');
    const [login, setLogin] = useState('');
    const [pswd, setPswd] = useState('');
    const [pswdConfirm, setPswdConfirm] = useState('')

    const trySignin = async () => {
        const response = await Loginservice.signin(nome, login, pswd);
        Toast.show('ajhsdgfahjsdgfjhgasjdfjaksdf')
        console.log(response);
        if (response) {
            console.log("entrou")
            navigation.navigate('Notas');
        }
    }

    const showAlert = (OK) => {
        if (!OK) return setAlerta('mínimo de 4 caracteres')
        if (OK) return setAlerta('')
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
            <Text style={styles.hint}>{alerta}</Text>
            <TextInput
                onChange={e => {
                    setNome(e.nativeEvent.text);
                    showAlert(minLength(nome));
                }}
                style={styles.input}
                placeholder='nome' />
            <TextInput
                onChange={e => {
                    setLogin(e.nativeEvent.text)
                    showAlert(minLength(login));
                }}
                style={styles.input}
                placeholder='login' />
            <TextInput
                onChange={e => {
                    setPswd(e.nativeEvent.text)
                    showAlert(minLength(pswd));
                }}
                style={styles.input}
                secureTextEntry={true}
                placeholder='senha' />
            <TextInput
                onChange={e => {
                    setPswdConfirm(e.nativeEvent.text)
                    
                }}
                style={styles.input}
                secureTextEntry={true}
                placeholder='confirme senha' />
            <TouchableOpacity
                onPress={trySignin}
                style={{ width: '70%' }}
                title={'login'}>
                <Text style={styles.touchable}>Cadastrar</Text>
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
    hint: {
        color: '#c72014',
        fontSize: 16,
        height: 30,
        textAlign: 'left',
        width: '70%',
    }

});

export default SignIn;