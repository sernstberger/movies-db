import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
import { createStore } from 'redux';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
// import promise from 'redux-promise';
// import * as promise from 'redux-promise';

import Movie from './pages/index';

// import Header from './components/Header';
// import Footer from './components/Footer';
// import Home from './components/Home';
// import Results from './components/results';
// import Movie from './components/movie';
import reducers from './reducers';
// import registerServiceWorker from './registerServiceWorker';

// import "./styles/app.css";

const store = createStore(reducers);

// const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
          <div>
              {/* {<Header />  } */}
              {/* <Index /> */}
              
              <Switch >
                  <Route path="/movie/:id" component={Movie} />
              </Switch>
              
              {/* <Footer /> */}
          </div>
      </BrowserRouter>
  </Provider>
, document.getElementById('root'));
// registerServiceWorker();
