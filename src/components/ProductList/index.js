import React, { Component } from 'react';

/* Presentational */
import { View } from 'react-native';
import Product from './Product';

import styles from './styles';

export default class ProductList extends Component {
  state = {
    products: [
      {
        id: 1,
        image: 'https://t-static.dafiti.com.br/S4c_bGSzY3YFi8uaRwNGzFyM_qA=/fit-in/430x623/dafitistatic-a.akamaihd.net%2fp%2fdemocrata-sapato-social-couro-democrata-jazz-flex-preto-1318-6178223-1-zoom.jpg',
        title: 'Acne Studios',
        description: 'Andrea nappa dusty pink',
        price: 'R$50,00',
      },
      {
        id: 2,
        image: 'https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg',
        title: 'Acne Studios',
        description: 'Lain pop sky blue',
        price: 'R$70,00',
      },
      {
        id: 3,
        image: 'https://t-static.dafiti.com.br/S4c_bGSzY3YFi8uaRwNGzFyM_qA=/fit-in/430x623/dafitistatic-a.akamaihd.net%2fp%2fdemocrata-sapato-social-couro-democrata-jazz-flex-preto-1318-6178223-1-zoom.jpg',
        title: 'Acne Studios',
        description: 'Andrea nappa dusty pink',
        price: 'R$50,00',
      },
      {
        id: 4,
        image: 'https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg',
        title: 'Acne Studios',
        description: 'Lain pop sky blue',
        price: 'R$70,00',
      },
      {
        id: 5,
        image: 'https://t-static.dafiti.com.br/S4c_bGSzY3YFi8uaRwNGzFyM_qA=/fit-in/430x623/dafitistatic-a.akamaihd.net%2fp%2fdemocrata-sapato-social-couro-democrata-jazz-flex-preto-1318-6178223-1-zoom.jpg',
        title: 'Acne Studios',
        description: 'Andrea nappa dusty pink',
        price: 'R$50,00',
      },
      {
        id: 6,
        image: 'https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg',
        title: 'Acne Studios',
        description: 'Lain pop sky blue',
        price: 'R$70,00',
      },
      {
        id: 7,
        image: 'https://t-static.dafiti.com.br/S4c_bGSzY3YFi8uaRwNGzFyM_qA=/fit-in/430x623/dafitistatic-a.akamaihd.net%2fp%2fdemocrata-sapato-social-couro-democrata-jazz-flex-preto-1318-6178223-1-zoom.jpg',
        title: 'Acne Studios',
        description: 'Andrea nappa dusty pink',
        price: 'R$50,00',
      },
      {
        id: 8,
        image: 'https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg',
        title: 'Acne Studios',
        description: 'Lain pop sky blue',
        price: 'R$70,00',
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        { this.state.products.map(product => <Product key={product.id} product={product} />) }
      </View>
    );
  }
}
