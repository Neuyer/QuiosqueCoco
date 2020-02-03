import React, { useState, useEffect } from 'react';
import config from '../../config';
import { View, TextInput, Button, Text } from 'react-native';
import { StyleSheet } from 'react-native';

import notasService from '../services/NotasService';
import Nota from '../components/Nota';

function Notas() {
    const [notas, setNotas] = useState([]);

    useEffect(() => {
        const loadNotas = async (STORED_TOKEN) => {
            const response = await notasService.getNotas(STORED_TOKEN);
            setNotas(response.data)
            console.log(response.data)
        }
        loadNotas(config.STORED_TOKEN);
    }, [])
    return (
        <>
            <Nota />
        </>
    );
}

export default Notas;