import React, { useState } from "react";
import { Sidebar } from "../Sidebar";
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP } from "./HeroElements";

export const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <HeroContainer>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1>GREATEST PIZZA EVER</HeroH1>
          <HeroP>Ready In 60 Seconds</HeroP>
          
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};
