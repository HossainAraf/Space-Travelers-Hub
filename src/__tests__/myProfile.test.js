import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import MyProfile from '../components/MyProfile';

const mockStore = configureMockStore([]);

describe('MyProfile Component', () => {
  it('renders joined missions and rockets', () => {
    const initialState = {
      missions: {
        missions: [
          {
            id: 1,
            name: 'Mission 1',
            joined: true,
          },
          {
            id: 2,
            name: 'Mission 2',
            joined: false,
          },
        ],
      },
      rockets: {
        rockets: [
          {
            id: 1,
            name: 'Rocket 1',
            reserved: true,
          },
          {
            id: 2,
            name: 'Rocket 2',
            reserved: false,
          },
        ],
      },
    };

    const store = mockStore(initialState);

    const { getByText, queryByText } = render(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    );

    expect(getByText('Mission 1')).toBeInTheDocument();

    expect(queryByText('Mission 2')).toBeNull();

    expect(getByText('Rocket 1')).toBeInTheDocument();

    expect(queryByText('Rocket 2')).toBeNull();
  });
});
