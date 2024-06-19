import React from "react";
import { Text, View,StyleSheet, FlatList, Image } from "react-native";

const ResultDetail = ({result}) => {
    return (
        <View style={styles.viewStyle}>
            <Image style={styles.imageStyle} source={{uri : result.image_url}} />
            <Text style={styles.nameStyle}>{result.name}</Text>
            <Text style={styles.ratingStyle} >{result.rating} Stars, {result.review_count} reviews</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle : {
        marginHorizontal : 10
    },
    textStyle : {
        fontWeight : 'bold',
        fontSize: 18
    },
    imageStyle :{
        width : 250,
        height: 200,
        borderRadius : 4
    },
    nameStyle: {
        fontSize : 16,
        fontWeight: 'bold'
    },
    ratingStyle : {
        fontSize : 12
    }
});

export default ResultDetail;