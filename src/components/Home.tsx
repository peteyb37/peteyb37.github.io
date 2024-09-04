import { Box, Typography, Icon, Tooltip, Dialog, DialogTitle, DialogContent  } from '@mui/material';
import React,{useState} from 'react';
import stockPhoto from '../assets/stockGuitarBGPhoto.jpg';
import Submarine from '../assets/Submarine.svg';
import homeBackground from '../assets/homeBackground.jpg';
import { keyframes } from '@mui/system';
import Fish from '../assets/Fish.svg';
import House from '../assets/House.svg';
import Wine from '../assets/Wine.svg';
import Crow from '../assets/Crow.svg';
import Candy from '../assets/Candy.svg';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


import Header from './header';
function Home() {

  const [openDialog, setOpenDialog] = useState(false);
  
  const lowerSlow = keyframes`
  0%{
    opacity:0;
    transform: translateY(-200%); 
   }
  
  100% {
    opacity:1;
    transform: translateY(0);
   }
`;

const blinkWitness = keyframes`
  0%{
    opacity:0;
    transform: translateY(-70%) translateX(-20%);
   }
  
  50% {
    opacity:1;
    transform: translateY(-90%) translateX(-20%);
   }
   100% {
    opacity:0;
    transform: translateY(-70%) translateX(-20%);
   }
`;

const blinkHome = keyframes`
  0%{
    opacity:1;
    transform: translateY(600%) translateX(16%);
   }
  
  50% {
    opacity:0;
    transform: translateY(600%) translateX(16%);
   }
   100% {
    opacity:1;
    transform: translateY(600%) translateX(16%);
   }
`;

const blinkCrow = keyframes`
  0%{
    opacity:1;
    transform: translateY(-240%) translateX(177%);
   }
  
  50% {
    opacity:0;
    transform: translateY(-240%) translateX(177%);
   }
   100% {
    opacity:1;
    transform: translateY(-240%) translateX(177%);
   }
`;

const blinkCandy = keyframes`
  0%{
    opacity:1;
    transform: translateY(220%) translateX(210%);
   }
  
  50% {
    opacity:0;
    transform: translateY(220%) translateX(210%);
   }
   100% {
    opacity:1;
    transform: translateY(220%) translateX(210%);
   }
`;

const blinkWine = keyframes`
  0%{
    opacity:0;
    transform: translateY(450%) translateX(100%);
   }
  
  25% {
    opacity:1;
    transform: translateY(450%) translateX(100%);
   }
   75% {
    opacity:1;
    transform: translateY(450%) translateX(100%);
   }
   100% {
    opacity:0;
    transform: translateY(450%) translateX(100%);
   }
`;

const submarineMovement = keyframes`
  0%{
    opacity:1;
    transform: translateY(100%) translateX(200%); 
   }
   15%{
    opacity:1;
    transform: translateY(30%) translateX(120%); 
   }
   25%{
    opacity:1;
    transform: translateY(580%) translateX(90%); 
   }
   40%{
    opacity:1;
    transform: translateY(580%) translateX(-10%); 
   }
  
  50% {
    opacity:1;
    transform: translateY(0) translateX(0);
   }
   65%{
    opacity:1;
    transform: translateY(40%) translateX(80%); 
   }
   75%{
    opacity:1;
    transform: translateY(600%) translateX(130%); 
   }
   90%{
    opacity:1;
    transform: translateY(590%) translateX(210%); 
   }
   100%{
    opacity:1;
    transform: translateY(100%) translateX(200%); 
   }
`;

const [song, setSong] = useState('')
const [songUrl, setSongUrl] = useState('')

const handlePreviewClick = (songName: any) => {
  if(songName === "candy"){
    setSongUrl("https://open.spotify.com/embed/track/7lhxySA64r6nDEOMg3NP8P?utm_source=generator")
    setSong("Candy Says")
  }
  if(songName === "home"){
    setSongUrl("https://open.spotify.com/embed/track/3GVAIrNShIum4OzRYYYTo1?utm_source=generator")
    setSong("Back to my Home")
  }
  if(songName === "crow"){
    setSongUrl("https://open.spotify.com/embed/track/4ayWvk7ht8XGPUrCiDnT0m?utm_source=generator")
    setSong("Snow Crows")
  }
  if(songName === "wine"){
    setSongUrl("https://open.spotify.com/embed/track/7lhxySA64r6nDEOMg3NP8P?utm_source=generator")
    setSong("Old Man Merlot")
  }
  if(songName === "witness"){
    setSongUrl("https://open.spotify.com/embed/track/7lhxySA64r6nDEOMg3NP8P?utm_source=generator")
    setSong("Witness")
  }
  if(songName === "submarine"){
    setSongUrl("https://open.spotify.com/embed/track/7lhxySA64r6nDEOMg3NP8P?utm_source=generator")
    setSong("Submarine")
  }
  setOpenDialog(true)
}
  

  return (
    <Box sx={{overflow: 'hidden', borderTop: '3px solid #912F40', display: 'flex', flexDirection: 'column', height: '79vh', backgroundColor: 'black', justifyContent: 'center', alignItems: 'center'}}>
      <Box sx={{
          backgroundImage: `url(${homeBackground})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: 'contain',
          height: "75vh",
          width: "90%",
          borderRight: '1px solid #702632',
          borderLeft: '1px solid #702632'
        }}>
          <Tooltip title="Submarine">
            <Icon onClick={()=>handlePreviewClick("submarine")} sx={{cursor: 'pointer', width: '33.3%', flexGrow: 1, display: 'flex', justifyContent: 'center', height: '35px', marginTop: '10px', animation: `${submarineMovement} 30s infinite ease`}}>
                <img style={{marginBottom: '8px'}} src={Submarine}/>
            </Icon>
          </Tooltip>
          <Tooltip title="Witness">
            <Icon onClick={()=>handlePreviewClick("witness")} sx={{cursor: 'pointer', width: '33.3%', flexGrow: 1, display: 'flex', justifyContent: 'center', height: '35px', marginTop: '10px', animation: `${blinkWitness} 3s infinite ease`}}>
                <img style={{marginBottom: '8px'}} src={Fish}/>
            </Icon>
          </Tooltip>
          <Tooltip title="Back to my Home">
            <Icon onClick={()=>handlePreviewClick("home")} sx={{cursor: 'pointer', width: '33.3%', flexGrow: 1, display: 'flex', justifyContent: 'center', height: '35px', marginTop: '10px', animation: `${blinkHome} 7s infinite ease`}}>
                <img style={{marginBottom: '8px'}} src={House}/>
            </Icon>
            </Tooltip>
          <Tooltip title="Old Man Merlot">
            <Icon onClick={()=>handlePreviewClick("wine")} sx={{cursor: 'pointer', width: '33.3%', flexGrow: 1, display: 'flex', justifyContent: 'center', height: '35px', marginTop: '10px', animation: `${blinkWine} 5s infinite ease`}}>
                <img style={{marginBottom: '8px'}} src={Wine}/>
            </Icon>
          </Tooltip>
          <Tooltip title="Snow Crows">
            <Icon onClick={()=>handlePreviewClick("crow")} sx={{cursor: 'pointer', width: '33.3%', flexGrow: 1, display: 'flex', justifyContent: 'center', height: '35px', marginTop: '10px', animation: `${blinkCrow} 3s infinite ease`}}>
                <img style={{marginBottom: '8px'}} src={Crow}/>
            </Icon>
          </Tooltip>
          <Tooltip title="Candy Says">
            <Icon onClick={()=>handlePreviewClick("candy")} sx={{cursor: 'pointer', width: '33.3%', flexGrow: 1, display: 'flex', justifyContent: 'center', height: '35px', marginTop: '10px', animation: `${blinkCandy} 4s infinite ease`}}>
                <img style={{marginBottom: '8px'}} src={Candy}/>
            </Icon>
          </Tooltip>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '20%', marginTop: '5px'}}>
          <Typography sx={{color: 'white'}}>Software Engineer</Typography>
          
          <Typography sx={{color: 'white'}}>|</Typography>
          <Typography sx={{color: 'white'}}>Musician</Typography>
        </Box>
        {openDialog && (
          <Dialog open={openDialog} PaperProps={{ sx: { borderRadius: "25px", border: '2px solid #40434E' } }}>
            <DialogTitle sx={{width: '400px', borderBottom: '3px solid #702632',  backgroundColor: 'black', color: '#FFFFFA', borderRadius: '0px', display: 'flex', justifyContent: 'center'}}>
              <Typography>Song Preview | {song}</Typography>
            </DialogTitle>
            <IconButton
          aria-label="close"
          onClick={()=> setOpenDialog(false)}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: '#40434E',
            marginBottom: '5px'
          }}
        >
          <CloseIcon />
        </IconButton>
            <DialogContent sx={{height: '160px', width: '400px', backgroundColor: 'black'}}>
              <Box>
                <iframe style={{borderRadius:"12px"}} src={songUrl} width="100%" height="152" frameBorder={0} allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
              </Box>
            </DialogContent>
          </Dialog>
        )}
    </Box>
  )
}

export default Home;