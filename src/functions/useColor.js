import { useLocation } from "react-router-dom";

import { COLOR } from "../constants/Colors";

export const useColor = () => {
  return COLOR[useLocation().pathname.replace("/", "") || "home"];
};
