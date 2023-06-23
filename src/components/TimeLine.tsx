import React from "react";
import styled from "styled-components";
import StyledLanes from "../types/styledLanes.s";
import { useTimeLine } from "./contexts/TimeLineContext";
import TimelineYear from "./TimeLineYear";

type TimeLineProps = {};

type StyledTimeLineProps = { years: string[] } & StyledLanes;
const StyledTimeLine = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: ${({ years }: StyledTimeLineProps) =>
    `repeat(${years.length * 12}, 1fr)`};
  gap: 0.5rem 0rem;
  grid-template-areas: ${({ years }: StyledTimeLineProps) =>
    years.map((y) => `"t${y}"`.repeat(12)).join(" ")};
  grid-area: timeline;
`;

const TimeLine = (props: TimeLineProps) => {
  const { years } = useTimeLine();

  const items = years.map((year) => (
    <TimelineYear key={year} name={`t${year}`}>
      {year}
    </TimelineYear>
  ));

  return <StyledTimeLine years={years}>{items}</StyledTimeLine>;
};

export default TimeLine;
