import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { logger } from 'react-native-logs';
import {store} from './modules/photoAction';
import Container from './modules/photoAction';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PhotoItem from './src/PhotoItem';
const Stack = createStackNavigator();
const log = logger.createLogger();
 
export default function App() {
  return (
    <View style={styles.container}>
    <Provider store= {store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Gallery">
            <Stack.Screen name="Gallery" component={Container} />
            <Stack.Screen name="Photo" component={PhotoItem} />
          </Stack.Navigator>
        </NavigationContainer>
        </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5F9EA0'
  }
  
});
