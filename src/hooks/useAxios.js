import axios from "axios";
import { useState } from "react";

const useAxios = (url) => {
  const [state, setState] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(url);
    setState((data) => [...data, response.data]);
  };

  return [state, fetchData];
};

export default useAxios;
