import XMPP from 'react-native-xmpp';
import { Dispatch } from 'redux';

import getXmlMessage from './getXmlMessage';
import xmlToJson from './xmlToJson';
import { addPlaces } from '../store/places/actions';
import { normalizePlaces } from './storeUtils';

interface IXMPP {
  ip: string | null;
  password: string | null;
  server: string | null;
  user: string | null;
  dispatch: Dispatch | null;
  login: (loginListener: any, dispatch: Dispatch) => void;
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
  dispatch: null,
  login: (loginListener, dispatch) => {
    xmpp.dispatch = dispatch;
    const { ip, password, server, user } = xmpp;
    XMPP.on('connect', () => console.debug('CONNECTED!'));
    XMPP.on('login', () => loginListener(ip, password, server, user));
    XMPP.on('loginError', (message) => console.debug(message));
    XMPP.on('message', (message) => {
      const xml = getXmlMessage(message.body);
      if (xml) {
        const json = xmlToJson(xml);
        dispatch(addPlaces(normalizePlaces(json.settings.places as any)));
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

// class XMPPFactory {
//   ip: string | null = null;
//   password: string | null = null;
//   server: string | null = null;
//   user: string | null = null;

//   setCredential = (ip: string| null, password: string, server: string, user: string) => {
//     this.ip = ip;
//     this.password = password;
//     this.server = server;
//     this.user = user;
//   };

//   login = (loginListener) => {
//     XMPP.on('connect', () => console.debug('CONNECTED!'));
//     XMPP.on('login', () => loginListener(this.ip, this.password, this.server, this.user));
//     XMPP.on('loginError', (message) => console.debug(message));
//     XMPP.on('message', (message) => {
//       const xml = getXmlMessage(message.body);
//       if (xml) {
//         const json = xmlToJson(xml);
//         console.debug('rsv:' + JSON.stringify(json));
//       }
//     });

//     XMPP.connect(`${this.user}@jabb.im`, this.password);
//   };
// }

// export XMPPFactory;
