import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  PermissionsAndroid,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useDispatch} from 'react-redux';
import {addPost} from '../Redux/PostSlice';

const Add = ({onPost}) => {
  const dispatch = useDispatch();
  const [photo, setPhoto] = useState({
    assets: [
      {
        fileName: '',
        fileSize: 1381344,
        height: 4624,
        // originalPath:
        //   'file:///data/user/0/com.redux_tookit_practise/cache/rn_image_picker_lib_temp_e53137e2-12c3-48ad-b5d0-bb10deacd251.jpg',
        type: 'image/jpeg',
        uri: '',
        width: 2084,
      },
    ],
  });
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(0);
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
        openCamera();
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const openCamera = async () => {
    const result = await launchCamera({mediaType: 'photo'});
    if (!result.didCancel) {
      setPhoto(result);
    }
  };

  const addItems = () => {
    dispatch(
      addPost({
        name: name,
        desc: desc,
        price: price,
        image: photo.assets[0].uri,
        category:
          selectedCategory == 0
            ? 'Car'
            : selectedCategory == 1
            ? 'House'
            : selectedCategory == 2
            ? 'Bike'
            : selectedCategory == 3
            ? 'Furniture'
            : selectedCategory == 4
            ? 'Smartphone'
            : 'Laptop',
      }),
    );
    onPost();
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Add Post</Text>
        </View>
        <TouchableOpacity
          style={styles.placeholderImage}
          onPress={() => {
            requestCameraPermission();
          }}>
          {photo.assets[0].uri == '' ? (
            <Image
              source={require('../images/placeholder.png')}
              style={styles.placeholderImage}
            />
          ) : (
            <Image
              source={{uri: photo.assets[0].uri}}
              style={styles.placeholderImage}
            />
          )}
        </TouchableOpacity>
        <TextInput
          style={styles.name}
          placeholder="Enter Item Name"
          value={name}
          onChangeText={txt => setName(txt)}
        />
        <TextInput
          style={styles.desc}
          placeholder="Enter Item description"
          value={desc}
          onChangeText={txt => setDesc(txt)}
        />
        <TextInput
          style={styles.price}
          placeholder="Enter Item Price"
          value={price}
          onChangeText={txt => setPrice(txt)}
        />
        <Text
          style={{
            fontSize: 20,
            marginTop: 20,
            marginLeft: 10,
            fontWeight: '900',
            color: '#000',
          }}>
          {'Category'}
        </Text>

        <TouchableOpacity
          onPress={() => {
            setSelectedCategory(0);
          }}
          style={{
            borderWidth: 1,
            height: 50,
            // alignItems: 'center',
            width: '90%',
            borderRadius: 15,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'flex-start',
            marginTop: 20,
            borderColor: selectedCategory == 0 ? 'blue' : 'black',
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '500',
              color: '#000',
              marginLeft: 20,
              width: 100,
            }}>
            Car
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelectedCategory(1);
          }}
          style={{
            borderWidth: 1,
            height: 50,
            // alignItems: 'center',
            width: '90%',
            borderRadius: 15,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'flex-start',
            marginTop: 20,
            borderColor: selectedCategory == 1 ? 'blue' : 'black',
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '500',
              color: '#000',
              marginLeft: 20,
              width: 100,
            }}>
            House
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelectedCategory(2);
          }}
          style={{
            borderWidth: 1,
            height: 50,
            // alignItems: 'center',
            width: '90%',
            borderRadius: 15,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'flex-start',
            marginTop: 20,
            borderColor: selectedCategory == 2 ? 'blue' : 'black',
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '500',
              color: '#000',
              marginLeft: 20,
              width: 100,
            }}>
            Bike
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelectedCategory(3);
          }}
          style={{
            borderWidth: 1,
            height: 50,
            // alignItems: 'center',
            width: '90%',
            borderRadius: 15,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'flex-start',
            marginTop: 20,
            borderColor: selectedCategory == 3 ? 'blue' : 'black',
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '500',
              color: '#000',
              marginLeft: 20,
              width: 100,
            }}>
            Furniture
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelectedCategory(4);
          }}
          style={{
            borderWidth: 1,
            height: 50,
            // alignItems: 'center',
            width: '90%',
            borderRadius: 15,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'flex-start',
            marginTop: 20,
            borderColor: selectedCategory == 4 ? 'blue' : 'black',
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '500',
              color: '#000',
              marginLeft: 20,
              width: 120,
            }}>
            Smartphone
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelectedCategory(5);
          }}
          style={{
            borderWidth: 1,
            height: 50,
            // alignItems: 'center',
            width: '90%',
            borderRadius: 15,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'flex-start',
            marginTop: 20,
            borderColor: selectedCategory == 5 ? 'blue' : 'black',
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '500',
              color: '#000',
              marginLeft: 20,
              width: 100,
            }}>
            Laptop
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnView}
          onPress={() => {
            addItems();
          }}>
          <Text style={styles.item}>Post My Item</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Add;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: '900',
    color: '#000',
    textAlign: 'center',
  },
  placeholderImage: {
    width: '90%',
    height: 130,
    alignSelf: 'center',
    marginTop: 10,
  },
  name: {
    borderWidth: 1,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 15,
    marginTop: 30,
  },
  desc: {
    borderWidth: 1,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 15,
    marginTop: 30,
  },
  price: {
    borderWidth: 1,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 15,
    marginTop: 30,
  },
  btnView: {
    height: 50,
    borderRadius: 15,
    marginTop: 30,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
    marginBottom: 100,
  },
  item: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '800',
    color: '#fff',
  },
});
