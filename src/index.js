import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import iphones from './store/iphones'

function rootReducer(store=iphones, action) {
    return store
}

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));