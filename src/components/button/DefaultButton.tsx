import { FC } from "react";
import { getEnergyType } from "../../helpers/utils";
import { ButtonWrapper } from "./DefaultButton.style";

interface DefaultButtonProps {
  energy: string;
  icon?: string;
  onClick: () => void;
}

const DefaultButton: FC<DefaultButtonProps> = ({ energy, icon, onClick }) => {
  return (
    <ButtonWrapper onClick={onClick}>
      {icon && <img src={icon} alt="icon-energy" />}
      {getEnergyType(energy)}
    </ButtonWrapper>
  );
};

export default DefaultButton;
