import React, { useState } from  'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/searchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/resultsList';

const SearchScreen = () => {
    const [ term, setTerm ] = useState('');
    const [ searchApi, results, errorMessage ] = useResults();
    
    const filterPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
            
        });
    }

    return (
        <View style={ styles.container }>
            <SearchBar 
                term={term} 
                onTermChange={ setTerm }
                onTermSubmit={ () => searchApi(term) }
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null }
            <ScrollView >
                <ResultsList 
                    results={ filterPrice('$') } title="Const Effective" 
                />
                <ResultsList 
                    results={ filterPrice('$$') } title="Bit Pricier" 
                />
                <ResultsList 
                    results={ filterPrice('$$$') } title="Big Spender"
                />
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
        //marginLeft: 10
    },
});

export default SearchScreen;