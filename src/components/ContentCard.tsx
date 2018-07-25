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
    // maxHeight: 450,
    // maxWidth: 300,
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

    const MyLink = (props: any) => <Link to={this.props.link} {...props} />;

    return (
      <div>
        <Card className={this.props.classes.root} component={MyLink}>
          <CardMedia
            className={this.props.classes.media}
            image={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${this.props.poster}`}
            title="Contemplative Reptile"
          />
        </Card>
        <Typography variant="headline" gutterBottom>{this.props.title}</Typography>
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(ContentCard)) as any;
