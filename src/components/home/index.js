import React from "react";
import styled from "styled-components";
import Carousel from "./carousel";


const CardsData = [
    {
      description: "One Stop Household Services in Singapore",
      image: "/assets/imgs/clean_tool.jpeg",
      metaLocation: "center"
    },
    {
      description: "Professional Household Services Providers",
      image: "/assets/imgs/office_clean.jpeg",
      metaLocation: "left"
    },
    {
      description: "Quick and Easy Booking on OneStop",
      image: "/assets/imgs/bath_clean.webp",
      metaLocation: "right"
    }
  ];
  
  const AppContainer = styled.div`
    max-width: 100%;
    margin: 0 auto;
    @media (max-width: 768px) {
      max-width: 100%;
    }
  `;
  
  export default () => {
    return (
      <AppContainer>
        <Carousel cards={CardsData} />
      </AppContainer>
    );
  }