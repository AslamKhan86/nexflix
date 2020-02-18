import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});

const ContainerView = ({ children }) => (
  <SafeAreaView style={styles.container}>
    {children}
  </SafeAreaView>
);

ContainerView.defaultProps = {
  children: null,
};

ContainerView.propTypes = {
  children: PropTypes.node,
};



export default ContainerView;
