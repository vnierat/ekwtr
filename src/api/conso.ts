import { useEffect, useState } from "react";

export const useGetList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("https://61b0dd073c954f001722a6c4.mockapi.io/test-react/meters")
      .then((response) => response.json())
      .then(setList);
  }, []);

  return list;
};

export const useGetDetailById = (id: number) => {
  const [details, setDetails] = useState({});

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/vnierat/mock-json/details/${id}`)
      .then((response) => response.json())
      .then(setDetails);
  }, [id]);

  return details;
};
