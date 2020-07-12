import React from 'react';
import {View, Image, StyleSheet, Text,TouchableOpacity, ScrollView} from 'react-native';
import { logger } from 'react-native-logs';
import AutoHeightImage from 'react-native-auto-height-image';
import { Dimensions } from "react-native";

const width = Dimensions.get('window').width; //full width

const log = logger.createLogger();



export default class Photo extends React.Component{
   constructor(props)
   {
       super(props);
       this.state = {photos : []};

   }
   componentDidMount(){
    this.props.getPhotos();
   }
   componentWillReceiveProps(nextProps){
       const pure_photos = this.props.getState().photos.data;
       const temp_photos = [];
       let iterator = 0;
       while(1)
       {
           if(!pure_photos[iterator]) break;
           const url = pure_photos[iterator].urls.raw;
           const title = pure_photos[iterator].alt_description;
           const author = pure_photos[iterator].user.name;
            temp_photos.push(<Photo_item url={url} title={title} author = {author} navigation={this.props.navigation}/>);
            iterator++;
       }
       this.setState(state => ({
           photos: temp_photos
       }))
   }

    render(){
        return(
            <ScrollView>
                <View style={styles.data_container}> 
                    {this.state.photos}
                </View>
            </ScrollView>
        )

    }
}



class Photo_item extends React.Component{
    constructor(props)
    {
        super(props);
        this.press = this.press.bind(this);
    }
    press(){
        this.props.navigation.navigate('Photo',{url : this.props.url});
   }

   
    render(){
        return(
        
        <TouchableOpacity style={styles.item_container} onPress={this.press}>
            <AutoHeightImage source={{uri: this.props.url}} style = {styles.image}></AutoHeightImage>
            <Text style = {styles.author}>Author : {this.props.author} </Text>
            <Text style = {styles.title}>{this.props.title}</Text>
        </TouchableOpacity>
    )
    }
    
}

const styles = StyleSheet.create({
    data_container : {
        flex: 1,
        flexGrow : 1,
        flexDirection : "row",
        flexWrap : "wrap",
        justifyContent : "space-around",
        width: width,
        
    },
    item_container : {
        width : width/2.1,
        height: "auto",
        backgroundColor: "white",
        marginTop: '1%',
        

    },
    image : {
        width : width/2.1,
        height : 200
    },
    title :{

        fontSize : 15,
        fontWeight : "500",
        padding: 5
        
    },
    author : {
        textAlign: 'center',
        fontSize : 15,
        fontWeight : "bold"
    }
})