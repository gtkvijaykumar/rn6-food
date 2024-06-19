import React from "react";
import {View,StyleSheet,Text,TextInput} from "react-native";
import { Feather } from '@expo/vector-icons';

const SearchBar = ({data, onChange, onSubmit}) => {
 return (<View style={styles.backgroundStyle}>
    <Feather name="search" size={24} color="black" />
    <TextInput style={styles.inputStyle}  
        placeholder="Search" 
        value={data} 
        onChangeText={ onChange}
        onEndEditing={ onSubmit}
        autoCapitalize="none"
    />
 </View>
 );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor : 'lightgray',
        padding : 10,
        margin : 10,
        height: 45,
        flexDirection : 'row'
    },
    inputStyle : {
        flex : 1,
        alignSelf: 'center'
    }
});

export default SearchBar;