import React, { useState } from "react";
import styled from "styled-components";
import { useTimeLine } from "./contexts/TimeLineContext";
import TimeLineItemsContextProvider, {
  TimeLineItemsType
} from "./contexts/TimeLineItemsContext";

type WorkItemsProps = {
  children: React.ReactNode;
};
type StyledWorkItemsProps = {
  years: number[];
  timelineItems: TimeLineItemsType;
};
const StyledWorkItems = styled.div<StyledWorkItemsProps>`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: ${({ years }) =>
    `repeat(${years.length * 12}, 1fr)`};
  gap: 0.2rem 0rem;
  grid-area: work;
`;

const WorkItems = (props: WorkItemsProps) => {
  const { children } = props;
  const [timelineItems, setTimeLineItems] = useState<TimeLineItemsType>({});
  const { years } = useTimeLine();
  return (
    <TimeLineItemsContextProvider value={{ timelineItems, setTimeLineItems }}>
      <StyledWorkItems timelineItems={timelineItems} years={years}>
        {children}
      </StyledWorkItems>
    </TimeLineItemsContextProvider>
  );
};

export default WorkItems;
