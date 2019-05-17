import React, { Component } from 'react';
import {View, ScrollView } from 'react-native';

import Header from './components/Header';
import SubHeader from './components/SubHeader';
import ProductList from './components/ProductList/index';
import Tabs from './components/Tabs';

export default class App extends Component {
  render() {
    return (
      <View style={{flex:1,backgroundColor:'#F8F8FA'}}>
          <Header/>
          <ScrollView>
            <SubHeader/>
            <ProductList/>
          </ScrollView>
          <Tabs/>
      </View>
    )
  }
}
