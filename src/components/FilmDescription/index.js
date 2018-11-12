import React from "react";
import {
  StyledWrapper,
  BorderWrapper,
  SideNavbar,
  ImageWrapper,
  Genre,
  AboutFilm,
  NameOfFilm,
  Picture,
  Year,
  ContainerWrapper,
  GenreOfFilm,
  DescribeFilm
} from "./styles";
import image from "../../assets/1.jpg";

const styles = {
  color: "#f2b134"
};

const FilmDescription = props => (
  <StyledWrapper>
    <BorderWrapper>
      <AboutFilm>
        <ImageWrapper>
          <Picture src={image} />
        </ImageWrapper>
        <ContainerWrapper>
          <NameOfFilm style={styles}>NameFilm</NameOfFilm>
          <Year style={styles}>Year</Year>
          <GenreOfFilm style={styles}>Horor</GenreOfFilm>
          <DescribeFilm style={styles}>12312333534dvxcvzs</DescribeFilm>
        </ContainerWrapper>
      </AboutFilm>
    </BorderWrapper>
    <SideNavbar>
      <Genre>
        123
        {props.item}
      </Genre>
    </SideNavbar>
  </StyledWrapper>
);

export default FilmDescription;
