import { DOMParser } from 'xmldom';

const parser = new DOMParser();

const getXmlMessage = (msg: string): Document | undefined => {
  const parts = msg.split('&');

  if (parts.length != 7 || parts[0] != 'server' || !parts[5]) {
    return;
  }

  const xmlText: string = parts[5];
  const xml = parser.parseFromString(xmlText);
  return xml;
};

export default getXmlMessage;
