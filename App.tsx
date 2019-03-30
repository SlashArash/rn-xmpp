import * as React from 'react';
import { Provider } from 'react-redux';

import store from './src/store/configureStore';
import Root from './src/components/Root';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}

export default App;
