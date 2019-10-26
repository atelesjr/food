import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import{ withNavigation } from 'react-navigation';
import ResultDetail from './resultsDetail';


const ResultsList = ({title, results, navigation}) => {

    if (!results.length) {
        return null;
    }
    
    return (
        <View style={styles.container}>
            <Text style={ styles.title }>{ title }</Text>
            <FlatList
                //horizontal={true}  -- when parameter is equal to true just mention it.
                horizontal 
                showsHorizontalScrollIndicator={false}
                data={ results }
                keyExtractor={ ( result ) => result.id }
                renderItem={ ({ item }) => {
                    return (
                        <TouchableOpacity onPress={ ()=> navigation.navigate('ResultsShow', { id: item.id }) }>
                            <ResultDetail result={item} />
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom:5
    }
});

export default withNavigation(ResultsList);