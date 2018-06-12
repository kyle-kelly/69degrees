import React from 'react';
import { Button, Image, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('./Yin_and_Yang_flip.png')}
        style={{ width: 30, height: 30 }}
      />
    );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: '69 Degrees',
      headerRight: 
        <Button
            title="+"
            onPress={ () => navigation.navigate('Location')} 
        />
    };
  };

  render() {
    const { navigation } = this.props;
    const zipCode = navigation.getParam('zipCode', 'NO-ZIP');
    const otherParam = navigation.getParam('otherParam', 'some default value');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

class AddLocationScreen extends React.Component {
  static navigationOptions = {
    title: 'Add Location',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Search"
          onPress={() => {
            this.props.navigation.navigate('Home', {
              zipCode: 86,
              otherParam: 'anything you want here',
            });
          }}
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Location: AddLocationScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}