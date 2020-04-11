import { configureStore as configure } from '@reduxjs/toolkit';

import middlewares from 'state/store/middlewares';
import reducers from 'state/store/reducers';

export function configureStore() {
  const store = configure({
    middleware: middlewares,
    reducer: reducers
  });

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(reducers));
  }

  return store;
}

export default configureStore;
