// write your custom hook here to control your checkout form
import { useState } from "react";

export const useForm = (key, initialState) => {
  const [state, setState] = useState(key, initialState);

  const handleChanges = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };
  return [state, handleChanges];
};
