import Head from 'next/head'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Swiper from '../components/SwiperComp';
import SwiperComp from '../components/SwiperComp';
import Card from '../components/Card';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';







const gridContainer = {
  height: "calc(100vh - 84px)",
  width: "100%",
  background: "#111"

}
const gridItem = {
  height: "100%",
  width: "100%",
  overflow: "auto",
  padding: "0 15px"
}
const gridItem2 ={
  height: "100%",
  width: "100%",
  // overflow: "auto",
  // padding: "0 15px"
}

const sections = {
  height: "300px",
  //  border:"1px solid red",
  width: "100%",
  overflow: "auto",
  margin: "20px 0",
  // padding:"10px",
  display: "flex",
  flexDirection: "column"
  // justifyContent:"space-around"
}

const scheduleContainer = {
  // border:"1px solid red",
  height:"550px",
  width:"100%",
  margin:"20px 0"
}
const iframeStyle = {
  height: "100%",
  width: "100%",
  background: "#000",
  margin: 0,
  padding: 0,
  borderRadius:"0",
  overflow:"none"

}
const cardContainer = {
  display: "flex",
  width: "2000px",
  // border:"1px solid red"
  // border:"1px solid violet"
}




export default function Home() {
  return (
    <>
      <Head>
        <title>Active FM</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="logo.jpg" />
      </Head>

      <Box sx={{ height: "auto" }}>

        <Grid container sx={gridContainer}>
          <Grid item md={8} style={gridItem}>
            <SwiperComp />

            <SectionTitle title="TALK SHOWS" />
            <Box sx={sections}>
              <Box sx={cardContainer}>
                <Card img="Oh Baby!.jpg" title="Oh Baby! Bible Stories" para="Hey Kids! Go on a very fun" para2="adventure with T&C they i..." />
                <Card img="Inspiration For Today.jpg" title="Inspiration For Today" para="Need some motivation? Enjoy" para2="some very encouraging and i .." />
                <Card img="The VAR.jpg" title="The V.A.R Show" para="This show is for every football" para2="lover out there. V.A.R" />
                <Card img="It's A Mom's Life 1.jpg" title="It's A Mom's Life" para="Struggling to cope as a mom?" para2="Not sure if you are raisin..." />
                <Card img="The Void 1 (1).jpg" title="The Void Show" para="This show is about science" para2="and the world today.want to..." />
                <Card img="laun.jpg" title="Dirty Laundry" para="Welcome to Dirty Laundry!" para2="Naomi & Beston discuss anything.." />
                <Card img="logo.jpg" title="Walk The Walk" para="Welcome to Walk The Talk on" para2="Active FM" />
                <Card img="logo.jpg" title="The Game Changers" para="A podcast series that is hosted" para2="by TT Moafrika.Achieve.." />
              </Box>
            </Box>
            {/* next-section */}
            <SectionTitle title="MORNING SHOWS" />

            <Box sx={sections}>
              <Box sx={cardContainer}>
                <Card img="morning1.jpeg" title="The Love Show" para="Hey Kids! Go on a very fun" para2="adventure with T&C they i..." />
                <Card img="morning2.jpg" title="The Political show" para="Need some motivation? Enjoy" para2="some very encouraging and i .." />
                <Card img="morning3.jpg" title="Whats The Topic" para="This show is for every football" para2="lover out there. V.A.R" />
                <Card img="morning4.jpg" title="Let's Talk" para="Struggling to cope as a mom?" para2="Not sure if you are raisin..." />
                <Card img="morning5.jpg" title="The TBA Show" para="This show is about science" para2="and the world today.want to..." />
                <Card img="morning6.jpg" title="De Mode" para="Welcome to Dirty Laundry!" para2="Naomi & Beston discuss anything.." />
                <Card img="logo.jpg" title="The Kairos Moment" para="Welcome to Walk The Talk on" para2="Active FM" />
                <Card img="logo.jpg" title="Dynamic Thoughts" para="A podcast series that is hosted" para2="by TT Moafrika.Achieve.." />
              </Box>
            </Box>

            {/* next-section */}
            <SectionTitle title="AFTERNOON SHOWS" />

            <Box sx={sections}>
              <Box sx={cardContainer}>
                <Card img="Oh Baby!.jpg" title="Oh Baby! Bible Stories" para="Hey Kids! Go on a very fun" para2="adventure with T&C they i..." />
                <Card img="Inspiration For Today.jpg" title="Inspiration For Today" para="Need some motivation? Enjoy" para2="some very encouraging and i .." />
                <Card img="The VAR.jpg" title="The V.A.R Show" para="This show is for every football" para2="lover out there. V.A.R" />
                <Card img="It's A Mom's Life 1.jpg" title="It's A Mom's Life" para="Struggling to cope as a mom?" para2="Not sure if you are raisin..." />
                <Card img="The Void 1 (1).jpg" title="The Void Show" para="This show is about science" para2="and the world today.want to..." />
                <Card img="laun.jpg" title="Dirty Laundry" para="Welcome to Dirty Laundry!" para2="Naomi & Beston discuss anything.." />
                <Card img="logo.jpg" title="Walk The Walk" para="Welcome to Walk The Talk on" para2="Active FM" />
                <Card img="logo.jpg" title="The Game Changers" para="A podcast series that is hosted" para2="by TT Moafrika.Achieve.." />
              </Box>
            </Box>

            {/* next-section */}
            <SectionTitle title="EVENING SHOWS" />

            <Box sx={sections}>
              <Box sx={cardContainer}>
                <Card img="Oh Baby!.jpg" title="Oh Baby! Bible Stories" para="Hey Kids! Go on a very fun" para2="adventure with T&C they i..." />
                <Card img="Inspiration For Today.jpg" title="Inspiration For Today" para="Need some motivation? Enjoy" para2="some very encouraging and i .." />
                <Card img="The VAR.jpg" title="The V.A.R Show" para="This show is for every football" para2="lover out there. V.A.R" />
                <Card img="It's A Mom's Life 1.jpg" title="It's A Mom's Life" para="Struggling to cope as a mom?" para2="Not sure if you are raisin..." />
                <Card img="The Void 1 (1).jpg" title="The Void Show" para="This show is about science" para2="and the world today.want to..." />
                <Card img="laun.jpg" title="Dirty Laundry" para="Welcome to Dirty Laundry!" para2="Naomi & Beston discuss anything.." />
                <Card img="logo.jpg" title="Walk The Walk" para="Welcome to Walk The Talk on" para2="Active FM" />
                <Card img="logo.jpg" title="The Game Changers" para="A podcast series that is hosted" para2="by TT Moafrika.Achieve.." />
              </Box>
            </Box>

            {/* next-section */}
            <SectionTitle title="MUSIC SHOWS" />

            <Box sx={sections}>
              <Box sx={cardContainer}>
                <Card img="Oh Baby!.jpg" title="Oh Baby! Bible Stories" para="Hey Kids! Go on a very fun" para2="adventure with T&C they i..." />
                <Card img="Inspiration For Today.jpg" title="Inspiration For Today" para="Need some motivation? Enjoy" para2="some very encouraging and i .." />
                <Card img="The VAR.jpg" title="The V.A.R Show" para="This show is for every football" para2="lover out there. V.A.R" />
                <Card img="It's A Mom's Life 1.jpg" title="It's A Mom's Life" para="Struggling to cope as a mom?" para2="Not sure if you are raisin..." />
                <Card img="The Void 1 (1).jpg" title="The Void Show" para="This show is about science" para2="and the world today.want to..." />
                <Card img="laun.jpg" title="Dirty Laundry" para="Welcome to Dirty Laundry!" para2="Naomi & Beston discuss anything.." />
                <Card img="logo.jpg" title="Walk The Walk" para="Welcome to Walk The Talk on" para2="Active FM" />
                <Card img="logo.jpg" title="The Game Changers" para="A podcast series that is hosted" para2="by TT Moafrika.Achieve.." />
              </Box>
            </Box>

            <SectionTitle title="SCHEDULE" />

         
              <Box sx={scheduleContainer}>
                <img src="schedule.png" width="100%" height="100%" />
              </Box>
              <Footer/>           
          </Grid>
          <Grid item md={4} style={gridItem2}>
            {/* <Box sx={{height:"1000px",width:"100%",background:"#222"}}>bmbhhj</Box> */}
            <iframe
                src="https://iframe.iono.fm/p/277?layout=legacy&lang=en&playlist=latest&accent=ed3d96&background=000000&border=000000&text=ffffff&rounded=19&artwork=0&description=0&sharing=1&waveform=0&download=1"
                style={iframeStyle}
                frameBorder="0"
                title = "iono player"
              />
          </Grid>

        </Grid>


      </Box>

    </>

  )
}
