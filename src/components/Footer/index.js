import React from "react";
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  var scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='#' onClick={scrollToTop}>Pizza</SocialLogo>
            <SocialIcons>
              <SocialIconLink
                href='https://www.facebook.com'
                target='_blank'
                arial-label='Facebook'
                rel='noopener noreferrer'
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href='https://www.instagram.com'
                target='_blank'
                arial-label='Instagram'
                rel='noopener noreferrer'
              >
                <FaInstagram />
              </SocialIconLink>
           
              <SocialIconLink
                href='https://twitter.com'
                target='_blank'
                arial-label='Twitter'
                rel='noopener noreferrer'
              >
                <FaTwitter />
              </SocialIconLink>
              
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};
