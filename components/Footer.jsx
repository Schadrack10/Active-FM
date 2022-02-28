import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

const container = {
  background: "#000",
  height: "180px",
  width: "100%",
  color: "white",
  padding: "20px",
  borderRadius: "40px 40px 0 0",
};

const mainText = {
  fontSize: "13px",
};
const centeredBox = {
  // border: "1px solid red",
  display: "flex",
  alignItems: "center",
  justifyContent:"center",
  padding:"20px"
};
const hoverIcons = {
  margin: "0 5px",
  cursor: "pointer",
  "&:hover": {
    color: "#ed3d96",
  },
};
const iconContainer = {
   marginTop:"10px"
}

const Footer = () => {
  return (
    <footer style={container}>
      <Box>
        <Typography sx={mainText} variant="h6">
          <b>Tel</b>:084 628 6060
        </Typography>
        <Typography sx={mainText} variant="h6">
          {" "}
          <b>Email</b>: activefm@activemi.co.za
        </Typography>
        <Typography sx={mainText} variant="h6">
          {" "}
          <b>Address</b>: 26A Loveday Street South Selby, Johannesburg South
          Africa
        </Typography>

        <Box sx={iconContainer}>
        <InstagramIcon sx={hoverIcons} fontSize="small" />
        <FacebookIcon sx={hoverIcons} fontSize="small" />
        <YouTubeIcon sx={hoverIcons} fontSize="small" />
        <TwitterIcon sx={hoverIcons} fontSize="small" />

        </Box>
      </Box>
      <Box sx={centeredBox}>
        <Typography sx={mainText} variant="h6" align="center">
          Copyright © 2022 Active FM. All rights reserved
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;
