import { combineReducers } from 'redux';

// // import resultsReducer from './results-reducer';
// import filmReducer from './film-reducer';
// // import personReducer from './person-reducer';

// const rootReducer = combineReducers({
//     // results: resultsReducer,
//     activeFilm: filmReducer,
//     // personList: personReducer,
// });

import {
  FETCH_MOVIE,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_FAILURE,
  } from '../actions';

// export default rootReducer;

// import { FETCH_MOVIE } from '../actions';

// let defaultState = {
//   movie: {
//     title: 'red',
//     overview: '',
//   }
// };

const defaultState = {
  isFetching: false,
  item: {},
  error: {}
};

// const mainReducer = (state = defaultState, action: any) => {
//   if (action.type === 'FETCH_MOVIE') {
//     // tslint:disable-next-line:no-console
//     console.log('yepppp');
//     return{
//       // ...state,
//       movie: {
//         title: action.title,
//         overview: action.overview
//       }
//     };
//   } else {
//       // tslint:disable-next-line:no-console
//       console.log('nope');
//       return {
//         ...state
//       };
//   }
// };

const movieDetail = (state = defaultState, action: any) => {
  switch (action.type) {
    case FETCH_MOVIE:
      return Object.assign({}, state, {
        isFetching: true
      });
    case FETCH_MOVIE_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        item: action.data
      });
    case FETCH_MOVIE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.data
      });
    default:
      return state;
  }
};

const mainReducer = combineReducers({
  // movieList,
  // castList,
  // trailerList,
  movieDetail,
  // starDetail,
  // input,
  // routing: routerReducer
});

export default mainReducer;