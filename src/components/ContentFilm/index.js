import React from 'react'
import {StyledWrapper, Content, MovieTitle} from './styles'

const ContentFilm = ({content, movieTitle}) => (
    <StyledWrapper>
        <MovieTitle>{movieTitle}</MovieTitle>
        <Content>{content}</Content>
    </StyledWrapper>
)

export default ContentFilm;