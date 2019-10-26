import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultsDetail = ({ result }) => {
    return (
        <View style={ styles.container }>
            <Image source={{ uri: result.image_url }} style={ styles.image } />
            <Text style={ styles.name }>{result.name}</Text>
            <Text style={ styles.name }>{ result.rating } Stars, { result.review_count } Reviews</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
       marginHorizontal: 15,
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5
    },
    name:{
        fontWeight: 'bold',
        //original fontSize = 14
    }
});

export default ResultsDetail;

