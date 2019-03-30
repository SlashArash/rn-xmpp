import { Image } from 'react-native';
import {Asset, Font, RequireSource} from 'expo';

export const cacheImages = (images: Array<string | RequireSource>) =>{
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
};

export const cacheFonts = (fonts: Font.FontMap[]) => {
  return fonts.map(font => Font.loadAsync(font));
};
