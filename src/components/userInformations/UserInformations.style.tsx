import styled from "styled-components";
import {
  darkGrey,
  defaultRadius,
  defaultShadow,
  lightGreen,
  lightYellow,
  mediumWidth,
} from "../../helpers/constants";
import { convertPxToRem } from "../../helpers/utils";

export const CardWrapper = styled.div`
  box-shadow: ${defaultShadow};
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 85%;
  border-radius: ${defaultRadius};
  margin: ${convertPxToRem(25)} auto;
  display: flex;
  flex-direction: column;
`;

export const CardHeader = styled.div`
  background: ${lightGreen};
  color: #fff;
  font-weight: bold;
  width: 100%;
  border-radius: ${defaultRadius} ${defaultRadius} 0 0;
  display: flex;
  align-items: center;
  padding: ${convertPxToRem(8)} 0 ${convertPxToRem(8)} ${convertPxToRem(20)};
  font-size: ${convertPxToRem(16)};
`;

export const IconWrapper = styled.div`
  > img {
    width: ${convertPxToRem(50)};
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${lightYellow};
  width: 100%;
  padding: ${convertPxToRem(8)} 0 ${convertPxToRem(8)} ${convertPxToRem(20)};
  border-radius: 0 0 ${defaultRadius} ${defaultRadius};
  > span {
    color: ${darkGrey};
    text-transform: uppercase;
    font-size: ${convertPxToRem(12)};
  }
`;

export const ItemWrapper = styled.div`
  cursor: pointer;
`;

export const ContractsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${convertPxToRem(12)};

  > div:not(:last-child) {
    margin: 0 0 ${convertPxToRem(12)} 0;
  }

  @media (min-width: ${mediumWidth}) {
    flex-direction: row;

    > div:not(:last-child) {
      margin: 0 ${convertPxToRem(12)} 0 0;
    }
  }
`;
