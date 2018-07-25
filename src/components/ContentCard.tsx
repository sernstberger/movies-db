import * as React from 'react';

import { Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { Theme } from '@material-ui/core/styles';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import withRoot from '../withRoot';

const styles = (theme: Theme) => createStyles({
  root: {
    // display: 'flex',
    // flexWrap: 'wrap',
    transition: '250ms all',

    '&:hover': {
      transform: 'scale(1.05)',
    },
  },

  link: {
    display: 'block',
    textDecoration: 'none',
  },

  media: {
    height: 0,
    paddingTop: '150%',
    // maxHeight: 450,
    // maxWidth: 300,
  }
});

interface Props extends WithStyles<typeof styles> {
  title: string;
  subtitle?: string;
  poster: string;
  link: string;
}

class ContentCard extends React.Component<Props, {}> {

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

    // const MyLink = (props: any) => <Link to={this.props.link} className={this.props.classes.link} {...props} />;

    return (
      <div className={this.props.classes.root}>
        <Link to={this.props.link} className={this.props.classes.link} >
          <Card>
            <CardMedia
              className={this.props.classes.media}
              image={this.props.poster}
              title={this.props.title}
            />
          </Card>
          <Typography variant="subheading" gutterBottom align="center">{this.props.title}</Typography>
          {this.props.subtitle && <Typography variant="body1" gutterBottom align="center">{this.props.subtitle}</Typography>}
        </Link>
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(ContentCard)) as any;
