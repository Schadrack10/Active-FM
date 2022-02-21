import React from "react";
import Box from "@mui/material/Box";

const heading = {
  color: "white",
};

const headingContainer = {
    margintop:"30px",
  display: "flex",
  flexDirection: "column",
};
const underline = {
  height: "5px",
  background: "rgb(152, 21, 21)",
  border: "none",
  width: "100px",
  borderRadius:"10px"
};

const SectionTitle = ({title}) => {
  return (
    <Box sx={headingContainer}>
      <h3 style={heading}>{title}</h3>
      <Box style={underline}></Box>
    </Box>
  );
};

export default SectionTitle;
