import React, { useEffect } from "react";
import styled from "styled-components";
import { useTimeLineItems } from "./contexts/TimeLineItemsContext";

type TimelineYearProps = {
  name: string;
  children: React.ReactNode;
  from?: number;
  to?: number;
};
const StyledTimelineYear = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-auto-rows: 2fr;
  grid-area: ${({ name }: TimelineYearProps) => name};
`;

const BorderDiv = styled.div`
  flex-grow: 1;
  border: 1px solid gray;
`;
const TimelineYear = (props: TimelineYearProps) => {
  const { children, name, from, to } = props;
  const { setTimeLineItems } = useTimeLineItems();
  useEffect(() => {
    setTimeLineItems((current) => {
      const shallowCurrentCopy = structuredClone(current);
      for (let year = from; year < to; year++) {
        if (shallowCurrentCopy[year]) {
          shallowCurrentCopy[year] = [...shallowCurrentCopy[year], name];
        }
        shallowCurrentCopy[year] = [name];
      }
      return shallowCurrentCopy;
    });
  }, [name, from, to]);
  return (
    <StyledTimelineYear name={name}>
      <BorderDiv></BorderDiv>
      {children}
      <BorderDiv></BorderDiv>
    </StyledTimelineYear>
  );
};

export default TimelineYear;
