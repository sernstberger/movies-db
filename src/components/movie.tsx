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
    textAlign: 'center',
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
  foo: number;
  bar: boolean;
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
    return (
      <div className={this.props.classes.root}>

        <div className={this.props.classes.sidebar}>
          <div>
            <img src="https://source.unsplash.com/random/300x400" />

            <Typography variant="display1" gutterBottom>Movie Title</Typography>

            yooooo Category

            Release date

            Director

            Writer
          </div>
        </div>
        <div className={this.props.classes.main}>
          <Grid container spacing={16} justify="center">
            <Grid item xs={12} md={10}>
              
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut suscipit urna. Maecenas eu orci nec lorem gravida dapibus. In volutpat ligula erat, quis sagittis orci faucibus nec. Duis vitae augue vitae dui scelerisque placerat sed sed tellus. Nunc gravida orci a varius pellentesque. Morbi condimentum dolor convallis, tempus nulla vel, sagittis turpis. Integer lobortis lorem eu malesuada vestibulum. Pellentesque vel volutpat nibh. Quisque risus ipsum, hendrerit eu bibendum in, commodo ac massa. Curabitur cursus tellus eget felis commodo dignissim. Curabitur congue ex in aliquet pharetra. Aliquam finibus volutpat felis. Morbi pretium nisl purus, eget condimentum mi molestie congue. Integer eget tortor hendrerit, pellentesque ex in, congue augue.

              Maecenas sagittis, augue ac pulvinar ultricies, tellus elit consectetur tellus, quis ornare est eros sed lorem. Morbi eu risus ut erat ornare tempus. Aenean luctus pretium sapien at hendrerit. Morbi at felis vel justo gravida porttitor eu nec mauris. Vestibulum faucibus egestas vestibulum. Nunc sodales suscipit enim a aliquam. Curabitur tempor turpis in ante hendrerit fringilla. Nam convallis pellentesque felis, fermentum volutpat enim sodales at. Nullam blandit, est vel tincidunt eleifend, lectus ante varius nisi, et blandit lacus massa quis ipsum. In lobortis quam turpis, eu rhoncus nibh gravida ac. Suspendisse condimentum vitae neque venenatis luctus. Proin eu pharetra justo. Ut sit amet purus ullamcorper, dictum nisi non, ultricies est. Etiam a sem eget neque viverra tempor eget sit amet nibh. Aenean dapibus, sapien sit amet viverra faucibus, est tellus hendrerit quam, non mollis erat enim id eros.

              Pellentesque ut hendrerit erat, at euismod arcu. Phasellus congue augue risus, eu pretium sapien bibendum vel. Nunc dignissim, arcu ac tempus ornare, urna purus vehicula ex, eget venenatis urna ex in felis. Nullam fringilla vulputate mi, at egestas tortor hendrerit nec. Phasellus nunc dui, scelerisque sed est in, rutrum ultricies sem. Nulla egestas ut odio vitae laoreet. Phasellus in dui ut erat vehicula molestie mattis fringilla nibh. Fusce ac finibus erat. Sed blandit eu ante ut malesuada.

              Proin pharetra augue eu mi consequat pretium. Quisque convallis lectus nec sem lobortis, quis tristique enim tincidunt. Maecenas congue iaculis tortor, at fermentum urna fringilla efficitur. Vivamus euismod arcu nulla, ac finibus turpis rutrum id. Nunc imperdiet vulputate turpis, in finibus enim porttitor convallis. Phasellus vel nisi quam. Vivamus magna dui, aliquam vitae odio at, tincidunt tempor neque. Proin tempus augue eu pharetra semper. Phasellus vestibulum orci interdum, ultricies elit id, dapibus elit. Suspendisse pharetra sed purus at egestas. Donec tincidunt, enim a mollis maximus, urna ex faucibus sem, a scelerisque lacus nulla quis leo. Sed tempus, urna et ullamcorper cursus, dolor nulla consectetur neque, ac euismod velit quam a urna.

              Nulla facilisi. Phasellus ac ultrices nulla. Aliquam erat volutpat. Aenean ac massa lectus. Nulla facilisi. Integer pellentesque cursus libero vitae gravida. Nullam odio enim, tristique sit amet tempus sed, rhoncus et orci. Sed ante mi, feugiat vitae nisl nec, pellentesque facilisis ex.

              <Grid container>
                <Grid item xs={4}>
                 kladfj
                </Grid>
                <Grid item xs={4}>
                  adsklfjsdaf
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="display1" gutterBottom>storyline</Typography>
                  cast

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

export default withRoot(withStyles(styles)(Movie));
