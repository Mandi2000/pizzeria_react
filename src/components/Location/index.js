import React from "react";
import styled from "styled-components";

const LocationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #150f0f;
  padding: 50px;
`;

const LocationTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 30px;
  color: #fff;
`;

const LocationAddress = styled.p`
  font-size: 24px;
  line-height: 1.5;
  text-align: center;
  color: #fff;
`;

const LocationMap = styled.iframe`
  width: 100%;
  height: 400px;
  margin-top: 30px;
`;

const Location = ({ title, address, mapSrc }) => {
  return (
    <LocationContainer id="location">
      <LocationTitle>{title}</LocationTitle>
      <LocationAddress>{address}</LocationAddress>
      <LocationMap src={mapSrc} title="Restaurant Location" allowFullScreen />
    </LocationContainer>
  );
};

export default Location;
