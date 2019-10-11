import React from 'react';
import {View, StyleSheet, AsyncStorage, Image} from 'react-native';
import {
  Button,
  Text,
  Form,
  Item,
  Input,
  Label,
} from 'native-base';

// Make each screen a class that extends React.Component, its easier to
// work with rather than making them functions.

export default class LoginHome extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props){
    super(props)
    this.state ={
      name: 'bobert',
      rank: 'Cap',
      email: 'None',
      id: '0',
      organization: 'None',
      points: '0',
      username: '',
      password: '',
    }
  }

  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.formView}>
          <Form>
            <Item stackedLabel>
              <Label style={{color: 'white', paddingBottom: 10}}>Username</Label>
              <Input style={{color: 'white', fontSize: 20}} />
            </Item>
            <Item stackedLabel>
              <Label style={{color: 'white'}}>Password</Label>
              <Input
                secureTextEntry= {true}
                style={{color: 'white', fontSize: 20}}
              />
            </Item>
          </Form>
        </View>
        <View style={styles.buttonView}>
          <Button large block light rounded onPress={this._signInAsync}>
            <Text
              style={{color: 'black', fontWeight: 'bold', fontSize: 15}}>
              Sign in
            </Text>
          </Button>
        </View>
      </View>
    );
  }

  // This is what authenticates the sign in
  _signInAsync = async () => {
  try {
    await AsyncStorage.setItem('signedIn', 'true');
    this.props.navigation.navigate('Profile', {
      email: this.state.email,
      id: this.state.id,
      rank: this.state.rank,
      points: this.state.points
    });
  } catch (error) {
    console.log('Data was not saved')
  }
};

}

const styles = StyleSheet.create({
  pic: {
    width: 230,
    height: 250,
    alignSelf: 'center',
    marginTop: '32%',
  },
  buttonView: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: '17%',
    marginRight: '15%',
  },
  mainView: {
    backgroundColor: '#782F40',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  logoView: {
    flex: 2,
  },
  formView: {
    marginTop: '40%',
    marginBottom: '10%',
  },
});


