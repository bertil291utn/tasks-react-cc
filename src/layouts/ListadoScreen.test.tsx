import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { createStore, resetStore } from '../utils/MStore';
import ListadoScreen from './ListadoScreen';
import { MemoryRouter as Router } from 'react-router-dom';

import { fetchElements } from '../redux/listReducer';


describe('ListadoScreen Component', () => {
  let _store: any;

  beforeEach(() => {
    _store = createStore();
    resetStore(_store);
    _store.dispatch(fetchElements())
  });


  it('displays loading spinner while fetching data', async () => {

    render(
      <Provider store={_store}>
        <Router>
          <ListadoScreen />
        </Router>
      </Provider>
    );

    await waitFor(() => {
      expect(screen.getByText('Loading...')).toBeInTheDocument();
    });
  });

  it('displays the list items after fetching data', async () => {

    render(
      <Provider store={_store}>
        <Router>
          <ListadoScreen />
        </Router>
      </Provider>
    );

    await waitFor(() => {
      expect(screen.getByTestId('lists-name')).toBeInTheDocument();
    }, { timeout: 3000 });
  });

});
