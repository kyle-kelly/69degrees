import React from 'react';
import { Button, Image, Platform, View, Text, TextInput } from 'react-native';
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

  const {params} = navigation.state;

  return {
    headerTitle: <LogoTitle />,
    headerRight: (
      <Button
      title = "+"
      color = '#fff'
      onPress = {() => params.handleSave && params.handleSave()}/>
    ) }
  }


saveDetails = () => {
  alert('Save Details');
}

componentDidMount () {
  this.props.navigation.setParams({handleSave: () => this.props.navigation.navigate('Location')});
}

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

class AddLocationScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      title: 'Add a Location',
      /* These values are used instead of the shared configuration! */
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
    };
  };

  render() {
    /* 2. Read the params from the navigation state */
    const { params } = this.props.navigation.state;
    const itemId = params ? params.itemId : null;
    const otherParam = params ? params.otherParam : null;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Where do you want to 69?</Text>
        <TextInput
          style={{height: 40}}
          placeholder="Type zip code here!"
          onChangeText={(text) => this.setState({text})}
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Location: {
      screen: AddLocationScreen,
    },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#6c1ef4',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
