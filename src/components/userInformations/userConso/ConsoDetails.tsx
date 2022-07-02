import { FC } from "react";
import { Energy } from "../../../enums/energies";
import { Contract } from "../../../interfaces/interfaces";
import ElecTable from "./charts/ElecTable";
import GazTable from "./charts/GazTable";
import {
  ChartsWrapper,
  ConsoBody,
  ConsoContainer,
  ConsoTitle,
} from "./UserConso.style";
import GazBarCharts from "./charts/GazBarCharts";
import ElecBarCharts from "./charts/ElecBarCharts";
import { getTitleContent } from "../../../helpers/utils";

interface ConsoDetailsProps {
  year: number | null;
  energyType: string;
  contractDetails: Contract[];
}

const ConsoDetails: FC<ConsoDetailsProps> = ({
  year,
  contractDetails,
  energyType,
}) => {
  const elecDataPerYear = contractDetails
    .filter(({ date }) => new Date(date).getFullYear() === year)
    .map(({ valueHP, valueHC, date, id }) => ({ valueHP, valueHC, date, id }));

  const titleContent = getTitleContent(energyType);
  const { icon, text }: any = titleContent;

  const gazDataPerYear = contractDetails
    .filter(({ date }) => new Date(date).getFullYear() === year)
    .map(({ value, date, id }) => ({ value, date, id }));

  return (
    <ConsoBody>
      <ConsoTitle>
        <img src={icon} alt="conso-icon" />
        <span>{text}</span>
      </ConsoTitle>
      <ConsoContainer>
        {year ? (
          energyType === Energy.GAZ ? (
            <ChartsWrapper>
              <GazTable {...{ gazDataPerYear }} />
              <GazBarCharts {...{ gazDataPerYear }} />
            </ChartsWrapper>
          ) : (
            <ChartsWrapper>
              <ElecTable {...{ elecDataPerYear }} />
              <ElecBarCharts {...{ elecDataPerYear }} />
            </ChartsWrapper>
          )
        ) : (
          <div>Veuillez sélectionner une année de souscription.</div>
        )}
      </ConsoContainer>
    </ConsoBody>
  );
};

export default ConsoDetails;
