import React from  'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return <View style={styles.background}>
        <Feather name="search" size={35} style={styles.iconStyle}/>
        <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            placeholder="Search"
            value={term}
            //onChangeText={ newTerm => onTermChange(newTerm) }
            onChangeText={ onTermChange }
            onEndEditing={ onTermSubmit }
        />
    </View>
};

const styles = StyleSheet.create({
    background:{
        marginTop:10,
        backgroundColor: "#F0eeee",
        height: 50,
        marginHorizontal: 15,
        marginBottom: 10,
        borderRadius: 5,
        flexDirection: 'row'
    },

    input: {
        flex: 1,
        fontSize: 18
        
    },

    iconStyle:{
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;