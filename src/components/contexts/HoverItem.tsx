import React, { Children, createContext, useContext, useState } from "react";

export type HoveredItemType = { start: number; end: number };

export type HoveredItemContextType = {
  hovered: HoveredItemType | null;
  setHovered: React.Dispatch<React.SetStateAction<HoveredItemType | null>>;
};
const HoveredItemContext = createContext<HoveredItemContextType>({
  hovered: { start: 0, end: 0 },
  setHovered: () => {}
});

const { Provider } = HoveredItemContext;

export const useHoveredItem = () => {
  const tlItems = useContext(HoveredItemContext);
  return tlItems;
};
const HoveredItemContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const { children } = props;
  const [hovered, setHovered] = useState<HoveredItemType | null>(null);
  return <Provider value={{ hovered, setHovered }}>{children}</Provider>;
};
// TimeLineContextProvider.displayName = "Test";
export default HoveredItemContextProvider;
