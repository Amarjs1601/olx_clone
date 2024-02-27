import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Home from '../tabs/Home';
import Search from '../tabs/Search';
import Wishlist from '../tabs/Wishlist';
import User from '../tabs/User';
import Add from '../tabs/Add';

const HomeScreen = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <View style={styles.container}>
      {selectedTab == 0 ? (
        <Home />
      ) : selectedTab == 1 ? (
        <Search />
      ) : selectedTab == 2 ? (
        <Add
          onPost={() => {
            setSelectedTab(0);
          }}
        />
      ) : selectedTab == 3 ? (
        <Wishlist />
      ) : (
        <User />
      )}
      <View style={styles.bottomTab}>
        <TouchableOpacity
          onPress={() => {
            setSelectedTab(0);
          }}>
          <Image
            source={require('../images/home.png')}
            style={[
              styles.homeImg,
              {tintColor: selectedTab == 0 ? 'blue' : 'black'},
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelectedTab(1);
          }}>
          <Image
            source={require('../images/search.png')}
            style={[
              styles.homeImg,
              {tintColor: selectedTab == 1 ? 'blue' : 'black'},
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelectedTab(2);
          }}>
          <Image
            source={require('../images/add.png')}
            style={[
              styles.homeImg,
              {tintColor: selectedTab == 2 ? 'blue' : 'black'},
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelectedTab(3);
          }}>
          <Image
            source={require('../images/wishlist.png')}
            style={[
              styles.homeImg,
              {tintColor: selectedTab == 3 ? 'blue' : 'black'},
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelectedTab(4);
          }}>
          <Image
            source={require('../images/user.png')}
            style={[
              styles.homeImg,
              {tintColor: selectedTab == 4 ? 'blue' : 'black'},
            ]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomTab: {
    width: '100%',
    height: 70,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
  },
  homeImg: {
    width: 30,
    height: 30,
  },
});
