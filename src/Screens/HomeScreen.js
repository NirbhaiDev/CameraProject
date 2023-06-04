import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios'; 

const HomeScreen = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const postImage = ()=>{
    let config = {
        headers: {
        'Content-Type': 'multipart/form-data',
        'Accept': 'application/json'
        }
    };


  }

  const launchCamera = async()=>{
    ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,
      }).then(image => {
        console.log(image);
        let name = image.path.replace(/^.*[\\\/]/, '');
        let uri = image.path;
        let type= image.mine;

        let data = new FormData();
        data.append('profileImage', {
            uri: uri,
            type: type,
            name: name
        })
  
     
        let postData = {
            postData: data
        }


        // let axiosConfig = {
        //     headers:
        // }



      });
  }

  return (
    <SafeAreaView style={{height: windowHeight}}>
      <Header />
      {/* Header part */}
      <TouchableOpacity onPress={launchCamera} style={styles.photoContainer}>
        <Text style={styles.photoContainerPlaceholder}>Photo from cam</Text>
      </TouchableOpacity>
      {/* input container */}
      <View style={styles.topInputContainer}>
        <View style={styles.textInputPairContainer}>
          <View style={{width: 100}}>
            <Text style={{padding: 10, textAlign: 'center'}}>Device ID</Text>
          </View>
          <TextInput style={styles.textInputStyler} />
        </View>
        <View style={styles.textInputPairContainer}>
          <View style={{width: 100}}>
            <Text style={{padding: 10, textAlign: 'center'}}>Lat</Text>
          </View>
          <TextInput style={styles.textInputStyler} />
        </View>
        <View style={styles.textInputPairContainer}>
          <View style={{width: 100}}>
            <Text style={{padding: 10, textAlign: 'center'}}>Long</Text>
          </View>
          <TextInput style={styles.textInputStyler} />
        </View>
      </View>
      {/* Submit button caller */}
      <TouchableOpacity style={styles.submitButtonCaller}>
        <Text style={{textAlign: 'center', padding: 10}}>SAVE</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  photoContainer: {
    height: 150,
    width: 150,
    borderWidth: 1,
    borderColor: '#000',
    marginVertical: 25,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoContainerPlaceholder: {
    fontSize: 18,
    color: '#000',
  },
  textInputPairContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputStyler: {
    width: '70%',
    borderColor: '#000',
    borderWidth: 1,
    color: 'red',
    fontSize: 16,
  },
  topInputContainer: {
    flexDirection: 'column',
    paddingVertical: '12%',
    marginRight: 20,
  },
  submitButtonCaller: {
    width: 100,
    borderWidth: 1,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
    marginBottom: 50,
  },
});

export default HomeScreen;
