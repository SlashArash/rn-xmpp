import XMPP from 'react-native-xmpp';
import { Dispatch } from 'redux';

import { updateTime } from '../store/app/actions';
import { updateDevice } from '../store/devices/actions';
import { addPlaces } from '../store/places/actions';
import getXmlMessage from './getXmlMessage';
import xmlToJson from './xmlToJson';
import { normalizePlaces } from './storeUtils';

interface IXMPP {
  ip: string | null;
  password: string | null;
  server: string | null;
  user: string | null;
  lastUpdateTime: string | null;
  dispatch: Dispatch | null;
  login: (loginListener: any, dispatch: Dispatch) => void;
  message: (msg: string) => void;
  disconnect: () => void;
  getPlaces: () => void;
  getDeviceStatus: (deviceNumber: string) => void;
  packMessage: (message: string, type: string) => string;
  updateDeviceStatus: (msg: string) => void;
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
  lastUpdateTime: null,
  dispatch: null,
  login: (loginListener, dispatch) => {
    xmpp.dispatch = dispatch;
    const { ip, password, server, user } = xmpp;
    XMPP.on('connect', () => console.debug('CONNECTED!'));
    XMPP.on('login', () => loginListener(ip, password, server, user));
    XMPP.on('loginError', (message) => console.debug(message));
    XMPP.on('message', (message) => {
      const parts = message.body.split('&');
      const msg = parts[5];
      const msgType = parts[4];
      xmpp.lastUpdateTime = parts[3];
      if (parts.length === 7 || parts[0] === 'server') {
        if (msgType === '0') {
          const xml = getXmlMessage(msg);
          if (xml) {
            const json = xmlToJson(xml);
            dispatch(addPlaces(normalizePlaces(json.settings.places as any)));
            dispatch(updateTime(xmpp.lastUpdateTime));
          }
        } else if (msgType === '2') {
          const msgParts = msg.split('-');
          const deviceNumber = msgParts[2];
          dispatch(
            updateDevice(
              deviceNumber,
              msgParts[3],
              msgParts[4],
              msgParts[5],
              msgParts[6],
              msgParts[7]
            )
          );
        }
        console.debug(msg);
      }
    });

    XMPP.connect(`${user}@jabb.im`, password);
  },
  message: (msg: string) => {
    XMPP.message(msg, `${xmpp.server}@jabb.im`);
  },
  disconnect: () => {
    XMPP.disconnect();
    XMPP.removeListeners();
  },
  getPlaces: () => {
    const msg = `client&${xmpp.user}&${xmpp.server}&00:00:00&0&&client`;
    xmpp.message(msg);
  },
  getDeviceStatus: (deviceNumber: string) => {
    const message = `K-S-${deviceNumber}-0-0-48-48-0-0`;
    const packedMessage = xmpp.packMessage(message, '2');
    xmpp.message(packedMessage);
  },
  packMessage: (message: string, type: string): string => {
    return `client&${xmpp.user}&${xmpp.server}&${
      xmpp.lastUpdateTime
    }&${type}&${message}&client`;
  },
  updateDeviceStatus: (msg: string) => {
    const message = xmpp.packMessage(msg, '2');
    xmpp.message(message);
  },
};
