import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import NavBar from '../src/components/navbar';
import Button from '@material-ui/core/Button';
import VisibilityIcon from '@material-ui/icons/Visibility';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    textAlign: 'center',
  },
  imgBox: {
    maxWidth: 'auto',
    maxHeight: 'auto',
    margin: '10px',
  },
  img: {
    height: '500',
    maxWidth: '500',
    objectFit: 'cover',
  },
  input: {
    display: 'none',
  },
  introtext1: {
    margin: 50,
    color: '#2e2f2f',
  },
  introtext2: {
    margin: 50,
    textAlign: 'center',
  },
}));
function App() {
  const classes = useStyles();
  const [source, setSource] = useState('');
  const handleCapture = (target) => {
    if (target.files) {
      if (target.files.length !== 0) {
        const file = target.files[0];
        const newUrl = URL.createObjectURL(file);
        setSource(newUrl);
      }
    }
  };
  return (
    <div className={classes.root}>
      <NavBar />
      <Grid container>
        <Grid item xs={12}>
          <Typography className={classes.introtext1}>
            Diabetic retinopathy is the major cause of blindness in the
            developed world's working-age population. About 93 million people
            are estimated to be affected by this disease. Diabetic retinopathy
            is a chronic condition that causes harm to the retina. It is also
            called diabetic eye disease. It is found in people with diabetics.
            Diabetic Retinopathy is a progressive disease; it does not have any
            early symptoms. It often goes unnoticed until it affects the vision.
            It is the main reason for vision loss in people with diabetics and
            leading cause of blindness in working aged adults.When Diabetic
            Retinopathy is identified in time, progress of vision impairment may
            be delayed or prevented, but this is challenging as the condition
            sometimes displays no signs until it is too late so it is impossible
            to give effective treatment.So our system OPTICA could easily
            identify diabetic retinopathy just by looking at the fundes images.
          </Typography>
          <h5 className={classes.introtext2}>
            Take a Capture or Select an Image. This Image must contain
            fundus/Retina image. The Clearer the Image, the better the
            prediction. Eye Care Center Uses Deep learning Techniques and
            Artificial inteligence to diagnose the state of your retina and
            health tips to prevent any further damages.
          </h5>
          {source && (
            <Box
              display='flex'
              justifyContent='center'
              border={1}
              className={classes.imgBox}
            >
              <img src={source} alt={'snap'} className={classes.img}></img>
            </Box>
          )}
          <Button
            variant='contained'
            color='secondary'
            size='small'
            className={classes.button}
            startIcon={<AutorenewIcon />}
          >
            Reset
          </Button>
          <input
            accept='image/*'
            className={classes.input}
            id='icon-button-file'
            type='file'
            capture='environment'
            onChange={(e) => handleCapture(e.target)}
          />
          <label htmlFor='icon-button-file'>
            <IconButton
              color='primary'
              aria-label='upload picture'
              component='span'
            >
              <PhotoCameraIcon fontSize='large' color='primary' />
            </IconButton>
          </label>
          <Button
            variant='contained'
            color='primary'
            size='small'
            className={classes.button}
            startIcon={<VisibilityIcon />}
          >
            Consult
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
export default App;
