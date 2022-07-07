import {
  CardBody,
  CardHeader,
  CardWrapper,
  ContractsWrapper,
  IconWrapper,
} from "./UserInformations.style";
import Conso from "../../assets/svgs/conso.svg";
import { useGetList } from "../../api/conso";
import DefaultButton from "../button/DefaultButton";
import { Fragment, useState } from "react";
import UserConso from "./userConso/UserConso";
import { getIconType } from "../../helpers/utils";

const UserDashboard = () => {
  const [data, setData] = useState<Array<string>>([]);
  const contracts = useGetList();

  const isSetData = Boolean(data.length);

  const handleClick = (pointOfDelivery: string, energy: string) => {
    setData([pointOfDelivery, energy]);
  };

  return (
    <Fragment>
      <CardWrapper data-testid="card-wrapper">
        <CardHeader>
          <IconWrapper>
            <img data-testid="coucou" src={Conso} alt="ma-conso" />
          </IconWrapper>
          Ma conso - Mes contrats
        </CardHeader>
        <CardBody>
          <span>Mes abonnements ekWateur :</span>
          <ContractsWrapper>
            {contracts.map(({ energy, pointOfDelivery }, index: number) => (
              <DefaultButton
                key={index}
                energy={energy}
                icon={getIconType(energy)}
                onClick={() => handleClick(pointOfDelivery, energy)}
              />
            ))}
          </ContractsWrapper>
        </CardBody>
      </CardWrapper>
      {isSetData && <UserConso {...{ data }} />}
    </Fragment>
  );
};

export default UserDashboard;
