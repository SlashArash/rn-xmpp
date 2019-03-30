import React from 'react';
import { AsyncStorage } from 'react-native';
import { NavigationScreenProp, NavigationRoute } from 'react-navigation';

import messages from '../../lib/messages';
import Wrapper from '../../components/Wrapper';
import Button from '../../components/Button';
import StyledText from '../../components/StyledText';

interface IComponentProps {
  navigation: NavigationScreenProp<NavigationRoute>;
}

interface IComponentStates {
  text: string;
}

export default class SettingsScreen extends React.Component<
  IComponentProps,
  IComponentStates
> {
  static navigationOptions = {
    title: messages.settings,
  };

  signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

  render() {
    return (
      <Wrapper>
        <StyledText>
          this app creates with love by ISEE co. it let you to control your
          smart home!
        </StyledText>
        <Button
          title={'change server info'}
          onPress={() => this.props.navigation.navigate('SingIn')}
        />
        <Button title={'sign me out'} onPress={this.signOutAsync} />
      </Wrapper>
    );
  }
}
