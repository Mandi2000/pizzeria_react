import React from "react";
import styled from "styled-components";

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  background-color: #150f0f;

  @media (max-width: 768px) {
    padding: 30px;
  }
`;

const MenuTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 30px;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem;

  --num-columns: 3;

  grid-template-columns: repeat(var(--num-columns), 1fr);

  @media (max-width: 1500px) {
    --num-columns: 2;
  }

  @media (max-width: 800px) {
    --num-columns: 1;
  }

`;

const MenuItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f8f8f8;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin-bottom: 30px;
  max-width: 800px;

  @media (max-width: 768px) {
    padding: 20px;
    margin-bottom: 20px;
  }
`;

const MenuItemTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

const MenuItemDescription = styled.p`
  font-size: 18px;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

const MenuItemPrice = styled.span`
  font-size: 24px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const ProductImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 1px 1px 15px #fdc500;
  border-radius: 15px;

  @media (max-width: 768px) {
    height: 200px;
    min-width: 200px;
    border-radius: 10px;
  }
`;

const RestaurantMenu = ({ title, menuItems }) => {
  return (
    <MenuContainer id="menu">
      <MenuTitle>Menu {title}</MenuTitle>
      <MenuList>
        {menuItems.map((item, index) => (
          <MenuItem key={index}>
            <MenuItemTitle>{item.name}</MenuItemTitle>
            <ProductImg src={item.img} alt={item.alt} />
            <MenuItemDescription>{item.description}</MenuItemDescription>
            <MenuItemPrice>{item.price}</MenuItemPrice>
          </MenuItem>
        ))}
      </MenuList>
    </MenuContainer>
  );
};

export default RestaurantMenu;
