/* eslint-disable */
import DevMap from ".";

export default {
  title: "DevMap",
};

export const Default = () => (
  <>
    <DevMap
      version={0.5}
      completionStatus={0}
      mainFocusOfVersion={"Base Character Movement And Gameplay"}
      details={"The original 2021 demo"}
    />
    <DevMap
      version={0.6}
      completionStatus={1}
      mainFocusOfVersion={"Move Meter"}
      details={"sadfsadf sdfasdf safsdaf sadfsa df"}
    />
    <DevMap
      version={0.7}
      completionStatus={2}
      mainFocusOfVersion={"Score Attack Elements"}
      details={"sadfsa sadfsa sadfsadf safsdafds"}
    />
  </>
);

Default.story = {
  name: "default",
};
