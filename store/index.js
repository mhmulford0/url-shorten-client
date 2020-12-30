import { createStore, action, persist } from 'easy-peasy';

const store = createStore(
  persist({
    userInfo: {},
    login: action((state, payload) => {
      state.userInfo = payload;
    }),
  })
);

export default store;
