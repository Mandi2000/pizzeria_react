import React from "react";
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP } from "./HeroElements";

export const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroItems>
          <HeroH1>GREATEST PIZZA EVER</HeroH1>
          <HeroP>Ready In 60 Seconds</HeroP>
          
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};
