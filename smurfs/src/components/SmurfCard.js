import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { fetchSmurf } from '../actions';
import Smurf from './Smurf';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: '75px auto'
  },
  gridItem: {
    padding: theme.spacing(2)
  }
}));

const SmurfCard = props => {
  const classes = useStyles();

  useEffect(() => {
    if (props.smurfs.length === 0) {
        props.fetchSmurf();
        }
  }, []);

  if (props.isFetching) {
    return <h2>Loading Smurfs...</h2>;
  }

  return (
    <Grid container className={classes.root} justify="center">
      {props.error && <p>{props.error}</p>}
      {props.smurfs.map(item => {
        return (
          <Grid item className={classes.gridItem} s>
            <Smurf key={item.id} name={item.name} age={item.age} height={item.height} />
          </Grid>
        );
      })}
    </Grid>
  );
};

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, { fetchSmurf })(SmurfCard);