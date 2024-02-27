import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {addWishlist} from '../Redux/WishlistSlice';

const listItems = [
  {title: 'Car', icon: require('../images/sedan.png')},
  {title: 'House', icon: require('../images/house.png')},
  {title: 'Bike', icon: require('../images/motor-sports.png')},
  {title: 'Furniture', icon: require('../images/furniture.png')},
  {title: 'Smartphone', icon: require('../images/smartphone.png')},
  {title: 'Laptop', icon: require('../images/video-lesson.png')},
];

const Home = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const items = useSelector(state => state.post);
  console.log(items);
  return (
    <ScrollView nestedScrollEnabled style={styles.container}>
      <Text style={styles.logo}>Olx Clone</Text>
      <View style={styles.searchBox}>
        <TextInput placeholder={'Search Items Here...'} style={styles.input} />
        <Image
          source={require('../images/search.png')}
          style={styles.searchIcon}
        />
      </View>
      <View style={{marginTop: 20, marginLeft: 20}}>
        <Text style={{fontSize: 16, fontWeight: '800', color: '#000'}}>
          What is you looking for
        </Text>
      </View>
      <View>
        <FlatList
          data={listItems}
          numColumns={3}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={styles.listItem}
                onPress={() => {
                  navigation.navigate('ItemsByCategory', {
                    category: item.title,
                  });
                }}>
                <Image source={item.icon} style={styles.img} />
                <Text style={styles.listTitle}>{item.title}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <Text style={styles.postedHeading}>Posted Items</Text>
      <FlatList
        data={items.data}
        renderItem={({item, index}) => {
          return (
            <View style={styles.listContainer}>
              <View style={{flexDirection: 'row'}}>
                <Image source={{uri: item.image}} style={styles.postedImage} />
                <View>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.desc}>{item.desc}</Text>
                  <Text style={styles.price}>{'INR.' + item.price}</Text>
                  <Text style={styles.price}>{item.category}</Text>
                </View>
                <TouchableOpacity
                  style={{
                    position: 'absolute',
                    left: '86%',
                    width: '100%',
                  }}
                  onPress={() => {
                    dispatch(addWishlist(item));
                  }}>
                  <Image
                    source={require('../images/wishlist.png')}
                    style={{width: 30, height: 30}}
                  />
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    fontSize: 40,
    color: '#3a77ff',
    marginTop: 20,
    marginLeft: 20,
    fontWeight: '800',
  },
  searchBox: {
    width: '90%',
    height: 50,
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 14,
    marginLeft: 15,
    width: '86%',
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
  listItem: {
    width: Dimensions.get('screen').width / 3,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: '#CAD3C8',
    margin: 2,
  },
  img: {
    width: 60,
    height: 60,
  },
  listTitle: {
    fontSize: 15,
    marginTop: 5,
    fontWeight: '700',
    color: '#000',
  },
  postedHeading: {
    fontSize: 18,
    fontWeight: '800',
    color: '#000',
    marginLeft: 20,
    marginTop: 20,
  },
  postedImage: {
    width: 80,
    height: 80,
    marginLeft: 20,
  },
  listContainer: {
    borderRadius: 14,
    width: '90%',
    height: 100,
    alignSelf: 'center',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: 10,
  },
  name: {
    fontSize: 18,
    color: '#000',
    marginLeft: 10,
  },
  desc: {
    marginLeft: 10,
  },
  price: {
    marginLeft: 10,
    color: 'green',
  },
});
