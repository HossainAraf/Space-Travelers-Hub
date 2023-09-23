import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Rockets from '../components/Rockets';

test('Rockets component renders without errors', () => {
  render(
    <Provider store={store}>
      <Rockets />
    </Provider>,
  );
});
