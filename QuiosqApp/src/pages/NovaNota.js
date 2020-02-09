
import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, StyleSheet, Picker } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import Popup from 'react-native-easypopup';
import config from '../../config';
import { createNota } from '../services/NotasService';


function NovaNota({ navigation }) {

    const [dialogVisible, setDialogVisible] = useState(false);
    const [quantidade, setQuantidade] = useState('')
    const [valor, setValor] = useState('')
    const [fornecedor, SetFornecedor] = useState('')
    const [pago, setPago] = useState(false)
    const [action, setAction] = useState('');
    const nota = {
        "quantidade": quantidade,
        "fornecedor": fornecedor,
        "valor": valor,
        "isPago": pago
    }

    const tryCreate = async () => {
        try {
            const response = await createNota(config.STORED_TOKEN, nota)
            switch (response.status) {
                case 500:
                    console.log('erro ao criar nota')
                    break;
                case 201:
                    console.log('Nota criada')               
                    navigation.goBack()
                    break;
                default:
                    console.log(response.status);
                    break;
            }
        } catch (error) {
            console.log(error);
        }
    }

    const showDialog = () => {
        console.log('entrou');
        console.log(dialogVisible);
        if (!dialogVisible) setDialogVisible(true)
    }

    return (
        <View style={styles.card}>
            <View style={styles.container_input}>
                <Text style={styles.text}>Valor: </Text>
                <TextInput style={styles.input_text}
                    keyboardType='decimal-pad'
                    maxLength={12}
                    onChange={
                        (e) => {
                            setValor(e.nativeEvent.text)
                        }
                    }>
                </TextInput>
                <Text style={styles.text}>
                    <EvilIcons name='pencil' size={35} />
                </Text>
            </View>
            <View style={styles.container_input}>
                <Text style={styles.text}>Quantidade: </Text>
                <TextInput style={styles.input_text}
                    keyboardType='decimal-pad'
                    maxLength={12}
                    onChange={
                        (e) => {
                            setQuantidade(e.nativeEvent.text)
                        }
                    }>
                </TextInput>
                <Text style={styles.text}>
                    <EvilIcons name='pencil' size={35} />
                </Text>
            </View>
            <View style={styles.container_input}>
                <Text style={styles.text}>Fornecedor: </Text>
                <TextInput style={styles.input_text}
                    maxLength={24}
                    onChange={
                        (e) => {
                            SetFornecedor(e.nativeEvent.text)
                        }
                    }>
                </TextInput>
                <Text style={styles.text}>
                    <EvilIcons name='pencil' size={35} textAlign='right' />
                </Text>
            </View>
            <View style={styles.container_input}>
                <Picker
                    selectedValue={pago}
                    style={styles.picker}

                    onValueChange={(itemValue, itemIndex) =>
                        setPago(itemValue)
                    }>
                    <Picker.Item label="Pago" value={true} />
                    <Picker.Item label="A Pagar" value={false} />
                </Picker>
                <Text style={styles.text}>
                    <EvilIcons name='pointer' size={35} textAlign='right' />
                </Text>
            </View>
            <View style={styles.button_container}>
                <TouchableOpacity style={styles.button}
                    onPress={() => {
                        setAction('save');
                        showDialog();
                    }
                    }
                >
                    <Text style={styles.text}>salvar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.del_button}
                    onPress={() => {
                        setAction('exclude');
                        showDialog();
                    }
                    }
                >
                    <Text style={styles.text}>deletar</Text>
                </TouchableOpacity>
            </View>
            <Popup
                showpopup={dialogVisible}
                type="alert" //info
                semitransparent={false}
                animation={'slide'} //fade - slide - none
                onPress={() => {
                    setDialogVisible(false)
                }}
                contenttext={"Deseja deletar ou salvar esta nota?"}
                confirmaction={() => {
                    switch (action) {
                        case 'save':
                            console.log('salvando');
                            tryCreate()
                            setDialogVisible(false)
                            break;
                        case 'exclude':
                            console.log('excluindo');
                            navigation.goBack();
                            setDialogVisible(false)
                            break;
                        default:
                            setDialogVisible(false)
                            break;
                    }
                    setDialogVisible(false)
                }}
                cancelaction={() => alert('Ação cancelada')}
                acceptbuttontitle={'Sim!'}
                cancelbuttontitle={'Não'} />
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        alignSelf: "center",
        alignContent: "center",
        textAlignVertical: 'center',
        backgroundColor: '#000',
        flex: 1,
        flexDirection: 'column',
        paddingTop: 65,
        paddingLeft: 20,
        width: '100%',

    },
    container_input: {
        flexDirection: 'row',
        marginTop: 20
    },
    text: {
        color: '#fff',
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 7,
    },
    button_container: {
        flexDirection: 'row',
        width: '95%',
        alignSelf: 'center',
        marginTop: 25,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#000',
        height: 60,
        marginLeft: '6%',
        paddingTop: 5,
        textAlignVertical: 'center',
        width: '40%',
    },
    input_text: {
        color: '#fff',
        fontSize: 24,
        fontWeight: "bold",
    },
    picker: {
        fontWeight: "bold",
        height: 50,
        width: 200,
        color: '#fff',
        fontSize: 24,
        backgroundColor: '#333',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#18a314',
        borderRadius: 10,
        height: 60,
        marginLeft: '6%',
        paddingTop: 5,
        width: '40%',
    },
    del_button: {
        alignItems: 'center',
        backgroundColor: '#a81e29',
        borderRadius: 10,
        height: 60,
        marginLeft: '6%',
        paddingTop: 5,
        width: '40%',
    },
});

export default NovaNota;