import { Box, Typography, Icon, Drawer, Tooltip, Dialog, DialogTitle, DialogContent, Button, Divider, Fab, ButtonGroup, Chip  } from '@mui/material';
import React,{useState, useEffect, useRef} from 'react';
import { keyframes } from '@mui/system';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Spotify from '../assets/Spotify.svg';
import Apple from '../assets/Apple.svg';
import EmailIcon from '@mui/icons-material/Email';
import RushPic from '../assets/rush400.jpg';
import RewindPic from '../assets/rewind400.jpg';
import PeoplePic from '../assets/people400.jpg';
import PuzzlePic from '../assets/puzzle400.jpg';
import NewAlbum from '../assets/newAlbumTestPhoto.png';

/*
  Animations still needed ~ framer motion ~ css??
   - Submarine following the path downwards, not sure if in foreground or back
     - can we make the submarine bubble?
   - As you scroll down, other elements pop into place
   - Carousel optional 
  mobile Dev needed
  Something going on with our update here so lets be very careful
*/

import Contact from './Contact';
import Waves from './waves';

function Home({leftMenuClicked, triggerLeftMenu}: any) {

  useEffect(() => {
    if(leftMenuClicked){
      setOpenLeftMenu(true)
    }else{
      setOpenLeftMenu(false)
    }
  },[leftMenuClicked])

  const topRef = useRef();
  const introRef = useRef();
  const newMusicRef = useRef();
  const oldMusicRef = useRef();
  const softwareProjectsRef = useRef();
  const contactRef = useRef();

  //, animation: `${fadeIn} linear`, animationTimeline: view(),

  const fadeIn = keyframes`
    from{
      opacity:0;
      scale:0.8; 
     }
    
    to{
      opacity:1;
      scale:1; 
     }
  `;

  const waves = [
    { color: '#3B82F6', height: 100, speed: 0.2, amplitude: 25, phase: 0 },
    { color: '#60A5FA', height: 150, speed: 1, amplitude: 30,phase: Math.PI/2 },
    { color: '#8bc1ffff', height: 200, speed: 0.6, amplitude: 20, phase: Math.PI },
  ];

  const handleIconClick = (site: String) => {
    if(site === "Spotify"){
      window.open("https://open.spotify.com/artist/56X2nqsClqdDWy6d34rOxC", '_blank');
    }
    if(site === "Apple"){
      window.open("https://music.apple.com/us/artist/peter-budd/1505497748", '_blank');
    }
    if(site === "Youtube"){
      window.open('https://www.youtube.com/channel/UCYPAw2SiHqoEteCLzzX4w_g/featured', '_blank')
    }
    if(site === "Email"){
      window.location.href = 'mailto:peterbuddmusic@gmail.com';
    }
    
  }

  const otherAlbums = [
    {
      name: 'Rush',
      img: RushPic,
    },
    {
      name: 'Rewind',
      img: RewindPic,
    },
    {
      name: 'People',
      img: PeoplePic,
    },
    {
      name: 'Puzzle',
      img: PuzzlePic,
    },
  ]

  const [selectedProject, setSelectedProject] = useState('Music Website');

  const projectSelections = [
    <Button onClick={() => setSelectedProject('Music Website')} key='Music_Website' sx={{backgroundColor: selectedProject === 'Music Website' ? '#702632' : 'black', height: '100px', color: 'white', "&:hover":{backgroundColor: '#8f414eff'}}}>Music Website</Button>,
    <Button onClick={() => setSelectedProject('AI Synth for Ableton')} key='AI_Synth' sx={{backgroundColor: selectedProject === 'AI Synth for Ableton' ? '#702632' : 'black', height: '100px', color: 'white', "&:hover":{backgroundColor: '#8f414eff'}}}>AI Synth for Ableton</Button>,
    <Button onClick={() => setSelectedProject('Karaoke Creator')} key='Karaoke_Creator' sx={{backgroundColor: selectedProject === 'Karaoke Creator' ? '#702632' : 'black', height: '100px', color: 'white', "&:hover":{backgroundColor: '#8f414eff'}}}>Karaoke Creator</Button>,
  ]

  const [projectContent, setProjectContent] = useState(
    {
      display: 'linear-gradient(to bottom right, #8bc1ffff, black)',
        description: {
          desc: 'A website to showcase music/software in a simple/clean format',
          features: ['A simple, one paged, front-end only application hosted on github-pages', 'Gives brief description about me and allows me to share my music', 'Highlights some fun UI stuff without going overboard']
        },
        stack: ['Website', 'UI', 'Javascript', 'Music', 'Typescript', 'HTML', 'CSS', 'ReactJS', 'MUI', 'Music', 'Software', 'Waves', 'Submarine', 'Simple'] 
    }
  )

  useEffect(() => {
    if(selectedProject === 'Music Website'){
      setProjectContent({
        display: 'linear-gradient(to bottom right, #8bc1ffff, black)',
        description: {
          desc: 'A website to showcase music/software in a simple/clean format',
          features: ['A simple, one paged, front-end only application hosted on github-pages', 'Gives brief description about me and allows me to share my music', 'Highlights some fun UI stuff without going overboard']
        },
        stack: ['Website', 'UI', 'Javascript', 'Music', 'Typescript', 'HTML', 'CSS', 'ReactJS', 'MUI', 'Music', 'Software', 'Waves', 'Submarine', 'Simple'] 
      })
    }else if(selectedProject === 'AI Synth for Ableton'){
      setProjectContent({
        display: 'linear-gradient(to bottom right, black, white)',
        description: {
          desc: 'An Ableton plugin that takes a prompt and generates a synth',
          features: ['A user can give a few keywords to the prompt', 'Plugin will take those keywords and send them to an AI', 'AI will generate synth settings for the plugin', 'Returns a new synth with presets sounding like the vibe the user wants']
        },
        stack: ['JUCE', 'VST', 'C++', 'Windows', 'macOS', 'Linux', 'AI', 'Plugin', 'Ableton', 'Synth', 'Music'] 
      })
    }else if(selectedProject === 'Karaoke Creator'){
      setProjectContent({
        display: 'linear-gradient(to bottom right, yellow, black)',
        description: {
          desc: 'A simple website designed to allow users to create their own karaoke songs',
          features: ['Upload an mp4 or wav file to the site', 'Designate times for words to pop up', 'Real time feedback', 'Export final video product']
        },
        stack: ['Typescript', 'Javascript', 'HTML', 'CSS', 'FFMPEG', 'Karaoke', 'Creative', 'UI', 'Custom', 'Website', 'ReactJS', 'MUI'] 
      })
    }
  }, [selectedProject])

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

  const [openLeftMenu, setOpenLeftMenu] = useState(false);
  
  const clickLeftMenu = () => {
    setOpenLeftMenu(!openLeftMenu);
  }

  const setScrollView = (ref: any) => {
    triggerLeftMenu();
    if(ref.current){
      ref.current.scrollIntoView({behaviour: 'smooth', block: 'start'})
    }
  }

  const sectionTitle = (title: string) => {

    let currRef = null;

    if(title === "BUDD"){
      currRef = introRef;
    }else if(title === "New Music"){
      currRef = newMusicRef;
    }else if(title === "Older Music"){
      currRef = oldMusicRef;
    }else if(title === "Software Projects"){
      currRef = softwareProjectsRef;
    }else if(title === "Contact"){
      currRef = contactRef;
    }

    return (
      <Box ref={currRef} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '30vw', height: '20vh', marginTop: '30px' }}>
        <Divider sx={{backgroundColor: 'white', color: 'white', width: '10%'}} />
        <Divider sx={{backgroundColor: 'white', color: 'white', width: '30%', marginTop: '9px'}} />
        <Divider sx={{backgroundColor: 'white', color: 'white', width: '50%', marginTop: '12px'}} />
        <Divider sx={{backgroundColor: 'white', color: 'white', width: '70%', marginTop: '15px'}} />
        <Typography variant='h3' sx={{color: 'white'}}>{title}</Typography>
        <Divider sx={{backgroundColor: 'white', color: 'white', width: '70%', marginTop: '3px'}} />
        <Divider sx={{backgroundColor: 'white', color: 'white', width: '50%', marginTop: '15px'}} />
        <Divider sx={{backgroundColor: 'white', color: 'white', width: '30%', marginTop: '12px'}} />
        <Divider sx={{backgroundColor: 'white', color: 'white', width: '10%', marginTop: '9px'}} />
      </Box>
    )
  }

  return (
    <Box sx={{flex: 1, overflowY: 'auto', backgroundColor: 'white', color: 'black', width: '100%'}}>
      <Box sx={{minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'start', width: '100%'}}>
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'linear-gradient(180deg,rgba(0, 212, 255, 1) 0%, rgba(7, 65, 158, 1) 59%, rgba(9, 9, 121, 1) 78%, rgba(0, 0, 0, 100) 100%)', height: '150vh', width: '100%'}}>
          <Box ref={topRef} sx={{width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center'}}>
            <Typography variant='h1' sx={{color: 'white'}}>Peter Budd</Typography>
            <Divider sx={{backgroundColor: 'white', color: 'white', width: '30%'}} />
            <Typography variant='h6' sx={{color: 'white'}}>Software Engineer</Typography>
            <Divider sx={{backgroundColor: 'white', color: 'white', width: '15%'}} />
            <Typography variant='h6' sx={{color: 'white'}}>Musician</Typography>
            <Divider sx={{backgroundColor: 'white', color: 'white', width: '8%'}} />
            <Divider sx={{backgroundColor: 'white', color: 'white', width: '4%', marginTop: '10px'}} />
            <Divider sx={{backgroundColor: 'white', color: 'white', width: '2%', marginTop: '10px'}} />
          </Box>
          <Box sx={{width: '100%', display: 'flex', justifyContent: 'space-evenly', flexDirection: 'row', marginTop: '10vh'}}>
            <Button onClick={() => handleIconClick("Youtube")} sx={{borderRadius: '100px', border: '2px solid #dadada', width: '13vw', height: '40px', marginTop: '3px', "&:hover":{backgroundColor: '#e10000ff'}}}>
              <YouTubeIcon sx={{color: '#FFFFFA'}} />
            </Button>
            <Button onClick={() => handleIconClick("Spotify")} sx={{borderRadius: '100px', border: '2px solid #dadada', width: '13vw', height: '40px', marginTop: '3px', "&:hover":{backgroundColor: '#1DB954'}}}>
              <Icon>
                  <img style={{marginBottom: '8px'}} src={Spotify} height={20} width={20}/>
              </Icon>
              </Button>
              <Button onClick={() => handleIconClick("Apple")} sx={{borderRadius: '100px', border: '2px solid #dadada', width: '13vw', height: '40px', marginTop: '3px', "&:hover":{backgroundColor: '#d65f5fff'}}}>
              <Icon>
                  <img style={{marginBottom: '7px'}} src={Apple} height={22} width={22}/>
              </Icon>
            </Button>
            <Button onClick={() => handleIconClick("Email")} sx={{borderRadius: '100px', border: '2px solid #dadada', width: '13vw', height: '40px', marginTop: '3px', "&:hover":{backgroundColor: '#a100acff'}}}>
              <EmailIcon fontSize="small" sx={{color: '#FFFFFA'}} />
            </Button> 
          </Box>
          <Box sx={{width: '100%', marginTop: '-40px', overflow: 'hidden'}}>
            <Waves
              height={300}
              width={10000}
              waves={waves}
              baseSpeed={0.5}
              baseAmplitude={20}
            />
          </Box>
          <Box sx={{marginTop: '-20px', background: 'linear-gradient(180deg,rgba(139, 193, 255, 1) 0%, rgba(7, 65, 158, 1) 59%, rgba(9, 9, 121, 1) 78%, rgba(0, 0, 0, 100) 100%)', height: '30vh', width: '100%'}}></Box>
        </Box>
        <Box sx={{width: '100%', backgroundColor: 'black', display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'center'}}>
          {sectionTitle('BUDD')}
          <Box sx={{color: 'white', marginTop: '50px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <Typography align='center' sx={{marginBottom: '50px', width: '50vw'}}>
              My name is Peter Budd.  I am a Software Engineer and an aspiring Musician.
              I currently reside in the Denver metro area.  This is a website I built from scratch 
              to showcase my music to whoever cares to listen.
              We can easily compare software development to music as a focus of creativity. 
              Both have a technical nature; layers and logic combined together to create an end product culminating in a positive experience for those involved.
              Both allow me to pursue creative problem solving to achieve a vision seen within my mind.
              They are two activities that provide me with the same sense of accomplishment upon completion.
              While I do have many other hobbies such as reading, being social, the Buffalo Bills, etc., pursuing these two passions has allowed me to live
              my life thus far in pursuit of happiness.  Please take your time scrolling through the site and maybe take a second to listen to a few tunes as you do so!
            </Typography>
          </Box>
          <Divider sx={{backgroundColor: 'white', color: 'white', width: '80%', marginBottom: '40px'}} />
        </Box>
        <Box sx={{width: '100%', backgroundColor: 'black', display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'center'}}>
          {sectionTitle('New Music')}
          <Box sx={{color: 'white', marginTop: '50px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <Box sx={{
              backgroundImage: `url(${NewAlbum})`,
              backgroundRepeat: "no-repeat",
              height: "400px",
              width: "400px",
              border: '3px solid #FFFFFA'
            }} />
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '10px'}}>
              <Typography sx={{color: '#FFFFFA', fontSize: '30px'}}>New Album</Typography>
              <Typography sx={{color: '#FFFFFA'}}>Coming Soon 2025</Typography>
              <Fab disabled={true} onClick={() => handleListenClick("newAlbum")} sx={{borderRadius: '15px', width: '150px', height: '20px', marginTop: '10px', backgroundColor: 'black', border: '2px solid #912F40', color: "#FFFFFA", "&:hover":{backgroundColor: '#702632'}, '&.Mui-disabled': {color: '#FFFFFA', backgroundColor: '#40434E'}}}> Save </Fab>
            </Box>  
          </Box>
          <Divider sx={{backgroundColor: 'white', color: 'white', width: '80%', marginTop: '25px'}} />
          <Box sx={{ height: '30vh', marginTop: '25px', width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'start', alignItems: 'center'}}>
            <Box sx={{flex: 1, color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <Box>
                <iframe style={{borderRadius:"12px"}} src={"https://open.spotify.com/embed/track/4ayWvk7ht8XGPUrCiDnT0m?utm_source=generator"} width="100%" height="152" frameBorder={0} allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
              </Box>
              <Box sx={{borderTop: '1px solid white', borderRight: '1px solid white', borderBottom: '1px solid white', writingMode: 'vertical-rl', textOrientation: 'mixed', paddingTop: '10px', paddingBottom: '10px' }}>
                PLACEHOLDER
              </Box>
            </Box>
            <Box sx={{flex: 1, color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <Typography sx={{fontSize: '40px'}}>SUBMARINE</Typography>
            </Box>
          </Box>
          <Divider sx={{backgroundColor: 'white', color: 'white', width: '80%', marginTop: '25px'}} />
          <Box sx={{ height: '30vh', marginTop: '25px', width: '100%', display: 'flex', flexDirection: 'row-reverse', justifyContent: 'start', alignItems: 'center'}}>
            <Box sx={{flex: 1, color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <Box>
                <iframe style={{borderRadius:"12px"}} src={"https://open.spotify.com/embed/track/4ayWvk7ht8XGPUrCiDnT0m?utm_source=generator"} width="100%" height="152" frameBorder={0} allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
              </Box>
              <Box sx={{borderTop: '1px solid white', borderRight: '1px solid white', borderBottom: '1px solid white', writingMode: 'vertical-rl', textOrientation: 'mixed', paddingTop: '10px', paddingBottom: '10px' }}>
                PLACEHOLDER
              </Box>
            </Box>
            <Box sx={{flex: 1, color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <Typography sx={{fontSize: '40px'}}>MOONLIGHT CIABATTA</Typography>
            </Box>
          </Box>
          <Divider sx={{backgroundColor: 'white', color: 'white', width: '80%', marginTop: '25px'}} />
          <Box sx={{ height: '30vh', marginTop: '25px', width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'start', alignItems: 'center'}}>
            <Box sx={{flex: 1, color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <Box>
                <iframe style={{borderRadius:"12px"}} src={"https://open.spotify.com/embed/track/4ayWvk7ht8XGPUrCiDnT0m?utm_source=generator"} width="100%" height="152" frameBorder={0} allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
              </Box>
              <Box sx={{borderTop: '1px solid white', borderRight: '1px solid white', borderBottom: '1px solid white', writingMode: 'vertical-rl', textOrientation: 'mixed', paddingTop: '10px', paddingBottom: '10px' }}>
                PLACEHOLDER
              </Box>
            </Box>
            <Box sx={{flex: 1, color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <Typography sx={{fontSize: '40px'}}>WESTERN</Typography>
            </Box>
          </Box>
          <Divider sx={{backgroundColor: 'white', color: 'white', width: '80%', marginTop: '25px'}} />
          <Box sx={{ height: '30vh', marginTop: '25px', width: '100%', display: 'flex', flexDirection: 'row-reverse', justifyContent: 'start', alignItems: 'center'}}>
            <Box sx={{flex: 1, color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <Box>
                <iframe style={{borderRadius:"12px"}} src={"https://open.spotify.com/embed/track/4ayWvk7ht8XGPUrCiDnT0m?utm_source=generator"} width="100%" height="152" frameBorder={0} allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
              </Box>
              <Box sx={{borderTop: '1px solid white', borderRight: '1px solid white', borderBottom: '1px solid white', writingMode: 'vertical-rl', textOrientation: 'mixed', paddingTop: '10px', paddingBottom: '10px' }}>
                PLACEHOLDER
              </Box>
            </Box>
            <Box sx={{flex: 1, color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <Typography sx={{fontSize: '40px'}}>CANDY SAYS</Typography>
            </Box>
          </Box>
          <Divider sx={{backgroundColor: 'white', color: 'white', width: '80%', marginTop: '25px', marginBottom: '50px'}} />
          {sectionTitle('Older Music')}
          <Box sx={{marginTop: '50px', marginBottom: '50px', width: '80%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', border: '1px solid white', height: '400px' }}>
            {otherAlbums.map((item) => {
              //make this the carousel
              return (
                <Box sx={{overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center'}}>
                  <Box sx={{
                    backgroundImage: `url(${item.img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: "no-repeat",
                    height: "200px",
                    width: "200px",
                    border: '3px solid #FFFFFA',
                  }} />
                  <Fab onClick={() => handleListenClick(item.name)} sx={{borderRadius: '15px', width: '150px', height: '20px', marginTop: '10px', backgroundColor: 'black', border: '2px solid #912F40', color: "#FFFFFA", "&:hover":{backgroundColor: '#702632'}}}> {item.name} </Fab>
                </Box>
              )
            })}
          </Box>
          {sectionTitle('Software Projects')}
          <Box sx={{marginTop: '50px', height: '300px', width: '80vw', marginBottom: '50px', border: '1px solid white', display: 'flex', flexDirection: 'row', justifyContent: 'start'}}>
            <Box sx={{color: 'white', borderRight: '1px solid white', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', flex: 1}}>
              <ButtonGroup
                orientation="vertical"
                variant="text"
                sx={{borderColor: 'white', '& .MuiButtonGroup-grouped': {
                  borderColor: 'white', 
                }}}
              >
                {projectSelections}
              </ButtonGroup>
            </Box>
            <Box sx={{color: 'white', flex: 3, display: 'flex', flexDirection: 'column', justifyContent: 'start', overflow: 'hidden'}}>
                <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'start', height: '230px', borderBottom: '1px solid white', width: '100%'}}>
                  <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', color: 'white', height: '230px', width: '230px', borderRight: '1px solid white', backgroundImage: projectContent.display, minWidth: '230px'}}>
                    <Typography align='center' sx={{fontSize: '30px', alignItems: 'center'}}>{selectedProject}</Typography>
                  </Box>
                  <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'start', overflow: 'auto', '&::-webkit-scrollbar': { display: 'none' }, scrollbarWidth: 'none'}}>
                    <Typography sx={{color: 'white', marginLeft: '5px'}}>Description:</Typography>
                    <Typography sx={{color: 'white', marginLeft: '15px', fontSize: '15px'}}>{projectContent.description.desc}</Typography>
                    <Typography sx={{color: 'white', marginLeft: '5px'}}>Features:</Typography>
                    {projectContent.description.features.map((item) => {
                      return (
                        <Typography sx={{color: 'white', marginLeft: '15px', fontSize: '15px'}}>- {item}</Typography>
                      )
                    })}
                  </Box>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'start', overflowX: 'auto', alignItems: 'center', height: '70px', width: '100%', '&::-webkit-scrollbar': { display: 'none' }}}>
                  {projectContent.stack.map((item) => {
                    return (
                      <Chip sx={{color: 'white', border: '1px solid white', marginLeft: '10px', scrollbarWidth: 'none' }} label={item} />
                    )
                  })}
                </Box>
            </Box>
          </Box>
          <Divider sx={{backgroundColor: 'white', color: 'white', width: '80%', marginTop: '25px', marginBottom: '50px'}} />
          {sectionTitle('Contact')}
          <Contact />
          <Divider sx={{backgroundColor: 'white', color: 'white', width: '80%', marginTop: '25px', marginBottom: '50px'}} />
        </Box>
      </Box>
      <Drawer
        anchor='left'
        open={openLeftMenu}
        onClose={() => setOpenLeftMenu(false)}
        sx={{'& .MuiDrawer-paper': {backgroundColor: 'black'}}}
      >
        <Box sx={{width: '20vw', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'center'}}>
          <Button onClick={() => setScrollView(topRef)} sx={{width: '80%', height: '30px', textTransform: 'none', color: 'white', marginTop: '10px'}}>
            <Typography>ptbudd</Typography>
          </Button>
          <Divider sx={{backgroundColor: 'white', color: 'white', width: '80%', marginBottom: '10px', marginTop: '10px'}} />
          <Button onClick={() => setScrollView(introRef)} sx={{width: '80%', height: '30px', textTransform: 'none', color: 'white'}}>
            <Typography>Bio</Typography>
          </Button>
          <Divider sx={{backgroundColor: '#912F40', color: '#912F40', width: '80%', marginBottom: '10px', marginTop: '10px'}} />
          <Button onClick={() => setScrollView(newMusicRef)} sx={{width: '80%', height: '30px', textTransform: 'none', color: 'white'}}>
            <Typography>New Music</Typography>
          </Button>
          <Divider sx={{backgroundColor: '#912F40', color: '#912F40', width: '80%', marginBottom: '10px', marginTop: '10px'}} />
          <Button onClick={() => setScrollView(oldMusicRef)} sx={{width: '80%', height: '30px', textTransform: 'none', color: 'white'}}>
            <Typography>Old Music</Typography>
          </Button>
          <Divider sx={{backgroundColor: '#912F40', color: '#912F40', width: '80%', marginBottom: '10px', marginTop: '10px'}} />
          <Button onClick={() => setScrollView(softwareProjectsRef)} sx={{width: '80%', height: '30px', textTransform: 'none', color: 'white'}}>
            <Typography>Software Projects</Typography>
          </Button>
          <Divider sx={{backgroundColor: '#912F40', color: '#912F40', width: '80%', marginBottom: '10px', marginTop: '10px'}} />
          <Button onClick={() => setScrollView(contactRef)} sx={{width: '80%', height: '30px', textTransform: 'none', color: 'white'}}>
            <Typography>Contact</Typography>
          </Button>
          <Divider sx={{backgroundColor: 'white', color: 'white', width: '80%', marginBottom: '10px', marginTop: '10px'}} />
        </Box>
      </Drawer>
    </Box>
  )
}

export default Home;