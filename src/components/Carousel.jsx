import React, { useRef } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import banner1 from '../assets/feature/open-food-containers.jpg';
import banner2 from '../assets/feature/feature3.jpg';
import banner3 from '../assets/feature/feature4.jpg';
import banner4 from '../assets/feature/feature5.jpg';
import banner5 from '../assets/feature/feature2.jpg';
import theme from '../theme/theme';
const cards = [
  {
    title: "Over 100 top caterers",
 description:"Community of 100+ best Vendors all over the city for flawless Operations with flexibility, Consistency, and safe food.",
    color: "#000",
    image: banner1,
  },
    {
    title: "No Menu Markups",
 description:"Say Goodbye to Menu Markups and have a transparent dining experience. You'll always know that your satisfaction is our top priority.",
    color: "#F87171",
    image: banner2,
  },  {
    title: "Any Group size, or Budget",
 description:"We're dedicated to understanding your desires, preferences, and budgetary constraints. Tailored Experiences, Every Time",
    color: "#F87171",
    image: banner3,
  },  {
    title: "Delivering on time",
 description:"Professionally prepared and delivering food you can rely on for your meetings and events with real-time delivery vehicle tracking.",
    color: "#F87171",
    image: banner4,
  },  {
    title: "24/7 support from Experts",
 description:"Expert support available around the clock for all your needs. We're here whenever you need us. Call us at +91 99626 67733.",
    color: "#F87171",
    image: banner5  ,
  },  {
    title: "More options",
 description:"Food for hybrid offices, daily employee meals, and fluctuating headcounts. Including previous day cancellation and menu changes.",
    color: "#F87171",
    image: banner1,
  }, 
  
];

const SaladCard = ({ title, description, image }) => (
  <Card
    sx={{
      minWidth: 250,
      height: 360, 
      backgroundColor: "#2E3336",
      color: "#fff",
      overflow: "hidden",
      textAlign: "left",
      display: "flex",
      flexDirection: "column",
      border:"1px solid #ccc",
    }}
  >
    <CardMedia
      component="img"
      image={image}
      alt={title}
      sx={{
        width: "100%",
        height: 150, 
        objectFit: "cover",
      }}
    />
    <CardContent
      sx={{
        flexGrow: 1,
        px: 2,
        py: 1,
        overflow: "hidden",
      }}
    >
      <Typography variant="h6" fontWeight="bold" sx={{
        // color: theme.palette.primary.secondary
      }} mb={1}>
        {title}
      </Typography>
      <Typography  lineHeight={1.6} sx={{fontSize:"14px ", display: "-webkit-box", WebkitLineClamp: 5, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
        {description}
      </Typography>
    </CardContent>
  </Card>
);;

export default function Carousel() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        background: "white",
        py: 2,
        px: { xs: 2, md: 7 },
        borderRadius: "20px",
        overflow: "hidden",
      }}
    >
        <Box
    sx={{
         position: "absolute",
            left: "0px",
            top: "71.3%",
            transform: "translateY(-50%)",
            width: 50,
            height: 50,
            borderTopLeftRadius: "20px",
            background:{ xs:"transparent",md:"white"},
            zIndex: 100,
    }}
  >
</Box>
  <Box
    sx={{
         position: "absolute",
           left: "0px",
     top: "67%",

            transform: "translateY(-50%)",
            width: 20,
            height: 20,
 
            background: { xs:"transparent",md:"black"}
    }}
  >
</Box>
 
      <Box
        sx={{
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
          width: 80,
          height: 120,
          bgcolor: { xs:"transparent",md:"black"},
          
          borderTopRightRadius: 60,
          borderBottomRightRadius: 60,
          borderBottomLeftRadius: 0,
          borderTopLeftRadius: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        
          zIndex: 2,
          "&::before": {
            content: '""',
            position: "absolute",
            left: "0px",
            top: "-25px",
            transform: "translateY(-50%)",
            width: 50,
            height: 50,
            borderBottomLeftRadius: "20px",
            background:{
              xs: "transparent",
            md: "white",
            },
            zIndex: 100,
          },

          "&::after": {
            content: '""',
            position: "absolute",
            left: "0px",
            top: "-10px",

            transform: "translateY(-50%)",
            width: 20,
            height: 20,

            background: { xs:"transparent",md:"black"},
          },
          
        }}
      >
        <IconButton
          onClick={() => scroll("left")}
          sx={{
            position: "absolute",
            left: 0,
            backgroundColor: "red",
            boxShadow: 1,
            width: 50,
            height: 50,
            // "&:hover": { backgroundColor: "#f0f0f0" },
          }}
        >
          <ArrowBackIos fontSize="small" />
        </IconButton>
      </Box>


      <Box
        sx={{
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
    width: 80,
          height: 120,
          bgcolor: {
            xs:"transparent",md:"black"
          },
          borderTopLeftRadius: 60,
          borderBottomLeftRadius: 60,
          borderBottomRightRadius: 0,
          borderTopRightRadius: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
             "&::before": {
            content: '""',
            position: "absolute",
            right: "0px",
            top: "-25px",
            transform: "translateY(-50%)",
            width: 50,
            height: 50,
            borderBottomRightRadius: "20px",
            background: { xs:"transparent",md:"white"},
            zIndex: 100,
          },

          "&::after": {
            content: '""',
            position: "absolute",
            right: "0px",
            top: "-10px",

            transform: "translateY(-50%)",
            width: 20,
            height: 20,

            background: { xs:"transparent",md:"black"},
          },
          zIndex: 2,
        }}
      >
        <IconButton
          onClick={() => scroll("right")}
          sx={{
            backgroundColor: "red",
            boxShadow: 1,
        width: 50,
        position: "absolute",
            right: 0,
            height: 50,
            // "&:hover": { backgroundColor: "#f0f0f0" },
          }}
        >
          <ArrowForwardIos fontSize="small" />
        </IconButton>
      </Box>
     <Box
    sx={{
         position: "absolute",
            right: "0px",
                       top: "71.3%",
            transform: "translateY(-50%)",
            width: 50,
            height: 50,
            borderTopRightRadius: "20px",
            background: { xs:"transparent",md:"white"},
            zIndex: 100,
    }}
  >
</Box>
  <Box
    sx={{
         position: "absolute",
           right: "0px",
           top: "67%",

            transform: "translateY(-50%)",
            width: 20,
            height: 20,
 
            background: { xs:"transparent",md:"black"},
    }}
  >
</Box>
      <Box
        ref={scrollRef}
        sx={{
          display: "flex",
          gap: 2,
          overflowX: "auto",
          scrollBehavior: "smooth",
          px: 4,
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {cards.map((item, index) => (
          <SaladCard key={index} {...item} />
        ))}
      </Box>
    </Box>
  );
}
