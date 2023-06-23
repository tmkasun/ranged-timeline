import React, { useState } from "react";
import styled from "styled-components";
import { useTimeLine } from "./contexts/TimeLineContext";
import TimeLineItemsContextProvider, {
  TimeLineItemsType
} from "./contexts/TimeLineItemsContext";

type EducationItemsProps = {
  children: React.ReactNode;
};
type StyledEducationItemsProps = {
  years: string[];
  timelineItems: TimeLineItemsType;
};
const StyledEducationItems = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: ${({ years }: StyledEducationItemsProps) =>
    `repeat(${years.length * 12}, 1fr)`};
  gap: 0.2rem 0rem;
  grid-area: education;
`;

const EducationItems = (props: EducationItemsProps) => {
  const { children } = props;
  const [timelineItems, setTimeLineItems] = useState<TimeLineItemsType>({});
  const { years } = useTimeLine();

  return (
    <TimeLineItemsContextProvider value={{ timelineItems, setTimeLineItems }}>
      <StyledEducationItems timelineItems={timelineItems} years={years}>
        {children}
      </StyledEducationItems>
    </TimeLineItemsContextProvider>
  );
};

export default EducationItems;
