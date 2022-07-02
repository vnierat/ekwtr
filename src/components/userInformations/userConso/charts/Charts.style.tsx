import styled from "styled-components";
import {
  darkGrey,
  defaultRadius,
  lightGreen,
  lightYellow,
} from "../../../../helpers/constants";
import { convertPxToRem } from "../../../../helpers/utils";

export const Table = styled.table`
  width: 100%;
  font-size: ${convertPxToRem(14)};
  margin-bottom: ${convertPxToRem(75)};
`;

export const TableButton = styled.button`
  background: ${lightGreen};
  border: none;
  font-size: ${convertPxToRem(8)};
  border-radius: ${defaultRadius};
  width: ${convertPxToRem(20)};
  height: ${convertPxToRem(20)};
`;

export const TdDate = styled.td`
  text-align: center;
  width: ${convertPxToRem(140)};
`;

export const Td = styled.td`
  text-align: center;
  padding: ${convertPxToRem(8)} 0;
`;

export const TableHead = styled.thead`
  background: ${lightYellow};
  color: ${darkGrey};

  tr {
    border-radius: ${defaultRadius} ${defaultRadius} 0 0;
  }

  td {
    text-align: center;
    padding: ${convertPxToRem(12)};
  }
`;

export const Tr = styled.tr`
  :nth-child(2n) {
    background: ${lightGreen};
  }
`;
