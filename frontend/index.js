import React from 'react';
import { render } from 'react-dom';
import { history } from './store/configureStore';
import { createStore } from 'redux';
import Root from './containers/Root';
import rootReducer from './reducers';

import './assets/stylesheets/base.scss';

import './assets/stylesheets/base.scss';

const store = createStore(
  rootReducer,
  undefined,
);

render(
    <Root store={store} history={history} />,
    document.getElementById('root')
);
