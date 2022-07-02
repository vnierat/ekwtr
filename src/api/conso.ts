import { useEffect, useState } from "react";
import { Contract } from "../interfaces/interfaces";

export const useGetList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("https://61b0dd073c954f001722a6c4.mockapi.io/test-react/meters")
      .then((response) => response.json())
      .then(setList);
  }, []);

  return list;
};

export const useGetContractDetailById = (pod: string) => {
  const [details, setDetails] = useState<Contract[]>([]);

  useEffect(() => {
    fetch(`https://61b0dd073c954f001722a6c4.mockapi.io/test-react/${pod}`)
      .then((response) => response.json())
      .then(setDetails);
  }, [pod]);

  return details;
};
