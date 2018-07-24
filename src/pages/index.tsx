import * as React from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMoviesList } from '../actions';

// import Movie from '../components/movie';

interface ReduxStateProps {
  // create a type for this eventually
  listOfThings: {
    results: any;
  };
}

interface ReduxDispatchProps {
  movieList: (foo: string) => void;
}

type HomeProps =
& ReduxStateProps
& ReduxDispatchProps;

class HomePage extends React.Component<HomeProps, {}> {

// class Movie extends React.Component {
  componentDidMount() {
    // this.props.fetchMovie(this.props.match.params.id);
    this.props.movieList('popular');

    window.scrollTo(0, 0);
  }
    
  render() {

      return(
        <React.Fragment>
          {this.props.listOfThings && this.props.listOfThings.results.map( (thing: any, i: number) => {
            return <div key={i}>
              <Link to={`/movie/${thing.id}`}>
                {thing.title}
              </Link>
              <br />
              {thing.backdrop_path}
              <hr />
            </div>;
          })}
        </React.Fragment>
      );
    }
}

// state needs typings
const mapStateToProps = (state: any) => {
  return {
    listOfThings: state.movieList.items,
  };
};

// Dispatch not working in current react-redux, so using any, but should be changed
const mapDispatchToProps = (dispatch: any, ownProps: HomeProps): ReduxDispatchProps => ({
  movieList: (foo: string) => dispatch(fetchMoviesList(foo)),
});

export default connect<ReduxStateProps, ReduxDispatchProps, HomeProps>
(mapStateToProps, mapDispatchToProps)(HomePage);
