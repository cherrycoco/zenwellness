import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import treatmentSelector from './reducers/treatmentSelector';
import commentSelector from './reducers/commentSelector';

const logger = ({ getState }) => {
  return next => action => {
    console.log('will dispatch', action);
    const returnValue = next(action);
    console.log('state after dispatch', getState());
    return returnValue;
  }
}

const initialState = {
  treatmentSelector: {
    treatment: 'massage'
  },
  commentSelector: {
    comment: 'first'
  }
}

const mainReducer = combineReducers({treatmentSelector, commentSelector});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(mainReducer, initialState, composeEnhancers(applyMiddleware(logger)));

// const store = createStore(treatmentSelector, {treatment: 'massage'}, applyMiddleware(logger));

export default store;