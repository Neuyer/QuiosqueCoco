import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { StyleSheet } from 'react-native';

function Nota(dados) {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Nota:</Text>
            <Text style={styles.text}>Data:</Text>
            <Text style={styles.text}>Valor:</Text>
            <Text style={styles.text}>Fornecedor:</Text>
            <Text style={styles.text}>Está pago:</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        backgroundColor: '#ccb845',
        borderRadius: 10,
        flex: 0.4,
        marginTop: 10,
        padding: 10,
        width: '90%',
    },
    header: {
        fontWeight: 'bold',
        fontSize: 24,

    },
    text: {
        borderTopWidth: 0.3,
        borderColor: '#fff',
        color: '#fff',
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 7,
    }
});

export default Nota;