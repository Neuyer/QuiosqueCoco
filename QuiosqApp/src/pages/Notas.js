import React, { useState, useEffect } from 'react';
import config from '../../config';
import { ScrollView, StyleSheet, TouchableOpacity, RefreshControl } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

import notasService from '../services/NotasService';
import Nota from '../components/Nota';

function Notas({ navigation }) {
    const [notas, setNotas] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [notaEdit, setNotaEdit] = useState('');

    const loadNotas = async (STORED_TOKEN) => {
        const response = await notasService.getNotas(STORED_TOKEN);
        setNotas(response.data)
        console.log(notas);
    }

    function wait(timeout) {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    }
    const onRefresh = () => {
        setRefreshing(true);
        loadNotas(config.STORED_TOKEN);
        wait(60).then(() => setRefreshing(false));
    }

    useEffect(() => {
        loadNotas(config.STORED_TOKEN);
    }, []);

    return (
        <>
            <ScrollView style={styles.scrollContainer}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh} />
                }
            >
                {notas.map(nota => (
                    <Nota key={nota._id}
                        navigation={navigation}
                        nota={nota}
                    />
                ))}
            </ScrollView>
            <TouchableOpacity style={styles.plusButton}
                onPress={()=>{navigation.navigate('NovaNota')}}
            >
                <EvilIcons name='plus' size={120} style={styles.plusIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.refreshButton}
                onPress={() => { loadNotas(config.STORED_TOKEN) }}
            >
                <EvilIcons name='refresh' size={120} style={styles.plusIcon} />
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    plusIcon: {
        backgroundColor: 'transparent',
        alignSelf: 'flex-end',
    },
    plusButton: {
        position: "absolute",
        bottom: 0,
        right: 0,
    },
    refreshButton: {
        position: "absolute",
        bottom: 0,
        left: 0,
    },
    scrollContainer: {
        maxHeight: 500,
    }
})
export default Notas;
