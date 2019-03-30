import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import XMPP from 'react-native-xmpp';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json',
  };
  componentDidMount() {
    XMPP.on('message', (message) => console.debug('MESSAGE:' + JSON.stringify(message)));
    XMPP.on('iq', (message) => console.debug('IQ:' + JSON.stringify(message)));
    XMPP.on('presence', (message) => console.debug('PRESENCE:' + JSON.stringify(message)));
    XMPP.on('error', (message) => console.debug('ERROR:' + message));
    XMPP.on('loginError', (message) => console.debug('LOGIN ERROR:' + message));
    XMPP.on('login', (message) => console.debug('LOGGED!'));
    XMPP.on('connect', (message) => console.debug('CONNECTED!'));
    XMPP.on('disconnect', (message) => console.debug('DISCONNECTED!'));

// trustHosts (ignore self-signed SSL issues)
// Warning: Do not use this in production (security will be compromised).
    XMPP.trustHosts(['jabb.im']);

    XMPP.connect('slasharash@jabb.im', '*');

    XMPP.message('Hello world!', 'kadkhodaei@jabb.im');

    XMPP.disconnect();
  }
  componentWillMount() {
    XMPP.removeListeners();
  }

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <ExpoConfigView />;
  }
}
