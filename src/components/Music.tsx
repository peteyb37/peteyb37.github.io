import { Box, Typography, Fab  } from '@mui/material';
import React from 'react';
import RushPic from '../assets/rush400.jpg';
import RewindPic from '../assets/rewind400.jpg';
import PeoplePic from '../assets/people400.jpg';
import PuzzlePic from '../assets/puzzle400.jpg';
import NewAlbum from '../assets/newAlbumTestPhoto.png';

function Music() {

  const handleListenClick = (t: any) => {
    if(t === "Rush"){
      window.open("https://distrokid.com/hyperfollow/peterbudd/rush", '_blank');
    }
    if(t === "Rewind"){
      window.open("https://distrokid.com/hyperfollow/peterbudd/rewind", '_blank');
    }
    if(t === "People"){
      window.open('https://distrokid.com/hyperfollow/peterbudd/we-are-the-people', '_blank')
    }
    if(t === "Puzzle"){
      window.open('https://distrokid.com/hyperfollow/peterbudd/puzzle', '_blank')
    }
  }

  return (
    <Box sx={{borderTop: '3px solid #912F40', display: 'flex', flexDirection: 'column', minHeight: '80vh', backgroundColor: 'black'}}>
      <Box sx={{marginLeft: '20%', marginRight: '20%', marginTop: '25px', color: '#FFFFFA', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <Box sx={{
          backgroundImage: `url(${NewAlbum})`,
          backgroundRepeat: "no-repeat",
          height: "400px",
          width: "400px",
          border: '3px solid #FFFFFA'
        }} />
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <Typography sx={{color: '#FFFFFA', fontSize: '30px'}}>New Album</Typography>
          <Typography sx={{color: '#FFFFFA'}}>Coming Soon 2024</Typography>
          <Fab onClick={() => handleListenClick("newAlbum")} sx={{borderRadius: '15px', width: '150px', height: '20px', marginTop: '10px', backgroundColor: 'black', border: '2px solid #912F40', color: "#FFFFFA", "&:hover":{backgroundColor: '#702632'}}}> Pre-Save </Fab>
        </Box>   
      </Box>
      <Box sx={{marginLeft: '20%', marginRight: '20%', marginTop: '25px', color: '#FFFFFA', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <Typography sx={{color: '#FFFFFA', fontSize: '30px'}}>Rush</Typography>
          <Typography sx={{color: '#FFFFFA'}}>Single 2022</Typography>
          <Fab onClick={() => handleListenClick("Rush")} sx={{borderRadius: '15px', width: '150px', height: '20px', marginTop: '10px', backgroundColor: 'black', border: '2px solid #912F40', color: "#FFFFFA", "&:hover":{backgroundColor: '#702632'}}}> Listen Now </Fab>
        </Box>   
        <Box sx={{
          backgroundImage: `url(${RushPic})`,
          backgroundRepeat: "no-repeat",
          height: "400px",
          width: "400px",
          border: '3px solid #FFFFFA'
        }} />
      </Box>
      <Box sx={{marginLeft: '20%', marginRight: '20%', marginTop: '25px', color: '#FFFFFA', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <Box sx={{
          backgroundImage: `url(${RewindPic})`,
          backgroundRepeat: "no-repeat",
          height: "400px",
          width: "400px",
          border: '3px solid #912F40'
        }} />
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <Typography sx={{color: '#FFFFFA', fontSize: '30px'}}>Rewind</Typography>
          <Typography sx={{color: '#FFFFFA'}}>Album 2021</Typography>
          <Fab onClick={() => handleListenClick("Rewind")} sx={{borderRadius: '15px', width: '150px', height: '20px', marginTop: '10px', backgroundColor: 'black', border: '2px solid #912F40', color: "#FFFFFA", "&:hover":{backgroundColor: '#702632'}}}> Listen Now </Fab>
        </Box>   
      </Box>
      <Box sx={{marginLeft: '20%', marginRight: '20%', marginTop: '25px', color: '#FFFFFA', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <Typography sx={{color: '#FFFFFA', fontSize: '30px'}}>We Are The People</Typography>
          <Typography sx={{color: '#FFFFFA'}}>Single 2020</Typography>
          <Fab onClick={() => handleListenClick("People")} sx={{borderRadius: '15px', width: '150px', height: '20px', marginTop: '10px', backgroundColor: 'black', border: '2px solid #912F40', color: "#FFFFFA", "&:hover":{backgroundColor: '#702632'}}}> Listen Now </Fab>
        </Box>  
        <Box sx={{
          backgroundImage: `url(${PeoplePic})`,
          backgroundRepeat: "no-repeat",
          height: "400px",
          width: "400px",
          border: '3px solid #912F40'
        }} /> 
      </Box>
      <Box sx={{marginLeft: '20%', marginRight: '20%', marginTop: '25px', color: '#FFFFFA', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <Box sx={{
          backgroundImage: `url(${PuzzlePic})`,
          backgroundRepeat: "no-repeat",
          height: "400px",
          width: "400px",
          border: '3px solid #FFFFFA'
        }} />
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <Typography sx={{color: '#FFFFFA', fontSize: '30px'}}>Puzzle</Typography>
          <Typography sx={{color: '#FFFFFA'}}>Album 2020</Typography>
          <Fab onClick={() => handleListenClick("Puzzle")} sx={{borderRadius: '15px', width: '150px', height: '20px', marginTop: '10px', backgroundColor: 'black', border: '2px solid #912F40', color: "#FFFFFA", "&:hover":{backgroundColor: '#702632'}}}> Listen Now </Fab>
        </Box>   
      </Box>
    </Box>
  )
}

export default Music;