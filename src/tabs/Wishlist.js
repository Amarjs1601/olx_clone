import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {removeWishListItem} from '../Redux/WishlistSlice';

const Wishlist = () => {
  const listItems = useSelector(state => state.wishlist);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <FlatList
        data={listItems.data}
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
              </View>
              <TouchableOpacity
                onPress={() => {
                  dispatch(removeWishListItem(item));
                }}
                style={{position: 'absolute', left: '86%', width: '100%'}}>
                <Image
                  source={require('../images/remove.png')}
                  style={{width: 30, height: 30}}
                />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Wishlist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  searchBox: {
    width: '90%',
    height: 50,
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
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
});
