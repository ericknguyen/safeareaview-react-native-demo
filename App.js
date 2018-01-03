import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

const App = () => (
  <View style={styles.container}>
    <SafeAreaView style={styles.nav}>
      <Text style={styles.text}>Nav bar</Text>
    </SafeAreaView>
    <SafeAreaView style={styles.content}>
      <Text style={styles.textLight}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae diam consectetur nunc sollicitudin feugiat a sollicitudin velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus a dignissim orci. In commodo, velit ac hendrerit laoreet, mauris sapien mollis nulla, at convallis orci diam eu purus. Cras pharetra turpis ac massa laoreet, at consequat lorem pharetra. Pellentesque ac leo ut dui congue eleifend sed sed erat. Nunc at iaculis elit. Duis congue, odio sit amet rutrum imperdiet, quam arcu gravida leo, eu dapibus risus ex et ante. Fusce pellentesque interdum neque, a sodales lacus consequat id. Nunc faucibus lobortis blandit. Proin porttitor commodo pellentesque.
      </Text>
    </SafeAreaView>
    <SafeAreaView style={styles.tab}>
      <Text style={styles.text}>Tab bar</Text>
    </SafeAreaView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2374AB',
    flex: 1,
    alignItems: 'center',
  },
  text: {
    color: '#000',
    fontWeight: '600',
    fontSize: 18,
    paddingVertical: 10,
  },
  textLight: {
    color: '#000',
    fontSize: 15,
    padding: 10,
  },
  content: {
    backgroundColor: '#fff',
    marginTop: 20,
  },
  nav: {
    backgroundColor: '#fff',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  tab: {
    backgroundColor: '#fff',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
  },
});

export default App;
