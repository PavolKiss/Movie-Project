import React from "react";
import Header from "../../components/Header";
import PlayerVideo from "../../components/PlayerVideo";
import Footer from "../../components/Footer";

class Player extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <PlayerVideo />
        <Footer />
      </div>
    );
  }
}

export default Player;
