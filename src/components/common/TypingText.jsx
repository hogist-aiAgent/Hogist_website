import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';

function TypingText({ text, variant = "body1", speed = 50, ...props }) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index++;
      if (index === text.length) clearInterval(timer);
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <Typography variant={variant} {...props}>
      {displayedText}
    </Typography>
  );
}
export default React.memo(TypingText)