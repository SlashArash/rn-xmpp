import XMPP from 'react-native-xmpp';
import getXmlMessage from './getXmlMessage';
import xmlToJson from './xmlToJson';

interface IXMPP {
  ip: string | null;
  password: string | null;
  server: string | null;
  user: string | null;
  login: (loginListener: any) => void;
  message: (msg: string) => void;
  disconnect: () => void;
}

XMPP.trustHosts(['jabb.im']);
XMPP.on('error', (message) => {
  console.debug('ERROR:' + message);
});

export const xmpp: IXMPP = {
  ip: null,
  password: null,
  server: null,
  user: null,
  login: (loginListener) => {
    const { ip, password, server, user } = xmpp;
    XMPP.on('connect', () => console.debug('CONNECTED!'));
    XMPP.on('login', () => loginListener(ip, password, server, user));
    XMPP.on('loginError', (message) => console.debug(message));
    XMPP.on('message', (message) => {
      const xml = getXmlMessage(message.body);
      if (xml) {
        const json = xmlToJson(xml);
        console.debug('rsv:' + JSON.stringify(json));
      }
    });

    XMPP.connect(`${user}@jabb.im`, password);
  },
  message: (msg) => {
    XMPP.message(
      'client&iseeco61&issecoserver6&00:00:00&0&&client',
      `iseecoserver6@jabb.im`
    );
  },
  disconnect: () => {
    XMPP.disconnect();
    XMPP.removeListeners();
  },
};
