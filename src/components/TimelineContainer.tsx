import React from "react";
import styled from "styled-components";
import { HoveredItemType, useHoveredItem } from "./contexts/HoverItem";
import TimeLineContextProvider from "./contexts/TimeLineContext";

type TimelineContainerProps = {
  children: React.ReactNode;
  from: number;
  to: number;
};

export const StyledTimelineContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr 3fr;
  grid-template-rows: 1fr;
  gap: 0px 10px;
  justify-items: center;
  grid-template-areas: "education . timeline markerItems work";
`;

const Marker = styled.div<{ hovered: HoveredItemType | null }>`
  border-top: 1px dashed gray;
  border-bottom: 1px dashed gray;
  width: 100%;
  display: ${({ hovered }) => {
    return hovered?.start ? "initial" : "none";
  }};
  grid-row-start: ${({ hovered }) => {
    return hovered?.start;
  }};
  grid-row-end: ${({ hovered }) => hovered?.end};
  grid-column-start: 1;
  grid-column-end: 1;
`;

const StyledMarkerLineItems = styled.div<{ years: number[] }>`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: ${({ years }) =>
    `repeat(${years.length * 12}, 1fr)`};
  gap: 0.2rem 0rem;
  grid-area: markerItems;
`;

const TimelineContainer = (props: TimelineContainerProps) => {
  const { children, from, to } = props;
  const years = Array.from(
    { length: to - from },
    (_, index) => from + index + 1
  ).reverse();
  const { hovered } = useHoveredItem();
  return (
    <TimeLineContextProvider value={{ years, from, to }}>
      <StyledTimelineContainer>
        {children}
        <StyledMarkerLineItems years={years}>
          <Marker hovered={hovered}></Marker>
        </StyledMarkerLineItems>
      </StyledTimelineContainer>
    </TimeLineContextProvider>
  );
};

export default TimelineContainer;
