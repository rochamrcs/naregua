import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const CustomDrawerContent = (props) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.title}>Menu</Text>
    </View>
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1C1F',
  },
  header: {
    paddingTop: 45,
    backgroundColor: '#1E1C1F',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
});

export default CustomDrawerContent;
