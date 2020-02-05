
import React from 'react';
import { ScrollView, Text } from 'react-native';
import { StyleSheet } from 'react-native';

function Nota({ nota }) {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Nota: {nota._id}</Text>
            <Text style={styles.text}>Data: {nota.data}</Text>
            <Text style={styles.text}>Valor: {nota.valor}</Text>
            <Text style={styles.text}>Fornecedor: {nota.fornecedor}</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        backgroundColor: '#666',
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