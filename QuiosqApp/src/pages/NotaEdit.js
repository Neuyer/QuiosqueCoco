
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import Popup from 'react-native-easypopup';
import { update, exclude } from '../services/NotasService'
import config from '../../config'


function NotaEdit(route) {
    const nota = route.navigation.state.params;
    console.log(nota);
    

    const [action, setAction] = useState('');
    const [dialogVisible, setDialogVisible] = useState(false);
    const [editValor, setEditValor] = useState(nota.valor);
    const [editFornecedor, setEditFornecedor] = useState(nota.fornecedor);

    const data = nota.data.split('T')[0];
    const showDialog = () => {
        console.log('entrou');
        console.log(dialogVisible);
        if (!dialogVisible) setDialogVisible(true)
    }

    const tryUpdate = async () => {
        try {
            nota.valor = editValor;
            nota.fornecedor = editFornecedor;
            const response = await update(config.STORED_TOKEN, nota)
            switch (response.status) {
                case 500:
                    console.log('erro ao atualizar')
                    break;
                case 404:
                    console.log('nota não encontrada')
                case 200:
                    console.log('Atualiazada')               
                    route.navigation.goBack()
                    break;
                default:
                    console.log(response.status);
                    break;
            }
        } catch (error) {
            console.log(error);
        }
    }
    const tryDelete = async () => {
        try {
            const response = await exclude(config.STORED_TOKEN, nota)
            switch (response.status) {
                case 500:
                    console.log('erro ao atualizar')
                    break;
                case 404:
                    console.log('nota não encontrada')
                case 409:
                    console.log('nota já excluída')
                case 200:
                    console.log('deletou')
                    route.navigation.goBack()
                    break;
                default:
                    console.log(response.status);
                    break;
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <View
            style={styles.container}
        >
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
                            tryUpdate()
                            setDialogVisible(false)
                            break;
                        case 'exclude':
                            console.log('excluindo');
                            tryDelete()
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
            <Text style={styles.modal_header}>Nota</Text>
            <Text style={styles.text}>Data: {data}</Text>
            <Text style={styles.header}>Nota: {nota._id}</Text>
            <View style={styles.container_input}>
                <Text style={styles.text}>Valor: </Text>
                <TextInput style={styles.input_text}
                    keyboardType='decimal-pad'
                    maxLength={12}
                    onChange={
                        (e) => {
                            setEditValor(e.nativeEvent.text)
                        }
                    }>
                    {editValor}
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
                            setEditFornecedor(e.nativeEvent.text)
                        }
                    }>
                    {editFornecedor}

                </TextInput>
                <Text style={styles.text}>
                    <EvilIcons name='pencil' size={35} textAlign='right' />
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
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
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
    },
    header: {
        fontWeight: 'bold',
        fontSize: 24,
        display: 'none',
    },
    text: {
        color: '#fff',
        fontSize: 24,
        fontWeight: "bold",
    },
    input_text: {
        color: '#fff',
        fontSize: 24,
        fontWeight: "bold",
    },
    modal_header: {
        backgroundColor: '#000',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 24,

    },
    button_container: {
        flexDirection: 'row',
        width: '95%',
        alignSelf: 'center',
        marginTop: 25,
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

    teste: {
        flexDirection: 'row-reverse',
    },
});

export default NotaEdit;