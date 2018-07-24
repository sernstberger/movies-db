import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import thunk from 'redux-thunk';

import Movie from './pages/index';

// import Header from './components/Header';
// import Home from './components/Home';
// import Results from './components/results';
// import Movie from './components/movie';
import reducers from './reducers';
// import registerServiceWorker from './registerServiceWorker';

declare global {
  interface Window { devToolsExtension: any; }
}

const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : (f: any) => f
));

// const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>

        {/* {<Header />  } */}
        {/* <Index /> */}
        
        <Switch >
          <Route path="/movie/:id" component={Movie} />
        </Switch>

      </BrowserRouter>
  </Provider>
, document.getElementById('root'));
// registerServiceWorker();
