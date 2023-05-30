import axios from "axios";
import { useState } from "react";

const useAxios = (baseUrl, resOfUrl) => {
  const [state, setState] = useState([]);

  const fetchData = async (data) => {
    const response = await axios.get(`${baseUrl}${resOfUrl}`);
    setState((data) => [...data, response.data]);
  };

  return [state, fetchData];
};

export default useAxios;
