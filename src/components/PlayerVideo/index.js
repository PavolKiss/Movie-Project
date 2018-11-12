import React from "react";
import { StyledWrapper } from "./styles";
import {
  Player,
  ControlBar,
  ReplayControl,
  ForwardControl,
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton
} from "video-react";
import "../../../node_modules/video-react/dist/video-react.css";

export default props => {
  return (
    <StyledWrapper>
      <Player
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        BigPlayButton
        position="center"
      >
        <ControlBar>
          <ReplayControl seconds={10} order={1.1} />
          <ForwardControl seconds={10} order={1.2} />
          <CurrentTimeDisplay order={4.1} />
          <TimeDivider order={4.2} />
          <PlaybackRateMenuButton rates={[2, 1, 0.5]} order={7.1} />
        </ControlBar>
      </Player>
    </StyledWrapper>
  );
};
