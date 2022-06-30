import styled from "styled-components";
import { convertPxToRem } from "../../helpers/utils";

export const AppHeader = styled.header`
  display: flex;
  align-items: center;
  height: ${convertPxToRem(55)};
  padding: ${convertPxToRem(12)} 0 ${convertPxToRem(12)} ${convertPxToRem(20)};
  background: #fff;
  color: white;
  box-shadow: rgb(0 0 0 / 25%) 0px 1px 3px 0px inset,
    rgb(0 0 0 / 20%) 0px 1px 3px 0px inset, rgb(0 169 151 / 6%) 0px 9px 20px 0px;
  font-family: Century Gothic, CenturyGothic, AppleGothic, sans-serif;

  > img {
    height: ${convertPxToRem(45)};
  }
`;
