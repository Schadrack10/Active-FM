import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "../components/Card";
import Footer from "../components/Footer";
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
  padding: "20px 0",
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
  // height:"600px"
  // border:"1px solid red"
  // border:"1px solid violet"
};
const frame = {
  minWidth: "500px",
  height: "200px",
};

const Live = () => {
  return (
    <Box sx={{ height: "auto" }}>
      <Grid container sx={gridContainer}>
        <Grid item md={8} style={gridItem}>
          {/* <SectionTitle title="TALK SHOWS" /> */}

          <Box sx={sections}>
            <ReactPlayer
               playing={true}
              width="100%"
              height="500px"
              url="https://www.youtube.com/watch?v=rjDXZO-Ek24"
              style={frame}
            />
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
  );
};

export default Live;
