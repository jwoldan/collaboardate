import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';

const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
  // Don't load logger in production
  const createLogger = require(`redux-logger`);
  const logger = createLogger();
  middlewares.push(logger);
}

export default(preloadedState ={}) => (
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, ...middlewares)
  )
);
