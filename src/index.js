import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import Root from './components/root'
import registerServiceWorker from './registerServiceWorker';
import initStore from './store/configureStore'

const store = initStore();

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();
