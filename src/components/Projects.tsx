import { Box, Typography, Fab, Divider  } from '@mui/material';
import React, { useState } from 'react';

function Projects() {

  const [aiSynthOpen, setAiSynthOpen] = useState(false);

  return (
    <Box sx={{borderTop: '3px solid #912F40', display: 'flex', flexDirection: 'column', minHeight: '80vh', backgroundColor: 'black'}}>
      <Box sx={{marginTop: '20px', width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <Fab onClick={() => window.open('https://github.com/peteyb37/peteyb37.github.io?tab=readme-ov-file', '_blank')} variant='extended' sx={{width: '300px', borderRadius: '10px', color: '#FFFFFA', backgroundColor: 'black', border: '2px solid #912F40', "&:hover":{backgroundColor: '#702632'}}}>Website Github</Fab>
      </Box>
      <Box sx={{marginTop: '20px', width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <Fab onClick={() => setAiSynthOpen(!aiSynthOpen)} variant='extended' sx={{width: '300px', borderRadius: '10px', color: '#FFFFFA', backgroundColor: 'black', border: '2px solid #912F40', "&:hover":{backgroundColor: '#702632'}}}>AI Synth MK I</Fab>
      </Box>
      {aiSynthOpen && (<Box sx={{border: '3px solid #FFFFFA', marginLeft: '10%', marginRight: '10%', marginTop: '25px', color: '#FFFFFA', display: 'flex', flexDirection: 'row'}}>
        <Box sx={{
          height: "400px",
          width: "60%",
          borderRight: '3px solid #FFFFFA'
        }}>Image Not Available</Box>
        <Box sx={{
          height: "400px",
          width: "40%",
          display: 'flex',
          flexDirection: 'column',
          //Not displaying correctly
        }}>
          <Typography sx={{width: '400px', marginLeft: '145px', fontSize: '20px'}}>AI Synth Mk. I</Typography>
          <Divider variant="middle" sx={{ bgcolor: "#FFFFFA", marginBottom: '5px' }}/>
          <Typography sx={{width: '90%', marginLeft: '7%'}}>VST3 plugin in C++ using JUCE.  This plugin will allow 
            a user to type in a feel or a theme to auto-generate a synth with that sound.
            The user will then be able to test the synth with midi or drawn in notes.
            This should work on any DAW but is being designed with Ableton in mind.
            The user will also be able to manipulate the synth after generation.
          </Typography>
          <Divider variant="middle" sx={{ bgcolor: "#FFFFFA", marginBottom: '5px', marginTop: '5px' }}/>
          <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
            Progress not sure how I'd like to display yet

          </Box>
        </Box>
      </Box>)}
    </Box>
  )
}

export default Projects;