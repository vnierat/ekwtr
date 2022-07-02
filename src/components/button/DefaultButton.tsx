import { FC } from "react";
import { getEnergyType } from "../../helpers/utils";
import { ButtonWrapper } from "./DefaultButton.style";

interface DefaultButtonProps {
  energy: string;
  icon?: string;
}

const DefaultButton: FC<DefaultButtonProps> = ({ energy, icon }) => {
  return (
    <ButtonWrapper>
      {icon && <img src={icon} alt="icon-energy" />}
      {getEnergyType(energy)}
    </ButtonWrapper>
  );
};

export default DefaultButton;
