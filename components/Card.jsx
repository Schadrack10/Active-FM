import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";


const container = {
  background: "rgba(0, 0, 0, 0.1)",
  height: "260px",
  width: "200px",
  margin: "0 5px",
  padding: "8px",
  cursor: "pointer",
  '&:hover':{
    background: "rgba(0, 0, 0, 0.3)",
  }
};
const imageContainer = {
  width: "100%",
  height: "70%",
};
const textContainer = {
  height: "30%",
  width: "100%",
  display: "flex",
  justifyContent: "space-around",
  flexDirection: "column",
};

const image = {
  objectPosition:"top",
  objectFit: "cover",
  width: "100%",
  height: "100%",
};
const heading = {
  fontSize: "15px",
  color: "white",
  margin:"10px 0"
};
const paragraph = {
  color: "#555",
  fontSize: "13px",
  wordBreak:"break-all",
  textOverflow: "ellipsis"
};



export const getStaticProps = async()=>{
    const res = await fetch('db.json')
    const data = await res.json()
 
    return {
        prop:{item:data}

      }
    
      
}

function fetchData() {
    fetch('db.json').then(res => res.json()).then(data => console.log(data))
}

fetchData()



const Card = ({ img, title, para ,para2, item }) => {
  return ( 
    <Link href="https://iono.fm/c/6061">
    <Box sx={container}>
      <Box sx={imageContainer}>
        <img style={image} src={img} alt="card-image" />
      </Box>
      <Box sx={textContainer}>
        <Typography sx={heading} variant="p">
          {title}
        </Typography>
        <Typography sx={paragraph} variant="p">
          {para}  <br />
          {para2}
        </Typography>
      </Box>
    </Box>

   {/* { item.map(item=>(
       <div className="">
             <h1>{console.log(item)}</h1>
       </div>
   ))} */}

  </Link>
  );
};

export default Card;
