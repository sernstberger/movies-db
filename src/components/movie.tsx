import * as React from 'react';

// import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { Theme } from '@material-ui/core/styles';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import withRoot from '../withRoot';

const styles = (theme: Theme) => createStyles({
  root: {
    // textAlign: 'center',
    // paddingTop: theme.spacing.unit * 20,

    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',

    minHeight: '100%',
  },

  sidebar: {
    backgroundColor: '#fff',
    display: 'flex',
    width: 300,

    flexGrow: 0,
    // flex: 1,
  },
  
  main: {
    backgroundColor: '#efe9e8',
    display: 'flex',
    // width: 500,

    // flexGrow: 0,
    flex: 1,
  }
});

interface Props extends WithStyles<typeof styles> {
  title: string;
  poster: string;
  overview: string;
  credits: any;
  genres: any;
  releaseDate: string;
  runtime: number;
}

type State = {
  open: boolean;
};

class Movie extends React.Component<Props, State> {
  state = {
    open: false,
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    // tslint:disable-next-line:no-console
    console.log('ahh', this.props.releaseDate);
    return (
      <div className={this.props.classes.root}>

        <div className={this.props.classes.sidebar}>
          <div>
            {/* path: {this.props.poster} */}
            <img src={`https://image.tmdb.org/t/p/original${this.props.poster}`} style={{maxWidth: '100%'}} />

            <Typography variant="display1" gutterBottom>{this.props.title}</Typography>

            Category
            {this.props.genres && this.props.genres.map((genre: any, i: number) => {
              return (
                <div key={i}>
                  {genre.name}
                </div>
              );
            })}

            Release date
            {this.props.releaseDate}

            <hr />

            Director

            Writer

            <hr />
            Runtime
            {this.props.runtime}
            
          </div>
        </div>
        <div className={this.props.classes.main}>
          <Grid container spacing={16} justify="center">
            <Grid item xs={12} md={10}>
              <Grid container>
                <Grid item xs={4}>
                 kladfj
                </Grid>
                <Grid item xs={4}>
                  adsklfjsdaf
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="display1" gutterBottom>storyline</Typography>
                  {this.props.overview}
                  <hr />

                  cast
                  <Grid container spacing={32}>
                    {this.props.credits && this.props.credits.cast.slice(0, 12).map((person: any, i: number) => {
                      return (
                        <Grid item xs={2} key={i}>
                          <img src={`https://image.tmdb.org/t/p/original${person.profile_path}`} style={{maxWidth: '100%'}} />
                          {/* {person.profile_path} */}
                          {person.name}
                          {person.character}
                        </Grid>
                      );
                    })}
                  </Grid>

                  <hr />

                  photos

                  video
                </Grid>
              </Grid>
            </Grid>
          </Grid>

        </div>
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(Movie)) as any;
