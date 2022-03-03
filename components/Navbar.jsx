import React from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import PodcastsIcon from '@mui/icons-material/Podcasts';



const flexBoxCenter = {
  display: "flex",
  alignItems: "center",
  justifycontent: "center",
};
const resImg = {
  objectFit: "contain",
};

const navbar = {
  display: "flex",
  height: "auto",
  color: "white",
  background: "black",
};

const topBar = {
  display: "flex",
  height: "20px",
  width: "100%",
  background: "rgb(0, 49, 45)",
};

const half = {
  width: "50%",
  height: "100%!",
  padding: "10px",
  display: "flex",

};
const linkContainer = {
  width: "90%",
  display: "flex",
  alignItems: "center",
};
const navLinks = {
  width: "100px",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const hoverIcons = {
  margin:"0 5px",
  cursor:"pointer",
  '&:hover':{
    color:"#ed3d96"
  }
}


const Navbar = () => {
  return (
    <header>
      <Box style={topBar}>
        <Box
          sx={{
            flex: "1",
            color: "white",
            display: "center",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "800",
          }}
        >
          <Typography variant="p" sx={{ fontSize: "10px" }}>
            084 628 6060
          </Typography>
        </Box>
        <Box
          sx={{
            flex: "1",
            color: "white",
            display: "center",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "800",
          }}
        >
          <Typography variant="p" sx={{ fontSize: "10px" }}>
            activefm@activemi.co.za
          </Typography>
        </Box>
        <Box
          sx={{
            flex: "1",
            color: "white",
            display: "center",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "800",
          }}
        >
          <Typography variant="p" sx={{ fontSize: "10px" }}>
            26A Loveday Street South Selby, Johannesburg South Africa
          </Typography>
        </Box>
      </Box>
      <nav style={navbar}>
        <Box style={half}>
          <Box style={{ width: "10%" }}>
            <img
              src="main-logo.png"
              alt=""
              width={40}
              height={40}
              style={resImg}
            />
          </Box>
          <Box style={linkContainer}>
            <Box style={navLinks}>
              <Link href="/">
                <a>
                  <Typography
                    variant="p"
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      textTransform: "uppercase",
                      "&:hover": { color: "#ed3d96" },
                    }}
                  >
                    Home
                  </Typography>
                </a>
              </Link>
            </Box>
            <Box style={navLinks}>
              <Link href="/Shows">
                <a>
                  <Typography
                    variant="p"
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      textTransform: "uppercase",
                      "&:hover": { color: "#ed3d96" },
                    }}
                  >
                    Shows
                  </Typography>
                </a>
              </Link>
            </Box>
            <Box style={navLinks}>
              <Link href="/Live">
                <a>
                  <Typography
                    variant="p"
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      textTransform: "uppercase",
                      "&:hover": { color: "#ed3d96" },
                    }}
                  >
                    Live
                  </Typography>
                </a>
              </Link>
            </Box>
            <Box style={navLinks}>
              <Link href="/About">
                <a>
                  <Typography
                    variant="p"
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      textTransform: "uppercase",
                      "&:hover": { color: "#ed3d96" },
                    }}
                  >
                    About
                  </Typography>
                </a>
              </Link>
            </Box>
          </Box>
        </Box>

        <Box style={half}>
           
          <Box sx={{display:"flex",justifyContent:"flex-end",width:"100%",alignItems:"center"}}>
          <InstagramIcon sx={hoverIcons} fontSize="small"/>
              <FacebookIcon sx={hoverIcons} fontSize="small"/>
              <YouTubeIcon  sx={hoverIcons} fontSize="small"/>
              <PodcastsIcon sx={hoverIcons} fontSize="small"/>
          </Box>
      

        </Box>
      </nav>
    </header>
  );
};

export default Navbar;
