import styled from "styled-components";
import {
  defaultRadius,
  defaultShadow,
  defaultYellow,
  lightGreen,
  mediumWidth,
} from "../../../helpers/constants";
import { convertPxToRem } from "../../../helpers/utils";

export const ConsoCard = styled.div`
  box-shadow: ${defaultShadow};
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 95%;
  border-radius: ${defaultRadius};
  margin: ${convertPxToRem(25)} auto;

  @media (min-width: ${mediumWidth}) {
    width: 85%;
  }
`;

export const YearsWrapper = styled.div`
  background: ${lightGreen};
  color: #fff;
  font-weight: bold;
  width: 100%;
  border-radius: ${defaultRadius} ${defaultRadius} 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${convertPxToRem(8)} 0 ${convertPxToRem(8)} ${convertPxToRem(20)};
  font-size: ${convertPxToRem(16)};

  div:not(:last-child) {
    margin-right: ${convertPxToRem(24)};
  }
`;

export const ConsoBody = styled.div`
  background: #fff;
  width: 100%;
  border-radius: 0 0 ${defaultRadius} ${defaultRadius};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${convertPxToRem(8)} 0 ${convertPxToRem(8)} ${convertPxToRem(20)};
  font-size: ${convertPxToRem(16)};

  div:not(:last-child) {
    margin-right: ${convertPxToRem(24)};
  }
`;

export const Year = styled.div`
  cursor: pointer;
  background: ${defaultYellow};
  color: #fff;
  padding: ${convertPxToRem(2)} ${convertPxToRem(12)};
  border-radius: ${defaultRadius};
  font-weight: bold;
`;

export const ConsoTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${convertPxToRem(8)} 0 ${convertPxToRem(8)} ${convertPxToRem(20)};
  width: 100%;
  font-size: ${convertPxToRem(20)};
  font-weight: bold;
  margin-bottom: ${convertPxToRem(20)};

  > img {
    width: ${convertPxToRem(44)};
  }
`;

export const ConsoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 95%;

  @media (min-width: ${mediumWidth}) {
    width: 80%;
  }
`;

export const ChartsWrapper = styled.div`
width:100%;
  display: flex;
  flex-direction: column;
  }
`;
