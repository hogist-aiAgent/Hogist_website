import React, { useRef, useState, useEffect } from 'react'
import { Box, Typography, Rating, useTheme, Button, Stack, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const TestimonialContainer = styled(Box)({
  padding: '60px 20px',
  textAlign: 'center',
  position: 'relative',
});

const ScrollContainer = styled(Box)({
  overflow: 'hidden',
  position: 'relative',
  width: '100%',
});

const TestimonialWrapper = styled(Box)({
  display: 'flex',
  overflowX: 'auto',
  scrollSnapType: 'x mandatory',
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
  '&::-webkit-scrollbar': {
    display: 'none',
  }
});

const TestimonialCard = styled(Box)({
  backgroundColor: '#fff',
  borderRadius: '16px',
  padding: '40px 35px 45px',
  margin: '20px',
  width: '520px',
  flexShrink: 0,
  position: 'relative',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.02)',
  border: '1px solid #eaeaea',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    boxShadow: '0 15px 35px rgba(0,0,0,0.12)',
  },
  display: 'flex',
  flexDirection: 'column',
  minHeight: '420px',
  scrollSnapAlign: 'start',
});

const QuoteIconTop = styled(FormatQuoteIcon)({
  position: 'absolute',
  top: '-60px',
  left: '15px',
  fontSize: '9rem',
  color: '#c600009a',
  zIndex: 0,
});

const QuoteIconBottom = styled(FormatQuoteIcon)({
  position: 'absolute',
  bottom: '-60px',
  right: '15px',
  fontSize: '9rem',
  color: '#c600009a',
  zIndex: 0,
  transform: 'rotate(180deg)',
});

const Signature = styled(Box)({
  marginTop: 'auto',
  paddingTop: '20px',
  borderTop: '1px solid #C60000',
  position: 'absolute',
  bottom: '35px',
  left: '35px',
  right: '35px',
});

const DecorationCircle = styled(Box)({
  position: 'absolute',
  width: '150px',
  height: '150px',
  borderRadius: '50%',
  background: 'linear-gradient(135deg, rgba(198,0,0,0.1) 0%, rgba(255,255,255,0) 70%)',
  top: '-40px',
  right: '-40px',
});

const DecorationCircleBottom = styled(Box)({
  position: 'absolute',
  width: '120px',
  height: '120px',
  borderRadius: '50%',
  background: 'linear-gradient(315deg, rgba(198,0,0,0.08) 0%, rgba(255,255,255,0) 70%)',
  bottom: '-30px',
  left: '-30px',
});

const ContentWrapper = styled(Box)({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  marginBottom: '80px',
});

