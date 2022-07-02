import { Energy } from "../enums/energies";
import GazIcon from "../assets/svgs/gaz.svg";
import ElecIcon from "../assets/svgs/elec.svg";
import { Contract } from "../interfaces/interfaces";

export const getEnergyType = (energy: string) => {
  switch (energy) {
    case Energy.ELECTRICITY:
      return "Électricité";
    case Energy.GAZ:
      return "Gaz";
  }
};

export const convertPxToRem = (px: number): string => `${px / 16}rem`;

export const getTitleContent = (energy: string) => {
  switch (energy) {
    case Energy.ELECTRICITY:
      return {
        icon: ElecIcon,
        text: "Votre consommation Électrique",
      };
    case Energy.GAZ:
      return {
        icon: GazIcon,
        text: "Votre consommation de Gaz",
      };
  }
};

export const getListOfYears = (contractDetails: Contract[]) =>
  Array.from(
    new Set(
      contractDetails
        .map(({ date }) => new Date(date).getFullYear())
        .sort((a, b) => a - b)
    )
  );
