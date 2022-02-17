import React from "react";
import Link from "next/link"
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const flexBoxCenter ={
    display:"flex" ,
    alignItems:"center" ,
    justifycontent:"center"
}
const resImg = {
   objectFit:"contain",
}

const navbar = {
  display: "flex",
  height: "auto",
  color:"white",
  background:"black"
}

const topBar = {
  height: "20px",
  width: "100%",
  background: "darkgreen",
}

const half = { 
    width:"50%",
    height:"100%",
    padding:"10px",
    display:"flex"

    
}
const linkContainer={
  
    width:"90%",
    display:"flex",
    alignItems:"center"
}
const navLinks={

    width:"100px",
    height:"100%",
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
}


const Navbar = () => {
  return (
    <header>
      <div style={topBar}></div>
      <nav style={navbar}>
           <div style={half}>
                <div style={{width:"10%"}}>
                <img src="main-logo.png" alt="" width={40} height={40} style={resImg} />
                </div>
                <div style={linkContainer}>
                    <div style={navLinks}>
                       <Link  href="/"><a>Home</a></Link>
                    </div>
                    <div style={navLinks}>
                       <Link  href="/Shows"><a>Shows</a></Link>
                    </div>
                    <div style={navLinks}>
                       <Link  href="/Live"><a>Live</a></Link>
                    </div>
                    <div style={navLinks}>
                       <Link  href="/About"><a>About</a></Link>
                    </div>
                </div>
           </div>

           <div style={half}></div>
      </nav>
    </header>
  );
};

export default Navbar;
