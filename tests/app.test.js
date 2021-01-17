import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

import { action, createStore, StoreProvider } from 'easy-peasy';
const store = createStore({
  loggedIn: true,
  login: action((state, payload) => {
    state.loggedIn = true;
  }),
  logout: action(state => {
    state.loggedIn = false;
  }),
});

describe('App', () => {
  it('renders without crashing', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { name: 'Lnk Shrt' })).toBeInTheDocument();
  });
});

describe('Login', () => {
  it('Tests Login State', () => {
    const store = createStore({
      loggedIn: true,
      login: action((state, payload) => {
        state.loggedIn = true;
      }),
      logout: action(state => {
        state.loggedIn = false;
      }),
    });

    expect(store.getState().loggedIn).toEqual(true);
  });
});

describe('Login', () => {
  it('Shows login Form', () => {
    render(
      <StoreProvider store={store}>
        <LoginForm />
      </StoreProvider>
    );
    expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
  });
});

describe('Login', () => {
  it('Tests Login State Action', () => {
    const store = createStore({
      loggedIn: true,
      login: action((state, payload) => {
        state.loggedIn = true;
      }),
      logout: action(state => {
        state.loggedIn = false;
      }),
    });

    expect(store.getActions().login()).toMatchObject({ payload: undefined, type: '@action.login' });
  });
});

describe('Signup', () => {
  it('Shows signup Form', () => {
    render(
      <StoreProvider store={store}>
        <SignupForm />
      </StoreProvider>
    );
    expect(screen.getByRole('button', { name: 'Sign Up' })).toBeInTheDocument();
  });
});

describe('Logout', () => {
  it('Tests Logout State Action', () => {
    const store = createStore({
      loggedIn: true,
      login: action((state, payload) => {
        state.loggedIn = true;
      }),
      logout: action(state => {
        state.loggedIn = false;
      }),
    });

    expect(store.getActions().logout()).toMatchObject({
      payload: undefined,
      type: '@action.logout',
    });
  });
});
