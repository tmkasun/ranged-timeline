import "./styles.css";
import TimelineContainer from "./components/TimelineContainer";
import TimelineItem from "./components/TimelineItem";
import EducationItems from "./components/EducationItems";
import TimeLine from "./components/TimeLine";

import WorkItems from "./components/WorkItems";
import HoveredItemContextProvider from "./components/contexts/HoverItem";
import dayjs from "dayjs";

const Starting = 2000;
const Ending = new Date().getFullYear();

export default function App() {
  return (
    <HoveredItemContextProvider>
      <TimelineContainer from={Starting} to={Ending}>
        <EducationItems>
          <TimelineItem name="UOM-FIT" from={"10-01-2011"} to={"01-01-2016"}>
            UOM Fit
          </TimelineItem>
          <TimelineItem
            from={"04-01-2014"}
            to={"08-01-2014"}
            name="GSOC-Student"
          >
            GSOC Student
          </TimelineItem>
          <TimelineItem
            name="Royal-College"
            from={"01-01-2002"}
            to={"01-01-2010"}
          >
            Royal College
          </TimelineItem>
        </EducationItems>
        <TimeLine />
        <WorkItems>
          <TimelineItem from={"11-29-2023"} to={dayjs().format('MM-DD-YYYY')} name="Deel-SE">
            Deel.com SE
          </TimelineItem>
          <TimelineItem from={"03-06-2023"} to={"06-26-2023"} name="AWS-FEE">
            AWS FEE
          </TimelineItem>
          <TimelineItem from={"10-01-2021"} to={"02-10-2023"} name="WSO2-TL">
            WSO2 TL
          </TimelineItem>
          <TimelineItem from={"11-01-2019"} to={"09-01-2021"} name="WSO2-ATL">
            WSO2 ATL
          </TimelineItem>
          <TimelineItem from={"02-01-2018"} to={"10-01-2019"} name="WSO2-SSE">
            WSO2 SSE
          </TimelineItem>
          <TimelineItem from={"01-01-2016"} to={"01-01-2018"} name="WSO2-SE">
            WSO2 SE
          </TimelineItem>
        </WorkItems>
      </TimelineContainer>
    </HoveredItemContextProvider>
  );
}
