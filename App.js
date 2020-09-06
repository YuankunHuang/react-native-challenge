import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Alert, TouchableWithoutFeedback, Keyboard, FlatList, SafeAreaView } from 'react-native';

// font
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Header from './components/Header';
import Card from './components/Card';
import { fruitData, vegetableData, seafoodData } from './data/mockData';

// fetch fonts
const fetchFonts = () => {
  Font.loadAsync({
    'PingFangSC-bold': require('./assets/fonts/PingFang-SC-Bold.ttf'),
    'PingFangSC-medium': require('./assets/fonts/PingFang-SC-Medium.ttf'),
    'PingFangSC-regular': require('./assets/fonts/PingFang-SC-Regular.ttf'),
    'PingFangSC-semibold': require('./assets/fonts/PingFang-SC-Semibold.ttf'),
    'SFProDisplay-bold': require('./assets/fonts/FontsFree-Net-SFProDisplay-Bold.ttf'),
    'SFProDisplay-light': require('./assets/fonts/FontsFree-Net-SFProDisplay-Light-1.ttf'),
    'SFProDisplay-semibold': require('./assets/fonts/FontsFree-Net-SFProDisplay-Semibold.ttf'),
  });
};

const foodList = [...fruitData, ...vegetableData];
const meatList = [];
const seafoodList = [...seafoodData];

export default function App() {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [currentCategory, setCurrentCategory] = useState('Food');
  const [currentList, setCurrentList] = useState(foodList);
  const [filterKeyword, setFilterKeyword] = useState('');
  const [filteredList, setFilteredList] = useState([...foodList]);

  // load prerequisite data
  if (!isDataLoaded) {
    return (
      <AppLoading
        startAsync={() => {
          fetchFonts();
        }}
        onFinish={setIsDataLoaded.bind(this, true)}
        onError={err => Alert.alert(err)}
      />
    );
  }

  const chooseCategoryHandler = category => {
    setCurrentCategory(category);
    let targetList;
    switch (category) {
      case 'Food':
        targetList = foodList;
        break;
      case 'Meat':
        targetList = meatList;
        break;
      case 'Seafood':
        targetList = seafoodList;
        break;
    }

    setCurrentList(targetList);

    setFilteredList(
      filterKeyword === '' ?
      targetList : 
      targetList.filter(item => item.name.startsWith(filterKeyword)));
  };

  const keywordChangeHandler = text => {
    setFilterKeyword(text);
    setFilteredList(
      text === '' ?
      currentList : 
      currentList.filter(item => item.name.startsWith(text)))
  };

  const showItem = itemData => {
    return (
      <Card id={itemData.item.id} name={itemData.item.name} description={itemData.item.description} timestamp={itemData.item.timestamp} />
    );
  };

  return (
    <View>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Header onChooseCategory={chooseCategoryHandler} chosenCategory={currentCategory} onKeywordChange={keywordChangeHandler} />
      </TouchableWithoutFeedback>
      <SafeAreaView>
        <FlatList
          style={styles.list}
          keyExtractor={(item, index) => item.id}
          data={filteredList}
          renderItem={showItem}
        />
      </SafeAreaView>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    flex: 1,
    paddingVertical: 5,
    alignSelf: 'center'
  },
  list: {
    paddingVertical: 10,
    flexGrow: 1
  }
});
