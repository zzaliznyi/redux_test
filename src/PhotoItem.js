import React from 'react';
import {View, Image, StyleSheet, Text,TouchableOpacity} from 'react-native';
import { logger } from 'react-native-logs';
import { Dimensions } from "react-native";
import AutoHeightImage from 'react-native-auto-height-image';

const width = Dimensions.get('window').width; //full width
const log = logger.createLogger();
export default class PhotoItem extends React.Component{
    constructor(props)
    {
        super(props);
        log.info("Landing....")
    }
    componentDidMount()
    {
        log.info("Url " + this.props.route.params.url)
    }
    render(){
        return(
            <View style={styles.photo_container}>
                <AutoHeightImage source = {{uri: this.props.route.params.url}} width = {width} />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    photo_container : {
        width: width,
        height : 400
        
    },
    photo : {
        width: width,
        
        
    }
})