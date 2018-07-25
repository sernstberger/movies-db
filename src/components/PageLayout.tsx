import * as React from 'react';

import { Link } from 'react-router-dom';

// import Card from '@material-ui/core/Card';
// import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { Theme } from '@material-ui/core/styles';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import withRoot from '../withRoot';

const styles = (theme: Theme) => createStyles({
  // root: {
  //   // display: 'flex',
  //   // flexWrap: 'wrap',
  //   transition: '250ms all',

  //   '&:hover': {
  //     transform: 'scale(1.05)',
  //   },
  // },
});

interface Props extends WithStyles<typeof styles> {
  children: any;
}

class Layout extends React.Component<Props, {}> {

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
    // console.log('ahh', this.props.releaseDate);

    return (
      <div>
        <AppBar position="static" color="default">
          <Toolbar>
            <Link to="/">
              <Typography variant="title" color="inherit">
                Cineplex
              </Typography>
            </Link>
          </Toolbar>
        </AppBar>
        <Grid container justify="center" style={{ padding: 16 }}>
          <Grid item xs={12} lg={11} xl={10}>
            {this.props.children}
          </Grid>
        </Grid>
        footer
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(Layout)) as any;
