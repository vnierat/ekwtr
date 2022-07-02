import { FC, useState } from "react";
import { useGetContractDetailById } from "../../../api/conso";
import { getListOfYears } from "../../../helpers/utils";
import ConsoDetails from "./ConsoDetails";
import { ConsoCard, YearsWrapper, Year } from "./UserConso.style";

interface UserConsoProps {
  data: Array<string>;
}

const UserConso: FC<UserConsoProps> = ({ data }) => {
  const [year, setYear] = useState<number | null>(null);
  const contractDetails = useGetContractDetailById(data[0]);
  const energyType = data[1];

  const getYears = getListOfYears(contractDetails);

  return (
    <ConsoCard>
      <YearsWrapper>
        {getYears.map((el: number, index) => (
          <Year onClick={() => setYear(el)} key={index}>
            {el}
          </Year>
        ))}
      </YearsWrapper>
      <ConsoDetails {...{ year, contractDetails, energyType }} />
    </ConsoCard>
  );
};

export default UserConso;
