import React from 'react';
import { Button, Image, Platform, View, Text, TextInput, StyleSheet } from 'react-native';
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
          onPress = {() => params.handleAdd && params.handleAdd()}
        />
      )
    }
  }

  componentDidMount () {
    this.props.navigation.setParams({handleAdd: () => this.props.navigation.navigate('Location')});
  }

  render() {
    /* Read the params from the navigation state */
    //const { params } = this.props.navigation.state;
    //const zipCode = params ? params.zipCode : null;
    const { navigation } = this.props;
    const zipCode = navigation.getParam('zipCode', 'NO ZIP');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Text>zipCode: {JSON.stringify(zipCode)}</Text>
      </View>
    );
  }
}

class AddLocationScreen extends React.Component {
  
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
      title: 'Add a Location',
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
    };
  };

  render() {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Where do you want to 69°?</Text>
        <TextInput
          style = {styles.input}
          keyboardType = 'numeric'
          placeholder = "Type zip code here!"
          maxLength = {8}
          onChangeText = {(text)=> this.setState({text})}
        />
        <Button
          title="Add Location!"
          onPress={() => this.props.navigation.navigate('Home', { zipCode: this.state.text } )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
   }
})

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
        backgroundColor: '#40E0D0',
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
