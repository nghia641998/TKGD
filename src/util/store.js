import { createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import CVTemplate  from '../reducer/CVTemplate';

// eslint-disable-next-line import/imports-first
import 'babel-polyfill';

const Store = createStore(
    combineReducers({ 
        CVTemplate
    }),
    applyMiddleware(logger, thunk)
);

export default Store;