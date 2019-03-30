import * as React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading } from 'expo';
import { Feather } from '@expo/vector-icons';

import AppNavigator from '../../navigation/AppNavigator';
import { cacheFonts, cacheImages } from '../../utilites/caching';

interface IComponentStates {
  isReady: boolean;
}

class Root extends React.Component<any, IComponentStates> {
  state = {
    isReady: false,
  };

  loadResourcesAsync = async () => {
    const imageAssets = cacheImages([
      require('../../../assets/images/robot-dev.png'),
    ]);
    const fontAssets = cacheFonts([
      (Feather as any).font,
      { Shabnam: require('../../../assets/fonts/Shabnam/Shabnam.ttf') },
    ]);
    await Promise.all([...imageAssets, ...fontAssets]);
    return Promise.resolve();
  };

  handleLoadingError = (error: Error) => {
    console.warn(error);
  };

  handleFinishLoading = () => {
    this.setState({ isReady: true });
  };

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onError={this.handleLoadingError}
          onFinish={this.handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          <StatusBar barStyle="dark-content" />
          <AppNavigator />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Root;
