
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Navbar} from './src/Navbar';
import Photo from './src/Photo';
import { Provider } from 'react-redux';
import PhotosReducer from './modules/photoReducer';
import { logger } from 'react-native-logs';
import {store} from './modules/photoAction';
import Gallery from './modules/fetchPhotos';

const log = logger.createLogger();
 
export default function App() {
  return (
    <View style={styles.container}>
      <Navbar/>
      <Provider store ={store}>
        <Photo/>
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
