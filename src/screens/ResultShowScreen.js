import react,{useState,useEffect} from "react";
import { Text,View, StyleSheet, FlatList,Image } from "react-native";
import yelp from "../api/yelp";

const ResultShowScreen = ({navigation}) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async (id) =>{
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };
    useEffect( () => {
        getResult(id); 
    }, []);

    if(!result){
        return null;
    }

    return( 
    <View>
        <Text>{result.name}</Text>
        <FlatList 
            data={result.photos}
            keyExtractor={(photo) => photo}
            renderItem={({item}) => {
                return <Image style= {styles.imageStyle} source = {{uri: item}}/>
            }}
        />
    </View>
    );
};

const styles = StyleSheet.create({
    imageStyle :{
        width : 300,
        height: 200
    }
});

export default ResultShowScreen;