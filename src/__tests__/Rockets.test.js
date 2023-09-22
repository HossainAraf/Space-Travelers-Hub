import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import store from '../redux/store'; // Import your Redux store
import Rockets from '../components/Rockets'; // Import the component you want to test

test('Rockets component renders without errors', () => {
  render(
    <Provider store={store}>
      <Rockets />
    </Provider>,
  );
  // Your test assertions go here
});
