import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import { searchRobots, requestRobots } from './reducers';
import 'tachyons';

const loggerMiddleware = store => next => action => {
  console.log('Previous state:', store.getState());
  console.log('Dispatching action:', action);
  const result = next(action);
  console.log('New state:', store.getState());
  return result;
};

const rootReducer = combineReducers({ searchRobots, requestRobots })
const store = configureStore({
  reducer: rootReducer,
  middleware: [thunkMiddleware, loggerMiddleware]
});

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();





// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import { Provider } from 'react-redux';
// import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
// import { createLogger } from 'redux-logger';
// import './index.css';
// import App from './containers/App';
// import reportWebVitals from './reportWebVitals';
// import { searchRobots } from './reducers';
// import 'tachyons';
// import { composeWithDevTools } from 'redux-devtools-extension';


// const logger = createLogger();
// const store = configureStore({
//   reducer: searchRobots
// }, composeWithDevTools(applyMiddleware(logger)));


// createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );


// reportWebVitals();