import React, { PureComponent } from 'react';
import { Alert, View } from 'react-native';
import { Formik } from 'formik';
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { NavigationRoute, NavigationScreenProp } from 'react-navigation';

import IStore from '../../types/IStore';
import { login, logout } from '../../store/auth/actions';

import messages from '../../lib/messages';
import xmlToJson from "../../lib/xmlToJson";
import Input from '../../components/Input';
import Button from '../../components/Button';

interface IOwnProps {
  onSubmit: (values: ILoginFormProps) => void;
  navigation: NavigationScreenProp<NavigationRoute>;
}

interface IStateToProps {
  userName: string | null;
  serverName: string | null;
  ip: string | null;
}

interface IDispatchToProps {
  login: (
    ip: string,
    password: string,
    serverName: string,
    userName: string
  ) => void;
  logout: (userName: string) => void;
}

type IComponentProps = IOwnProps & IStateToProps & IDispatchToProps;

interface ILoginFormProps {
  server: string;
  user: string;
  password: string;
  ip: string;
}

const loginInitialValues: ILoginFormProps = {
  server: '',
  user: '',
  password: '',
  ip: '',
};

class SignIn extends PureComponent<IComponentProps> {
  static navigationOptions = {
    title: 'please sign in',
  };
  handleSubmit = async (values: ILoginFormProps) => {
    const { user, password } = values;
    if (user.trim() !== '' && password.trim() !== '') {
      const XMPP = (global as any).XMPP;
      XMPP.trustHosts(['jabb.im']);
      XMPP.connect(`${user}@jabb.im`, password);
      XMPP.on('error', (message) => {
        console.debug('ERROR:' + message);
      });
      XMPP.on('connect', () => console.debug('CONNECTED!'));
      XMPP.on('login', () => {
        this.props.navigation.navigate('App');
      });
      XMPP.on('loginError', (message) =>
        console.debug(xmlToJson(message))
      );
    } else {
      Alert.alert('Alert', 'please enter valid user name');
    }
  };

  render() {
    return (
      <Formik initialValues={loginInitialValues} onSubmit={this.handleSubmit}>
        {(props) => (
          <View>
            <Input
              onChangeText={props.handleChange('server')}
              onBlur={props.handleBlur('server')}
              value={props.values.server}
              placeholder={messages.serverName}
            />
            <Input
              onChangeText={props.handleChange('user')}
              onBlur={props.handleBlur('user')}
              value={props.values.user}
              placeholder={messages.userName}
              returnKeyType={'next'}
            />
            <Input
              onChangeText={props.handleChange('password')}
              onBlur={props.handleBlur('password')}
              value={props.values.password}
              placeholder={messages.password}
              returnKeyType={'next'}
            />
            <Input
              onChangeText={props.handleChange('ip')}
              onBlur={props.handleBlur('ip')}
              value={props.values.ip}
              placeholder={messages.ipOfLocalServer}
            />
            <Button
              onPress={props.handleSubmit}
              title={messages.save}
              color={'blue'}
            />
          </View>
        )}
      </Formik>
    );
  }
}

const mapStateToProps: MapStateToProps<IStateToProps, IOwnProps, IStore> = (
  state
) => {
  const ip = state.auth.ip;
  const serverName = state.auth.serverName;
  const userName = state.auth.userName;

  return { ip, serverName, userName };
};

const mapDispatchToProps: MapDispatchToProps<IDispatchToProps, IOwnProps> = (
  dispatch
) => ({
  login: (
    ip: string,
    password: string,
    serverName: string,
    userName: string
  ) => {
    dispatch(login(ip, password, serverName, userName));
  },
  logout: (userName: string) => {
    dispatch(logout(userName));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
