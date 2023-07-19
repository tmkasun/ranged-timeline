import React from "react";
import styled from "styled-components";
import StyledLanes from "../types/styledLanes.s";
import { useTimeLine } from "./contexts/TimeLineContext";
import TimelineYear from "./TimeLineYear";

type TimeLineProps = {};

type StyledTimeLineProps = { years: number[] };
const StyledTimeLine = styled.div<StyledTimeLineProps>`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: ${({ years }) =>
    `repeat(${years.length * 12}, 1fr)`};
  gap: 0.5rem 0rem;
  grid-template-areas: ${({ years }) =>
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
