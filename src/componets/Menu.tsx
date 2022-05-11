import styled from "styled-components";
import { SidebarData } from "../Data";
import {
  UilSignOutAlt, // @ts-ignore
} from "@iconscout/react-unicons";
import "./Menu.css";
import { useState } from "react";

const Container = styled.div`
  width: 17%;

  display: flex;
  flex-direction: column;

  font-family: "Roboto";
`;

const Logo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;

  height: 22%;
  padding: 0 25px;

  svg {
    height: 75px;
  }

  p {
    margin-left: 22px;
    font-size: 26px;
    font-weight: 600;
  }

  span {
    color: ${(props) => props.theme.colors.pointColor};
  }
`;

const MenuList = styled.div`
  height: 56%;

  svg {
    height: 33px;
  }
`;
const MenuItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;

  margin-top: 35px;
  padding: 5px 20px;

  &:first-child {
    margin-top: 15px;
  }

  div:first-child {
    width: 35px;
    height: 35px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const MenuText = styled.span`
  margin-left: 25px;

  text-align: start;
`;

const Exit = styled.div`
  height: 22%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;
  svg {
    width: 35px;
    height: 35px;
  }
`;
// 720
// 5 == 같은 값 2개는 같은 값 240
function Menu() {
  const [selected, setSelected] = useState(0);

  return (
    <Container>
      <Logo>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M112 112C112 50.14 162.1 0 224 0C285.9 0 336 50.14 336 112V160H400C426.5 160 448 181.5 448 208V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V208C0 181.5 21.49 160 48 160H112V112zM160 160H288V112C288 76.65 259.3 48 224 48C188.7 48 160 76.65 160 112V160zM136 256C149.3 256 160 245.3 160 232C160 218.7 149.3 208 136 208C122.7 208 112 218.7 112 232C112 245.3 122.7 256 136 256zM312 208C298.7 208 288 218.7 288 232C288 245.3 298.7 256 312 256C325.3 256 336 245.3 336 232C336 218.7 325.3 208 312 208z" />
        </svg>
        <p>
          Sh<span>o</span>ps
        </p>
      </Logo>
      <MenuList>
        <ul>
          {SidebarData.map((data, index) => {
            return (
              <MenuItem
                key={index}
                className={selected === index ? "active" : ""}
                onClick={() => setSelected(index)}
              >
                <data.icon />
                <div>
                  <MenuText>{data.heading}</MenuText>
                </div>
              </MenuItem>
            );
          })}
        </ul>
      </MenuList>
      <Exit>
        <UilSignOutAlt />
      </Exit>
    </Container>
  );
}

export default Menu;
