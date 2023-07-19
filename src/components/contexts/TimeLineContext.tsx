import { createContext, useContext } from "react";

type ContextType = {
  years: number[];
  from: number;
  to: number;
};
const TimeLineContext = createContext<ContextType>({
  from: 2011,
  to: 2024,
  years: []
});

const { Provider: TimeLineContextProvider } = TimeLineContext;

export const useTimeLine = () => {
  const tlContext = useContext(TimeLineContext);
  return tlContext;
};
// TimeLineContextProvider.displayName = "Test";
export default TimeLineContextProvider;
