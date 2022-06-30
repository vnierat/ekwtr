import { Energy } from "../enums/energies";

export const getEnergyType = (energy: string) => {
  switch (energy) {
    case Energy.ELECTRICITY:
      return "Électricité";
    case Energy.GAZ:
      return "Gaz";
  }
};

export const convertPxToRem = (px: number): string => `${px / 16}rem`;
