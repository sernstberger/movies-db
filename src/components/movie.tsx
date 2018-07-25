import * as React from 'react';

// import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import ContentCard from '../components/ContentCard';

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

  // sidebar: {
  //   backgroundColor: '#fff',
  //   display: 'flex',
  //   width: 400,

  //   flexGrow: 0,
  //   // flex: 1,
  // },

  media: {
    height: 0,
    paddingTop: '56.25%',
    // maxHeight: 450,
    // maxWidth: 300,
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
  tagline: string;
  poster: string;
  backdrop: string;
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
      <div>
        <div className={this.props.classes.root}>
          {/* <div className={this.props.classes.sidebar}>
            <div>
              <img src={`https://image.tmdb.org/t/p/original${this.props.poster}`} style={{maxWidth: '100%'}} />

              <Typography variant="display1" gutterBottom>{this.props.title}</Typography>
              {this.props.tagline}

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
              
            </div> */}
          {/* </div> */}
          <div className={this.props.classes.main}>
            <Grid container spacing={16} justify="center">
              <Grid item xs={12} md={11}>
                <Grid container>
                  <Card style={{width: '100%'}}>
                    <div style={{position: 'relative'}}>
                      <CardMedia
                        className={this.props.classes.media}
                        image={`https://image.tmdb.org/t/p/original${this.props.backdrop}`}
                        // title={this.props.title}
                      />

                      <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${this.props.poster}`} style={{bottom: 225, position: 'absolute'}} />
                    </div>

                    <Typography variant="display1" gutterBottom>{this.props.title}</Typography>
                    <i>{this.props.tagline}</i>

                    <Typography variant="display1" gutterBottom>Storyline</Typography>
                    {this.props.overview}
                  </Card>
                  
                  <Grid item xs={12}>
                    cast
                    <Grid container spacing={32}>
                      {this.props.credits && this.props.credits.cast.slice(0, 12).map((person: any, i: number) => {
                        return (
                          <Grid item xs={3} sm={2} key={i}>
                            <ContentCard
                              title={person.name}
                              subtitle={person.character}
                              // link={`/movie/${thing.id}`}
                              link={`/${person.id}`}
                              poster={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${person.profile_path}`}
                            />
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
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(Movie)) as any;
