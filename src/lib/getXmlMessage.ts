import { DOMParser } from 'xmldom';

const parser = new DOMParser();

const getXmlMessage = (msg: string): Document | undefined => {
  if (!msg) {
    return;
  }

  const xml = parser.parseFromString(msg);
  return xml;
};

export default getXmlMessage;
