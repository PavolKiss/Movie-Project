import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledWrapper, Hover1, Hover2, Hover3 } from "./styles";

const styles = {
  color: "#f2b134",
  padding: "0 .2em"
};

class IconsLinks extends React.Component {
  render() {
    return (
      <StyledWrapper>
        <Hover1>
          <a href="https://www.facebook.com">
            <FontAwesomeIcon
              icon={["fab", "facebook"]}
              style={styles}
              size="3x"
            />
          </a>
        </Hover1>
        <Hover2>
          <a href="https://www.instagram.com">
            <FontAwesomeIcon
              icon={["fab", "instagram"]}
              style={styles}
              size="3x"
            />
          </a>
        </Hover2>
        <Hover3>
          <a href="https://plus.google.com/">
            <FontAwesomeIcon
              icon={["fab", "google-plus-square"]}
              style={styles}
              size="3x"
            />
          </a>
        </Hover3>
      </StyledWrapper>
    );
  }
}

export default IconsLinks;