export default function TestimonialSection() {
  const theme = useTheme();
  const wrapperRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    const updateCardWidth = () => {
      if (wrapperRef.current && wrapperRef.current.firstChild) {
        const card = wrapperRef.current.firstChild;
        const cardStyle = window.getComputedStyle(card);
        const cardWidth = card.offsetWidth;
        const marginLeft = parseFloat(cardStyle.marginLeft) || 0;
        const marginRight = parseFloat(cardStyle.marginRight) || 0;
        setCardWidth(cardWidth + marginLeft + marginRight);
      }
    };

    updateCardWidth();
    window.addEventListener('resize', updateCardWidth);
    
    return () => {
      window.removeEventListener('resize', updateCardWidth);
    };
  }, []);

  const scrollLeft = () => {
    console.log('test');
    if (wrapperRef.current && cardWidth > 0) {
      wrapperRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
        console.log('test1');
    if (wrapperRef.current && cardWidth > 0) {
      wrapperRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };

  const testimonials = [
    <TestimonialCard key="1">
      <QuoteIconTop />
      <QuoteIconBottom />
      <DecorationCircle />
      <DecorationCircleBottom />
      <ContentWrapper>
        <Typography 
          variant="body1" 
          sx={{
            fontSize: theme.font.paragraph,
            lineHeight: 1.7,
            color: '#000',
            position: 'relative',
            zIndex: 1,
            marginTop:'30px'
          }}
        >
          For the first time we came across someone from
          online who were very professional from taking the 
          food order, specifying the tariff and dispatching
          the food delivery on time. Food was very tasty and
          maintained good standards. Pricing was reasonably
          good and best service. Thanks to Hogist team for
          Organizing dinner menu for our Anniversary party for
          50 members. I give 5 star ratings..
        </Typography>
      </ContentWrapper>
      <Signature>
        <Rating 
          value={5} 
          readOnly 
          sx={{ 
            mb: 1,
            '& .MuiRating-icon': {
              color: '#c60000',
              fontSize: { xs: '1.8rem', sm: '2rem' }
            }
          }}
        />
        <Typography 
          variant="body1" 
          sx={{
            color: '#c60000',
            fontWeight: 'bold',
            fontSize: theme.font.paragraph,
            letterSpacing: '0.5px'
          }}
        >
          Brinda Ghanesh
        </Typography>
      </Signature>
    </TestimonialCard>,

    <TestimonialCard key="2">
      <QuoteIconTop />
      <QuoteIconBottom />
      <DecorationCircle />
      <DecorationCircleBottom />
      <ContentWrapper>
        <Typography 
          variant="body1" 
          sx={{
            fontSize: theme.font.paragraph,
            lineHeight: 1.7,
            color: '#000',
            position: 'relative',
            zIndex: 1,
            marginTop:'30px'
          }}
        >
          Food was excellent.... i will reach out to them even for the upcoming events. The foods were clean, tasty and also was on time with quality. Kudos to the Hogist team.speacial mention
          Mrs. Renuka for the arrangements and Mr Alex and Satish for the timely delivery.
        </Typography>
      </ContentWrapper>
      <Signature>
        <Rating 
          value={5} 
          readOnly 
          sx={{ 
            mb: 1,
            '& .MuiRating-icon': {
              color: '#c60000',
              fontSize: { xs: '1.8rem', sm: '2rem' }
            }
          }}
        />
        <Typography 
          variant="body1" 
          sx={{
            color: '#c60000',
            fontWeight: 'bold',
            fontSize: theme.font.paragraph,
            letterSpacing: '0.5px'
          }}
        >
          yamunashankar krishnan
        </Typography>
      </Signature>
    </TestimonialCard>,

    <TestimonialCard key="3">
      <QuoteIconTop />
      <QuoteIconBottom />
      <DecorationCircle />
      <DecorationCircleBottom />
      <ContentWrapper>
        <Typography 
          variant="body1" 
          sx={{
            fontSize: theme.font.paragraph,
            lineHeight: 1.7,
            color: '#000',
            position: 'relative',
            zIndex: 1,
            marginTop:'30px'
          }}
        >
          The food is excellent and service is also super taste and today bread halwa is very very tasty. All variety rice, raasam, kara Kulzambu and vegetables are good taste and serve in hot conditions. Butter milk is good really. Over all I love the food taste, presentation, service and conditions all excellent to the core.
          Srinivasa Sampathkumar
        </Typography>
      </ContentWrapper>
      <Signature>
        <Rating 
          value={5} 
          readOnly 
          sx={{ 
            mb: 1,
            '& .MuiRating-icon': {
              color: '#c60000',
              fontSize: { xs: '1.8rem', sm: '2rem' }
            }
          }}
        />
        <Typography 
          variant="body1" 
          sx={{
            color: '#c60000',
            fontWeight: 'bold',
            fontSize: theme.font.paragraph,
            letterSpacing: '0.5px'
          }}
        >
          Srinivasa Sampathkumar
        </Typography>
      </Signature>
    </TestimonialCard>,

    <TestimonialCard key="4">
      <QuoteIconTop />
      <QuoteIconBottom />
      <DecorationCircle />
      <DecorationCircleBottom />
      <ContentWrapper>
        <Typography 
          variant="body1" 
          sx={{
            fontSize: theme.font.paragraph,
            lineHeight: 1.7,
            color: '#000',
            position: 'relative',
            zIndex: 1,
            marginTop:'30px'
          }}
        >
          Recently we had a small bday party at home for just 20 people and we're struggling to get the catering done for the same. Then we came across Hogist and then got in touch with them. They were blessing in disguise. They provided amazing food and the service was also great. The delivered the food on time and all our guests loved the food. The food was delicious and yummy. Thank you so much.
        </Typography>
      </ContentWrapper>
      <Signature>
        <Rating 
          value={5} 
          readOnly 
          sx={{ 
            mb: 1,
            '& .MuiRating-icon': {
              color: '#c60000',
              fontSize: { xs: '1.8rem', sm: '2rem' }
            }
          }}
        />
        <Typography 
          variant="body1" 
          sx={{
            color: '#c60000',
            fontWeight: 'bold',
            fontSize: theme.font.paragraph,
            letterSpacing: '0.5px'
          }}
        >  
          swati menon
        </Typography>
      </Signature>
    </TestimonialCard>,

    <TestimonialCard key="5">
      <QuoteIconTop />
      <QuoteIconBottom />
      <DecorationCircle />
      <DecorationCircleBottom />
      <ContentWrapper>
        <Typography 
          variant="body1" 
          sx={{
            fontSize: theme.font.paragraph,
            lineHeight: 1.7,
            color: '#000',
            position: 'relative',
            zIndex: 1,
            marginTop:'30px'
          }}
        >
          Hi I am JANOSE BERDEEN from chennai, Professional approach, decent pricing, excellent quality of food with commitment on the timings. Hassle-free Ordering experience. Hogist, the best small party catering services in chennai ever experienced.
        </Typography>
      </ContentWrapper>
      <Signature>
        <Rating 
          value={5} 
          readOnly 
          sx={{ 
            mb: 1,
            '& .MuiRating-icon': {
              color: '#c60000',
              fontSize: { xs: '1.8rem', sm: '2rem' }
            }
          }}
        />
        <Typography 
          variant="body1" 
          sx={{
            color: '#c60000',
            fontWeight: 'bold',
            fontSize: theme.font.paragraph,
            letterSpacing: '0.5px'
          }}
        >
          JANOSE BERDEEN I
        </Typography>
      </Signature>
    </TestimonialCard>,

    <TestimonialCard key="6">
      <QuoteIconTop />
      <QuoteIconBottom />
      <DecorationCircle />
      <DecorationCircleBottom />
      <ContentWrapper>
        <Typography 
          variant="body1" 
          sx={{
            fontSize: theme.font.paragraph,
            lineHeight: 1.7,
            color: '#000',
            position: 'relative',
            zIndex: 1,
            marginTop:'30px'
          }}
        >
          When it comes to corporate catering in chennai. I would recommend 100% Hogist. Their service and industrial catering app would helps us getting good quality and food and save our time.
        </Typography>
      </ContentWrapper>
      <Signature>
        <Rating 
          value={4} 
          readOnly 
          sx={{ 
            mb: 1,
            '& .MuiRating-icon': {
              color: '#c60000',
              fontSize: { xs: '1.8rem', sm: '2rem' }
            }
          }}
        />
        <Typography 
          variant="body1" 
          sx={{
            color: '#c60000',
            fontWeight: 'bold',
            fontSize: theme.font.paragraph,
            letterSpacing: '0.5px'
          }}
        >
          Mr. Sanzeeth
        </Typography>
      </Signature>
    </TestimonialCard>
  ];

  return (
    <TestimonialContainer>
      <Typography 
        variant="h3" 
        align="center" 
        fontWeight="bold" 
        sx={{
          fontSize: { xs: '28px', sm: '30px', md: theme.font.title },
          mb: 6,
          color: '#c60000',
          position: 'relative',
          display: 'inline-block',
        }}
      >
        Testimonials
      </Typography>

      <IconButton
        aria-label="scroll left"
        onClick={scrollLeft}
        sx={{
          position: 'absolute',
          top: '50%',
          left: { xs: 8, sm: 16 },
          transform: 'translateY(-50%)',
          zIndex: 10,
          backgroundColor: '#c60000',
          color: '#fff',
          '&:hover': { backgroundColor: '#a50000' },
          display: { xs: 'none', sm: 'flex' },
          borderRadius: '50%',
          width: 40,
          height: 40,
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>

      <IconButton
        aria-label="scroll right"
        onClick={scrollRight}
        sx={{
          position: 'absolute',
          top: '50%',
          right: { xs: 8, sm: 16 },
          transform: 'translateY(-50%)',
          zIndex: 10,
          backgroundColor: '#c60000',
          color: '#fff',
          '&:hover': { backgroundColor: '#a50000' },
          display: { xs: 'none', sm: 'flex' },
          borderRadius: '50%',
          width: 40,
          height: 40,
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>

      <ScrollContainer>
        <TestimonialWrapper ref={wrapperRef}>
          {testimonials}
        </TestimonialWrapper>
      </ScrollContainer>

      <Stack   
        direction="row" 
        spacing={{ xs: 1.5, sm: 2, md: 3 }}
        sx={{ 
          justifyContent: 'center',
          alignItems: 'center',
          mt: '40px',
          width: '100%'
        }}
      >
        <Button
          variant="contained"
          sx={{ 
            minWidth: { xs: '130px', sm: '140px', md: theme.font.paragraph },
            fontSize: { xs: '14px', sm: '16px', md: theme.font.paragraph },
            padding: { xs: '8px 10px', sm: '9px 18px', md: '10px 20px' },
            fontWeight: 'bold',
            borderRadius: '24px',
            backgroundColor: theme.palette.primary.secondary,
            '&:hover': {
              backgroundColor: theme.palette.primary.secondary,
            }
          }}
        >
          ORDER NOW
        </Button>
      </Stack>
    </TestimonialContainer>
  )
}