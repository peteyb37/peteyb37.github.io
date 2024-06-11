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
    <Box sx={{display: 'flex', flexDirection: 'column', minHeight: '80vh', backgroundColor: 'black'}}>
      <Box sx={{marginLeft: '20%', marginRight: '20%', marginTop: '25px', color: 'white', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <Box sx={{
          backgroundImage: `url(${NewAlbum})`,
          backgroundRepeat: "no-repeat",
          height: "400px",
          width: "400px",
          border: '3px solid white'
        }} />
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <Typography sx={{color: 'white', fontSize: '30px'}}>New Album</Typography>
          <Typography sx={{color: 'white'}}>Coming Soon 2024</Typography>
          <Fab onClick={() => handleListenClick("newAlbum")} sx={{borderRadius: '15px', width: '150px', height: '20px', marginTop: '10px', backgroundColor: 'black', border: '2px solid #fca311', color: "white", "&:hover":{backgroundColor: '#14213d'}}}> Pre-Save </Fab>
        </Box>   
      </Box>
      <Box sx={{marginLeft: '120px', marginRight: '120px', borderTop: '2px solid white', borderBottom: '2px solid white', marginTop: '50px', height: '100px', display: 'flex', justifyContent: 'center', marginBottom: '10px'}}>
        <Typography sx={{fontSize: '60px', color: 'white'}}>Previous Releases</Typography>
      </Box>
      <Box sx={{marginLeft: '20%', marginRight: '20%', marginTop: '25px', color: 'white', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <Typography sx={{color: 'white', fontSize: '30px'}}>Rush</Typography>
          <Typography sx={{color: 'white'}}>Single 2022</Typography>
          <Fab onClick={() => handleListenClick("Rush")} sx={{borderRadius: '15px', width: '150px', height: '20px', marginTop: '10px', backgroundColor: 'black', border: '2px solid #fca311', color: "white", "&:hover":{backgroundColor: '#14213d'}}}> Listen Now </Fab>
        </Box>   
        <Box sx={{
          backgroundImage: `url(${RushPic})`,
          backgroundRepeat: "no-repeat",
          height: "400px",
          width: "400px",
          border: '3px solid white'
        }} />
      </Box>
      <Box sx={{marginLeft: '20%', marginRight: '20%', marginTop: '25px', color: 'white', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <Box sx={{
          backgroundImage: `url(${RewindPic})`,
          backgroundRepeat: "no-repeat",
          height: "400px",
          width: "400px",
          border: '3px solid #fca311'
        }} />
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <Typography sx={{color: 'white', fontSize: '30px'}}>Rewind</Typography>
          <Typography sx={{color: 'white'}}>Album 2021</Typography>
          <Fab onClick={() => handleListenClick("Rewind")} sx={{borderRadius: '15px', width: '150px', height: '20px', marginTop: '10px', backgroundColor: 'black', border: '2px solid #fca311', color: "white", "&:hover":{backgroundColor: '#14213d'}}}> Listen Now </Fab>
        </Box>   
      </Box>
      <Box sx={{marginLeft: '20%', marginRight: '20%', marginTop: '25px', color: 'white', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <Typography sx={{color: 'white', fontSize: '30px'}}>We Are The People</Typography>
          <Typography sx={{color: 'white'}}>Single 2020</Typography>
          <Fab onClick={() => handleListenClick("People")} sx={{borderRadius: '15px', width: '150px', height: '20px', marginTop: '10px', backgroundColor: 'black', border: '2px solid #fca311', color: "white", "&:hover":{backgroundColor: '#14213d'}}}> Listen Now </Fab>
        </Box>  
        <Box sx={{
          backgroundImage: `url(${PeoplePic})`,
          backgroundRepeat: "no-repeat",
          height: "400px",
          width: "400px",
          border: '3px solid #fca311'
        }} /> 
      </Box>
      <Box sx={{marginLeft: '20%', marginRight: '20%', marginTop: '25px', color: 'white', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <Box sx={{
          backgroundImage: `url(${PuzzlePic})`,
          backgroundRepeat: "no-repeat",
          height: "400px",
          width: "400px",
          border: '3px solid white'
        }} />
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <Typography sx={{color: 'white', fontSize: '30px'}}>Puzzle</Typography>
          <Typography sx={{color: 'white'}}>Album 2020</Typography>
          <Fab onClick={() => handleListenClick("Puzzle")} sx={{borderRadius: '15px', width: '150px', height: '20px', marginTop: '10px', backgroundColor: 'black', border: '2px solid #fca311', color: "white", "&:hover":{backgroundColor: '#14213d'}}}> Listen Now </Fab>
        </Box>   
      </Box>
    </Box>
  )
}

export default Music;