import React from 'react';
import { useState } from 'react';
import {View, Text, Button, StyleSheet,KeyboardAvoidingView } from 'react-native';
import SearchBar from './components/searchBar';
import api from '../api/api';

const SearchScreen = () => {

    const [searchTerm , setSearchTerm] = useState('');
    const [result , setResult] = useState([]);

    const searchApi = async () => {
        try {
            const res = await api.get('/search', {
                params: {
                   limit: 50,
                   term : searchTerm,
                   location: 'la' 
                }
            });
            setResult(res.data.businesses);
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
       
    }

    return <View>
        <SearchBar 
        searchTerm = {searchTerm} 
        onChange = {setSearchTerm} 
        onTermSubmit = {() => {searchApi()}}/>
        <View>
        <Button  title='good'></Button>
        <Text>{searchTerm}</Text>
        <Text>{result.length}</Text>
        {result.length == 0 ? null : <Text>{result[0].rating}</Text>}
        </View>

        
    </View>
}

const styles = StyleSheet.create({
    
    
});

export default SearchScreen;