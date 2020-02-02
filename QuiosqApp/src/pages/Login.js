import React, { useState, useEffect } from 'react';
import { View, TextInput, Button } from 'react-native';
import { StyleSheet } from 'react-native';
import Loginservice from '../services/Loginservice'

function Login() {

    const [login, setLogin] = useState('');
    const [pswd, setPswd] = useState('');


    return (
        <>
            <View style={styles.container}>
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
                    value={pswd}
                    placeholder="senha"
                    style={styles.input}
                />
                <Button
                    onPress={() => Loginservice.google()}
                    title={'login'}
                    style={styles.input}
                />
            </View>
        </>
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
        height: 50,
        marginBottom: 20,
        paddingLeft: '5%',
        width: '70%',
    },
});

export default Login;