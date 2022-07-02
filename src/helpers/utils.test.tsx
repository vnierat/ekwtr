import { Energy } from "../enums/energies";
import { MOCK_CONTRACT } from "../mock/MockContract";
import {
  convertPxToRem,
  getEnergyType,
  getListOfYears,
  getTitleContent,
} from "./utils";

describe("getEnergyType", () => {
  it("should return Électricité", () => {
    expect(getEnergyType(Energy.ELECTRICITY)).toEqual("Électricité");
  });
  it("should return Gaz", () => {
    expect(getEnergyType(Energy.GAZ)).toEqual("Gaz");
  });
});

describe("convertPxToRem", () => {
  it("should return 16px to 1rem", () => {
    expect(convertPxToRem(16)).toEqual("1rem");
  });

  it("should return 32px to 2rem", () => {
    expect(convertPxToRem(32)).toEqual("2rem");
  });

  it("should return 0px to 0rem", () => {
    expect(convertPxToRem(0)).toEqual("0rem");
  });
});

describe("getTitleContent", () => {
  it("should return object for Electricity type", () => {
    expect(getTitleContent(Energy.ELECTRICITY)).toEqual({
      icon: "elec.svg",
      text: "Votre consommation Électrique",
    });
  });
  it("should return object for Electricity type", () => {
    expect(getTitleContent(Energy.GAZ)).toEqual({
      icon: "gaz.svg",
      text: "Votre consommation de Gaz",
    });
  });
});

describe("getListOfYearst", () => {
  it("should return 2011, 2013, 2016", () => {
    expect(getListOfYears(MOCK_CONTRACT.first)).toEqual([2011, 2013, 2016]);
  });
  it("should return 2021", () => {
    expect(getListOfYears(MOCK_CONTRACT.second)).toEqual([2021]);
  });
  it("should return 2001, 2010, 2015", () => {
    expect(getListOfYears(MOCK_CONTRACT.second)).toEqual([2021]);
  });
});
