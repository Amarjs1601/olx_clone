import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {useRoute} from '@react-navigation/native';

const ItemsByCategory = () => {
  const listItems = useSelector(state => state.post);
  const route = useRoute();
  const [itemList, setItemList] = useState([]);
  useEffect(() => {
    let tempData = listItems.data;
    temp = [];
    tempData.map((item, index) => {
      if (item.category == route.params.category) {
        temp.push(item);
      }
    });
    setItemList(temp);
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={itemList}
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
            </View>
          );
        }}
      />
    </View>
  );
};

export default ItemsByCategory;

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
});
