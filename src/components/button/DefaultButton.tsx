import { FC } from "react";
import { getEnergyType } from "../../helpers/utils";
import { ButtonWrapper } from "./DefaultButton.style";
import GazIcon from "../../assets/imgs/gaz.png";
import ElecIcon from "../../assets/imgs/electricity.png";

interface DefaultButtonProps {
  energy: string;
}

const DefaultButton: FC<DefaultButtonProps> = ({ energy }) => {
  return (
    <ButtonWrapper>
      <img src={energy === "gas" ? GazIcon : ElecIcon} alt="icon-energy" />
      {getEnergyType(energy)}
    </ButtonWrapper>
  );
};

export default DefaultButton;
