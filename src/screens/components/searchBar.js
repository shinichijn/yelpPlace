import React from 'react';
import {Text, StyleSheet, View, KeyboardAvoidingView} from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import { TextInput } from 'react-native-gesture-handler';



const SearchBar = ({searchTerm, onChange, onTermSubmit}) => {
    return (
    
            <View style = {styles.searchBar}>
            <FontAwesome name="search" style = {styles.iconStyle} />
            <TextInput 
            style = {styles.inputStyle} 
            placeholder = 'Search Your Place'
            value = {searchTerm}
            onChangeText = {onChange}
            autoCapitalize = 'none'
            autoCorrect = {false}
            onEndEditing = {onTermSubmit}
            returnKeyLabel='Done' 
  returnKeyType='done' 
            />

               


            
        </View>
    


        
    );
    
};

const styles = StyleSheet.create({
    searchBar: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal:15,
        marginVertical: 10,
        flexDirection:'row'
    },
    inputStyle: {
        flex:1
    },
    iconStyle : {
        fontSize : 35,
        color: 'black',
        alignSelf: 'center',
        marginHorizontal: 10
    }

});


export default SearchBar;
