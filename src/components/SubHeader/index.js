import React from 'react';
import { View, Image,Text } from 'react-native';

import styles from './styles';
import Button from './../Button';


const SubHeader = () => (
  <View style={styles.container}>
    <Image
      style={styles.avatar}
      source={{uri:'https://akns-images.eonline.com/eol_images/Entire_Site/2015518/rs_634x1024-150618132947-634.esc-scarlett-johansson-beauty2.jw.61815.jpg?fit=inside|900:auto&output-quality=90'}}
    />
    <View style={styles.profileInfo}>
      <Text style={styles.name}>Caique Ferreira</Text>
      <Text style={styles.bio}>Head de programação da minha própria empresa e conta.</Text>
      <View style={styles.buttonContainer}>
        <Button style={styles.firstButton}>Mensagem</Button>
        <Button type='outline'>Seguir</Button>
      </View>
    </View>
  </View>
);

export default SubHeader;
