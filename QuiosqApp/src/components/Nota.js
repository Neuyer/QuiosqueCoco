
import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import { StyleSheet } from 'react-native';

import NotaModal from '../pages/NotaEdit';


function Nota({ navigation, nota }) {
    const [viewModal, setViewModal] = useState()
    const [notaId, setNotaId] = useState('')
    const data = nota.data.split('T')[0];

    const showModal = () => {
        setViewModal(true)
    }

    const editNota = () => {

        navigation.navigate('NotaEdit', nota)
    };

    return (
        <TouchableOpacity style={styles.card}
            onPress={
                editNota
            }
        >
            <Text style={styles.header}>Nota: {nota._id}</Text>
            <Text style={styles.text}>Valor: R$: {nota.valor}</Text>
            <Text style={styles.text}>Data: {data}</Text>
            <Text style={styles.text}>Fornecedor: {nota.fornecedor}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        alignSelf: "center",
        textAlignVertical: 'center',
        backgroundColor: '#000',
        borderRadius: 10,
        flex: 0.4,
        marginTop: 10,
        padding: 10,
        width: '90%',
        minHeight: 5,
        position: 'relative',
        bottom: 0,
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
        marginTop: 7,
    },
    modal: {
        backgroundColor: '#ff3',
        alignContent: 'center',
        alignItems: "center",
    },
    modal_header: {
        backgroundColor: '#000',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 24,
        padding: 15,
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
    teste: {
        backgroundColor: '#000'
    },
});

export default Nota;