import React, { useState} from "react";
import {View,StyleSheet,Text, ScrollView} from "react-native";
import SearchBar from "../components/SearchBar";
import { FlatList } from "react-native-gesture-handler";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
   const [term, setTerm] = useState('');
   const [searchApi,results,errMsg] = useResults();

   const filterResultsByPrice = (price) => {
      return results.filter( res => res.price == price);
   };

 return (
 <>
      <SearchBar 
         data={term} 
         onChange = { newTerm => setTerm(newTerm)}
         onSubmit = { () => searchApi()} >
      </SearchBar>
      { errMsg ? <Text>{errMsg}</Text> : null}
    <ScrollView>
      <ResultsList  results = {filterResultsByPrice("$")} title="Cost Effective"/>
      <ResultsList  results = {filterResultsByPrice("$$")} title="Bit Pricier" />
      <ResultsList  results = {filterResultsByPrice("$$$")} title="Big Spender" />
    </ScrollView>

 </>
 );
};

const styles = StyleSheet.create({
   viewStyle : {
       marginLeft : 10,
       flex : 1
   }
});

export default SearchScreen;