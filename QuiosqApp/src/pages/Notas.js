import React, { useState, useEffect } from 'react';
import config from '../../config';
import { ScrollView, StyleSheet } from 'react-native';

import notasService from '../services/NotasService';
import Nota from '../components/Nota';

function Notas({ navigation }) {
    const [notas, setNotas] = useState([]);

    useEffect(() => {
        const loadNotas = async (STORED_TOKEN) => {
            const response = await notasService.getNotas(STORED_TOKEN);
            setNotas(response.data)
        }
        loadNotas(config.STORED_TOKEN);
    }, [])

    return (
        <ScrollView>
            {notas.map(nota => (
                <Nota key={nota._id} nota={nota} />
            ))}
        </ScrollView>
    );
}

export default Notas;