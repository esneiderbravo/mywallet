import React, { useState } from "react";
import {
  AppName,
  AppNameLink,
  CardLink,
  HeaderStyled,
  IconStyled,
  Nav,
  NavCard,
  NavItem,
  NavList,
} from "../../styles/header/Header.styled";
import WalletIcon from "../../icons/wallet.png";
import { Link } from "@mui/material";

const Header = () => {
  const [isCardOpen, setIsCardOpen] = useState(null);
  const itemList = [
    {
      name: "How it works",
      links: ["Option 1", "Option 2"],
    },
    {
      name: "Resources",
      links: ["Option 3", "Option 4"],
    },
  ];
  const openCard = () => {};

  return (
    <HeaderStyled>
      <AppNameLink href={"/"}>
        <IconStyled src={WalletIcon}></IconStyled>
        <AppName>My Wallet</AppName>
      </AppNameLink>
      <Nav>
        <NavList>
          {itemList
            ? itemList.map((item, index) => {
                return (
                  <NavItem
                    onMouseEnter={() => setIsCardOpen(index)}
                    onMouseLeave={() => setIsCardOpen(null)}
                  >
                    <Link to={"#"}>{item.name}</Link>
                    <NavCard
                      style={{
                        display: isCardOpen === index ? "block" : "none",
                      }}
                    >
                      {item.links
                        ? item.links.map((link_value, link_index) => {
                            return <CardLink href={"#"}>{link_value}</CardLink>;
                          })
                        : null}
                    </NavCard>
                  </NavItem>
                );
              })
            : null}
        </NavList>
      </Nav>
    </HeaderStyled>
  );
};

export default Header;
