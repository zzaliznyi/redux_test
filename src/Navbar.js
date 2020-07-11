import React from 'react';
import { View ,Text,StyleSheet} from 'react-native';

export const Navbar = (props) => {
    return(
        <View style={styles.navbar}>
            <Text style={styles.text}>Gallery</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    navbar:{
        display : "flex",
        alignItems : "center",
        justifyContent : "center",
        width: "100%",
        height : 80,
        backgroundColor : "black"
    },
    text : {
        fontSize: 30,
        color : "white",
        fontWeight : "600"
    }
})