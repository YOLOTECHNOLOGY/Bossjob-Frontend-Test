import { createStore, applyMiddleware } from 'redux';
import { reducers } from './reducers';
import 'regenerator-runtime/runtime';
import createSagaMiddleware from 'redux-saga';
import {mySaga} from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);
