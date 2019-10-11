import React, { useState, useEffect }from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

import { postSmurf} from '../actions'

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap'
      },
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120
      },
      selectEmpty: {
        marginTop: theme.spacing(2)
      },
    
      paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3)
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: '#017dc7',
        '&:hover': {
          backgroundColor: '#de5916'
        }
      }
  }));

const PostSmurf = (props) => {
      const classes = useStyles();
      const [newSmurf, setNewSmurf] = useState({
        name: '',
        age: '',
        height: ''
      });
      const [smurf, setSmurf] = useState({});

      useEffect(() => {
        axios
            .get(`http://localhost:3333/smurfs`)
            .then(res => {
                console.log(res);
                setSmurf(res.data);
            })
            .catch(err => {
                console.log('ERROR in GET post api', err.response);
            })
        }, [])

      const handleChanges = e => {
          setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value });
      };

      const addSmurf = e => {
          e.preventDefault();
          props.postSmurf(newSmurf);
        setNewSmurf('');
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="name"
                                variant="outlined"
                                fullWidth
                                id="name"
                                label="Smurf Name"
                                autoFocus
                                InputProps={{
                                classes: {
                                    outlined: classes.outlined,
                                    focused: classes.focused
                                }
                                }}
                                value={smurf.name}
                                required
                                onChange={handleChanges}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="age"
                                variant="outlined"
                                fullWidth
                                id="age"
                                label="Age"
                                value={smurf.age}
                                required
                                onChange={handleChanges}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="height"
                                variant="outlined"
                                fullWidth
                                id="height"
                                label="Height"
                                value={smurf.height}
                                required
                                onChange={handleChanges}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onChange={handleChanges}
                        onClick={addSmurf}
                    >
                        Add Smurf
                    </Button>
                </form>
            </div>
        </Container>
    );
  };


  export default connect(null, { postSmurf })(PostSmurf);
