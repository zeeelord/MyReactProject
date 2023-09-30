import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const upAndDownAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-40px); /* Adjust the value as needed */
  }
`;

const AnimatedDiv = styled.div`
  animation: ${upAndDownAnimation} 4s ease-in-out infinite;
`;

const UpAndDownAnimation = ({ children }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const animationTimer = setTimeout(() => {
      setIsAnimating((prev) => !prev);
    }, 5000); // Change the delay (in milliseconds) to control the animation interval

    return () => clearTimeout(animationTimer);
  }, [isAnimating]);

  return (
    <div>
      <AnimatedDiv className={isAnimating ? 'animate' : ''}>
        {children}
      </AnimatedDiv>
    </div>
  );
};

export default UpAndDownAnimation;
