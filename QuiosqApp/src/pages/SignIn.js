import React, { useState } from 'react';
import Toast from 'react-native-simple-toast';
import { KeyboardAvoidingView, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';

import { minLength, equals, checkForm } from '../utils/ValidaInput';
import Loginservice from '../services/LoginService';

function SignIn({ navigation }) {

    const ALERTA_CARACTERES = 'mínimo de 4 caracteres';
    const ALERTA_PSWD = 'as senhas devem coincidir';

    const [nome, setNome] = useState('');
    const [pswd, setPswd] = useState('');
    const [login, setLogin] = useState('');
    const [alertaNome, setAlertaNome] = useState('');
    const [alertaPswd, setAlertaPswd] = useState('');
    const [alertaLogin, setAlertaLogin] = useState('');
    const [pswdConfirm, setPswdConfirm] = useState('')
    const [alertaPswdConfirm, setAlertaPswdConfirm] = useState('');

    const trySignin = async () => {
        if (checkForm([nome, login, pswd]) && equals(pswd, pswdConfirm)) {
            try {
                const response = await Loginservice.signin(nome, login, pswd);
                console.log('hey')
                console.log(response)
                switch (response) {
                    case 409:
                        Toast.show('login já existe')
                        break;
                    case 201:
                        navigation.navigate('Notas');
                    default:
                        console.log('deu ruim');
                        break;
                }

            } catch (error) {
                console.log(error)
            }
        }
    }

    const showAlert = (OK, alertFunc, message) => {
        if (!OK) return alertFunc(message);
        else return alertFunc('');
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
            <TextInput
                onChange={e => {
                    setNome(e.nativeEvent.text);
                    showAlert(minLength(nome), setAlertaNome, ALERTA_CARACTERES);
                }}
                style={styles.input}
                placeholder='nome' />
            <Text style={styles.hint}>{alertaNome}</Text>
            <TextInput
                onChange={e => {
                    setLogin(e.nativeEvent.text)
                    showAlert(minLength(login), setAlertaLogin, ALERTA_CARACTERES);
                }}
                style={styles.input}
                placeholder='login' />
            <Text style={styles.hint}>{alertaLogin}</Text>
            <TextInput
                onChange={e => {
                    setPswd(e.nativeEvent.text)
                    showAlert(minLength(pswd), setAlertaPswd, ALERTA_PSWD);
                }}
                style={styles.input}
                secureTextEntry={true}
                placeholder='senha' />
            <Text style={styles.hint}>{alertaPswd}</Text>
            <TextInput
                onChange={e => {
                    setPswdConfirm(e.nativeEvent.text)
                    showAlert(equals(pswd, pswdConfirm), setAlertaPswdConfirm, ALERTA_PSWD);
                }}
                style={styles.input}
                secureTextEntry={true}
                placeholder='confirme senha' />
            <Text style={styles.hint}>{alertaPswdConfirm}</Text>
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