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

const UserCard = () => {
  const contracts = useGetList();
  return (
    <CardWrapper>
      <CardHeader>
        <IconWrapper>
          <img src={Conso} alt="ma-conso" />
        </IconWrapper>
        Ma conso - Mes contrats
      </CardHeader>
      <CardBody>
        <span>Mes abonnements ekWateur :</span>
        <ContractsWrapper>
          {contracts.map(({ energy, pointOfDelivery }, index: number) => (
            <div key={index} onClick={() => console.log(pointOfDelivery)}>
              <DefaultButton {...{ energy }} />
            </div>
          ))}
        </ContractsWrapper>
      </CardBody>
    </CardWrapper>
  );
};

export default UserCard;
