import { createStore, action, persist } from 'easy-peasy';

const store = createStore(
  persist({
    loggedIn: false,
    login: action((state, payload) => {
      state.loggedIn = true;
    }),
    logout: action(state => {
      state.loggedIn = false;
    }),
  })
);

export default store;
