import { AppBar, Toolbar, Typography, Box, Button, Icon  } from '@mui/material';
import React from 'react';
import { keyframes } from '@mui/system';

function AutoCarousel() {

    const slide = keyframes`
        0% {
            left: 0;
        }
        100% {
            left: -100%;
        }
    `;

    const cardDetails = {
    0: {
        imgUrl: "https://picsum.photos/id/237/200/300",
        title: "Text 1"
    },

    1: {
        imgUrl: "https://picsum.photos/id/238/200/300",
        title: "Text 2"
    },

    2: {
        imgUrl: "https://picsum.photos/id/239/200/300",
        title: "Text 3"
    },

    3: {
        imgUrl: "https://picsum.photos/id/240/200/300",
        title: "Text 4"
    },

    4: {
        imgUrl: "https://picsum.photos/id/241/200/300",
        title: "Text 5"
    },

    5: {
        imgUrl: "https://picsum.photos/id/42/200/300",
        title: "Text 6"
    },

    6: {
        imgUrl: "https://picsum.photos/id/243/200/300",
        title: "Text 7",
    },

   
}

  const cItem = (url: any, title: any) => {
    return (
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', "&:hover":{transform: 'scale(0.9)', border: '1px solid red'}, borderRadius: '20%', background: 'green'}}>
            <Typography>A Card!</Typography>
        </Box>
    );
  }

  return (
    <Box sx={{overflow: 'hidden', position: 'relative', height: '100%', width: '100%', border: '1px solid white'}}>
      <Box sx={{display: 'flex', position: 'absolute', left: 0, justifyContent: 'center', alignItems: 'center', gap: '16px', width: '200%', height: '100%', animation: 'slide 20s linear infinite', "&:hover":{animationPlayState: 'paused'}}}>
        {Object.keys(cardDetails).map((detailKey) => {
          return (
            <Box>
                {cItem("yes", 'no')}
            </Box>
          )
        })}
        {Object.keys(cardDetails).map((detailKey) => {
          return (
            <Box>
                {cItem("yes", 'no')}
            </Box>
          )
        })}
        {Object.keys(cardDetails).map((detailKey) => {
          return (
            <Box>
                {cItem("yes", 'no')}
            </Box>
          )
        })}
        {Object.keys(cardDetails).map((detailKey) => {
          return (
            <Box>
                {cItem("yes", 'no')}
            </Box>
          )
        })}
        {Object.keys(cardDetails).map((detailKey) => {
          return (
            <Box>
                {cItem("yes", 'no')}
            </Box>
          )
        })}
        {/* {Object.keys(cardDetails).map((detailKey) => {
          return (
            <CarouselItem
              imgUrl={cardDetails[detailKey].imgUrl}
              imgTitle={cardDetails[detailKey].title}
            ></CarouselItem>
          );
        })} */}
      </Box>
    </Box>
  );
}

export default AutoCarousel;