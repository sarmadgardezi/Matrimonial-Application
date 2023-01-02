import { createStore, applyMiddleware } from 'redux';
import profileReducer from '../reducers/profileReducer';
// import thunk from 'redux-thunk';

export default function configureStore() {
  return createStore(
    profileReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // applyMiddleware(thunk)
  );
}
