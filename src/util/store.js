import { createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import CVTemplate  from '../reducer/CVTemplate';
import CVInCategory from '../reducer/CVInCategory';

// eslint-disable-next-line import/imports-first
import 'babel-polyfill';

const Store = createStore(
    combineReducers({ 
        CVTemplate,
        CVInCategory
    }),
    applyMiddleware(logger, thunk)
);

export default Store;