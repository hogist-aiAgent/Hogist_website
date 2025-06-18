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
import banner from '../assets/client/client-1.png';
// Example image data (replace with real images)
const cards = [
  {
    title: "Berries Salad",
 description:"Community of 100+ best Vendors all over the city for flawless Operations with flexibility, Consistency, and safe food.",
    color: "#F87171",
    image: banner,
  },
  {
    title: "Healthy Salad",
    price: "$3.00",
    color: "#FBBF24",
    image: "/images/healthy1.png",
  },
  {
    title: "Berries Salad",
    price: "$4.00",
    color: "#4ADE80",
    image: "/images/berries2.png",
  },
  {
    title: "Healthy Salad",
    price: "$5.00",
    color: "#818CF8",
    image: "/images/healthy2.png",
  },
  {
    title: "Berries Salad",
    price: "$5.00",
    color: "#F87171",
    image: "/images/berries1.png",
  },
  {
    title: "Healthy Salad",
    price: "$3.00",
    color: "#FBBF24",
    image: "/images/healthy1.png",
  },
  {
    title: "Berries Salad",
    price: "$4.00",
    color: "#4ADE80",
    image: "/images/berries2.png",
  },
  {
    title: "Healthy Salad",
    price: "$5.00",
    color: "#818CF8",
    image: "/images/healthy2.png",
  },
  {
    title: "Berries Salad",
    price: "$5.00",
    color: "#F87171",
    image: "/images/berries1.png",
  },
  {
    title: "Healthy Salad",
    price: "$3.00",
    color: "#FBBF24",
    image: "/images/healthy1.png",
  },
  {
    title: "Berries Salad",
    price: "$4.00",
    color: "#4ADE80",
    image: "/images/berries2.png",
  },
  {
    title: "Healthy Salad",
    price: "$5.00",
    color: "#818CF8",
    image: "/images/healthy2.png",
  },
  {
    title: "Berries Salad",
    price: "$5.00",
    color: "#F87171",
    image: "/images/berries1.png",
  },
  {
    title: "Healthy Salad",
    price: "$3.00",
    color: "#FBBF24",
    image: "/images/healthy1.png",
  },
  {
    title: "Berries Salad",
    price: "$4.00",
    color: "#4ADE80",
    image: "/images/berries2.png",
  },
  {
    title: "Healthy Salad",
    price: "$5.00",
    color: "#818CF8",
    image: "/images/healthy2.png",
  },
  
];

const SaladCard = ({ title, description, image }) => (
  <Card
    sx={{
      minWidth: 250,
      height: 350, 
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
      <Typography variant="h6" fontWeight="bold" mb={1}>
        {title}
      </Typography>
      <Typography  lineHeight={1.6} sx={{fontSize:"14px ", display: "-webkit-box", WebkitLineClamp: 5, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
        {description}
      </Typography>
    </CardContent>
  </Card>
);;

export default function SaladCarousel() {
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
        py: 6,
        px: { xs: 2, md: 7 },
        borderRadius: "20px",
        overflow: "hidden",
      }}
    >
        <Box
    sx={{
         position: "absolute",
            left: "0px",
            top: "300px",
            transform: "translateY(-50%)",
            width: 50,
            height: 50,
            borderTopLeftRadius: "20px",
            background: "white",
            zIndex: 100,
    }}
  >
</Box>
  <Box
    sx={{
         position: "absolute",
           left: "0px",
            top: "236px",

            transform: "translateY(-50%)",
            width: 20,
            height: 20,
 
            background: "black",
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
          bgcolor: "black",
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
            background: "white ",
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

            background: "black",
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
          bgcolor: "black",
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
            background: "white ",
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

            background: "black",
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
            top: "290px",
            transform: "translateY(-50%)",
            width: 50,
            height: 50,
            borderTopRightRadius: "20px",
            background: "white",
            zIndex: 100,
    }}
  >
</Box>
  <Box
    sx={{
         position: "absolute",
           right: "0px",
            top: "236px",

            transform: "translateY(-50%)",
            width: 20,
            height: 20,
 
            background: "black ",
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
