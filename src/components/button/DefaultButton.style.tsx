import styled from "styled-components";
import { defaultGreen, RadiusMax } from "../../helpers/constants";
import { convertPxToRem } from "../../helpers/utils";

export const ButtonWrapper = styled.button`
  width: ${convertPxToRem(150)};
  gap: 20px;
  background: ${defaultGreen};
  border: none;
  color: #fff;
  border-radius ${RadiusMax};
  font-weight: bold;
  padding: ${convertPxToRem(8)} ${convertPxToRem(18)};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor:pointer;

  > img {
    width: ${convertPxToRem(24)}
  }
`;
