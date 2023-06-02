import axios from "axios";
import { useState } from "react";

const useAxios = () => {
  const [state, setState] = useState([]);

  const fetchData = async (baseUrl, resOfUrl="") => {
    const response = await axios.get(`${baseUrl}${resOfUrl}`);
    setState((data) => [...data, response.data]);
  };

  return [state, fetchData];
};

export default useAxios;
