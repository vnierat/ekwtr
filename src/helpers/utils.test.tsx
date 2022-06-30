import { getEnergyType } from "./utils";

describe("getEnergyType", () => {
  it("should return Électricité", () => {
    expect(getEnergyType("electricity")).toEqual("Électricité");
  });
  it("should return Gaz", () => {
    expect(getEnergyType("gaz")).toEqual("Gaz");
  });
});
