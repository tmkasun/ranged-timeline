import React, { createContext, useContext, useState } from "react";

export type TimeLineItemsType = { [key: string]: string[] };

export type TimeLineItemsContextType = {
  timelineItems: TimeLineItemsType;
  setTimeLineItems: React.Dispatch<React.SetStateAction<TimeLineItemsType>>;
};
const TimeLineItemsContext = createContext<TimeLineItemsContextType>({
  timelineItems: { "2023": ["wso2"] },
  setTimeLineItems: () => {}
});

const { Provider: TimeLineItemsContextProvider } = TimeLineItemsContext;

export const useTimeLineItems = () => {
  const tlItems = useContext(TimeLineItemsContext);
  return tlItems;
};

// TimeLineContextProvider.displayName = "Test";
export default TimeLineItemsContextProvider;
