import {FlatList, Image, StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

const Search = () => {
  const listItems = useSelector(state => state.post);
  const [itemList, setItemList] = useState(listItems.data);
  const [text, setText] = useState('');

  const filterList = txt => {
    let tempList = listItems.data;
    let temp = tempList.filter(item => {
      return item.name.toLowerCase().match(txt.toLocaleLowerCase());
    });
    setItemList(temp);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <TextInput
          placeholder={'Search Items Here...'}
          style={styles.input}
          value={text}
          onChangeText={txt => {
            setText(txt);
            filterList(txt);
          }}
        />
        <Image
          source={require('../images/search.png')}
          style={styles.searchIcon}
        />
      </View>
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

export default Search;

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
