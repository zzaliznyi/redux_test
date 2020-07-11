import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import { logger } from 'react-native-logs';
  
const log = logger.createLogger();



export default class Photo extends React.Component{
   constructor(props)
   {
       super(props);
   }
   componentDidMount(){
       
   }
   componentWillReceiveProps(){
       log.info("Received!"); //if launches => SUCCESS
   }
   
    render(){
        return(
            <View >
               <Text>{this.props.photos}</Text> 
            </View>
        )

    }
}



const Photo_item = (url,title) =>{
    return(
        <View style={styles.item_container}>
            <Image style={styles.image} source={{uri :url}} style={styles.image}/>
            <Text style = {styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    data_container : {
        flex: 1,
        flexDirection : "row",
        flexWrap : "wrap",
        justifyContent : "space-around",
        width: "100%"
    },
    item_container : {
        width : 200,
        height: "auto",
        backgroundColor: "white",
        margin : "auto"

    },
    image : {
        width : 200,
        height : 200
    },
    title :{
        textAlign : "center",
        fontSize : 20,
        fontWeight : "400"
    }
})