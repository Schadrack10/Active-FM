import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Head from "next/head";
import Footer from "../components/Footer";
import Card from "../components/Card";
import SectionTitle from "../components/SectionTitle";
import ReactPlayer from "react-player";


const gridContainer = {
  height: "calc(100vh - 84px)",
  width: "100%",
  background: "#111",
};
const gridItem = {
  height: "100%",
  width: "100%",
  overflow: "auto",
  padding: "0 15px",
};
const gridItem2 = {
  height: "100%",
  width: "100%",
  // overflow: "auto",
  // padding: "0 15px"
};

const sections = {
  height: "auto",
  //  border:"1px solid red",
  width: "100%",
  // overflow: "auto",
  margin: "5px 0",
  // padding:"10px",
  display: "flex",
  flexDirection: "column",
  padding: "20px 0"
  // justifyContent:"space-between"
};
const iframeStyle = {
  height: "100%",
  width: "100%",
  background: "#000",
  margin: 0,
  padding: 0,
  borderRadius: "0",
  overflow: "none",
};
const cardContainer = {
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  margin: "15px 0",
};
const frame = {
  minWidth: "500px",
  height: "200px",
  background: "#000"
};
const heading = {
  color: "white",
  margin: "20px 0"
}
const paragraph = {
  color: "#888",
  margin: "10px 0"
}





const About = () => {
  return (
    <Box sx={{ height: "auto" }}>
      <Grid container sx={gridContainer}>
        <Grid item md={8} style={gridItem}>
          <SectionTitle title="The Active FM story" />
          <Box sx={sections}>
            <ReactPlayer
              playing="true"
              width="100%"
              height="400px"
              url="https://www.activefm.co.za/promo.mp4"
              style={frame}
            />
            {/* <video autoplay="true" style="width: 100%; height: 350px; min-height: 400px; background: rgb(0, 0, 0);"><source src="promo.mp4" type="video/mp4"><source src="promo.ogg" type="video/ogg">Your browser does not support the videotag.</source></video> */}


            {/* add content here */}
            <Typography variant="" sx={heading}>
              Who Are We?
            </Typography>

            <Typography variant="" sx={paragraph}>
              Active FM is an international online podcasting radio station operating from the south of Johannesburg.
              We release 5 shows a day - Mondays to Fridays.
              We release 5 shows a day - Mondays to Fridays. We have all your favourite shows and the greatest variety of topics to match all your interests - from sports to trends, philosophy, astronomy, comedy, love, movies and so much more.
              We talk about handling day to day obstacles, enjoying life, world events and its impact on us.
            </Typography>

            <Typography variant="" sx={heading}>
              Why Choose Active FM?

            </Typography>

            <Typography variant="" sx={paragraph}>
              Our presenters bring amusing fresh perspectives.
              Active FM focuses on producing quality shows with unique content and lively radio DJ’s. Active FM is more than just a radio station - it’s a family. A community of people uniting to discuss the issues of life and share common interests / hobbies.
              You are guaranteed to learn new life skills, feel great after listening to our shows and we’ll keep you updated.
              Get the truth and stay connected. Become a part of the family today.

            </Typography>

            <Typography variant="" sx={heading}>
              Active FM Milestones / Achievements:

            </Typography>

            <Typography variant="" sx={paragraph}>
              Active FM is in over 100 countries with a 50% increase in listenership annually.
              De Mode has ranked number 1 in the category “Fashion and Beauty” in Yemen and number 12 in category “Arts” in Yemen. Philosophically Poetic ranked in the top listened to shows on iTunes in Kenya.
              We have distinguished interviews with great artists and businessmen / women all over the world.
              Link: https://iono.fm/c/4178

            </Typography>

          </Box>
          <Footer />
        </Grid>
        <Grid item md={4} style={gridItem2}>
          {/* <Box sx={{height:"1000px",width:"100%",background:"#222"}}>bmbhhj</Box> */}
          <iframe
            src="https://iframe.iono.fm/p/277?layout=legacy&lang=en&playlist=latest&accent=ed3d96&background=000000&border=000000&text=ffffff&rounded=19&artwork=0&description=0&sharing=1&waveform=0&download=1"
            style={iframeStyle}
            frameBorder="0"
            title="iono player"
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default About