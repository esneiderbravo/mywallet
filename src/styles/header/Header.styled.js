import { styled } from "@mui/material";

export const HeaderStyled = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa;
  color: #3f3f3f;
  height: 70px;
  padding: 0 32px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
  font-family: "Comic Sans MS", sans-serif;
`;

export const AppNameLink = styled("a")`
  display: flex;
  text-decoration: none;
  color: inherit;
`;
export const IconStyled = styled("img")`
  height: 50px;
  width: 50px;
  margin-right: 10px;
  margin-top: 10px;
`;

export const AppName = styled("h1")`
  margin-right: 100px;
`;

export const Nav = styled("nav")`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    height: auto;
  }
`;
export const NavList = styled("ul")`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 1200px) {
    align-items: center;
  }
`;
export const NavItem = styled("li")`
  margin: 0 8px;
  padding: 8px;
  cursor: pointer;
  position: relative;

  & > a {
    color: #333;
    text-decoration: none;
  }

  &:hover {
    & > div {
      display: block;
    }
  }

  @media screen and (max-width: 768px) {
    margin: 8px 0;
  }
`;
export const NavCard = styled("div")`
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 150px;
  min-height: 50px;
  padding: 16px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: none;
  border-radius: 15%;
`;

export const CardLink = styled("a")`
  margin-right: 10px;
  display: inline-flex;
  text-decoration: none;
`;
