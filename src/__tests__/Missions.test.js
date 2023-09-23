import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'; // Import Redux Thunk middleware
import Missions from '../components/Missions';

const mockStore = configureMockStore([thunk]);

const initialState = {
  missions: {
    missions: [
      {
        id: 1,
        name: 'Mission 1',
        description: 'Description 1',
        joined: true,
      },
    ],
  },
};
const store = mockStore(initialState);

test('Missions component renders without errors', () => {
  render(
    <Provider store={store}>
      <Missions />
    </Provider>,
  );
});
