import * as React from 'react';

// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMovie } from '../actions';

interface ReduxStateProps {
  // create a type for this eventually
  activeFilm: {
    title: string;
  };
}

interface ReduxDispatchProps {
  FooOnYou: (id: number) => void;
}

type MovieProps =
& ReduxStateProps
& ReduxDispatchProps;

export class Movie extends React.Component<MovieProps, {}> {

// class Movie extends React.Component {
  componentDidMount() {
    // this.props.fetchMovie(this.props.match.params.id);
    this.props.FooOnYou(286217);

    window.scrollTo(0, 0);
  }
    
  // componentDidUpdate(prevProps) {
  //     // If this address doesn't match the last address, run the fetchMovie function with the new address
  //     if(this.props.match.params.id !== prevProps.match.params.id)
  //         this.props.fetchMovie(this.props.match.params.id);
  // }
    
  render() {
      
      // if(this.props.activeFilm.data === undefined)
      //     return <div>Loading</div>
      
      // if(this.props.personList.data === undefined)
      //     return <div>Loading</div>
      
      // const film = this.props.activeFilm.data;
      // const poster = film.poster_path;
      // const src = poster === null ? 'http://via.placeholder.com/185x278' : `https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster}`;
      // const videoId = `https://www.youtube.com/embed/${film.videos.results[0].key}`;

      // const people = this.props.personList.data;
      // console.log(people);

      // tslint:disable-next-line:no-console
      // console.log(film);

      return(
        <div className="container-fluid">
          <div className="main">
            <div className="row justify-content-center">
              <div className="col-3 col-xl-4">
                {/* <img src={src} alt={film.title} className="img-fluid poster" /> */}
                something
              </div>
            </div>
          </div>
        </div>
      );
    }
}

// state needs typings
const mapStateToProps = (state: any) => {
  return {
    activeFilm: state.activeFilm,
  };
};

// Dispatch not working in current react-redux, so using any, but should be changed
const mapDispatchToProps = (dispatch: any, ownProps: MovieProps): ReduxDispatchProps => ({
  FooOnYou: (id: number) => dispatch(fetchMovie(id)),
});

export default connect<ReduxStateProps, ReduxDispatchProps, MovieProps>
(mapStateToProps, mapDispatchToProps)(Movie);
