import React from 'react';
import {Wrapper, ImgMovie} from './styles'

const ImgMovieDetails = ({src}) => (
    <Wrapper>
        <ImgMovie 
        src={src}
        />
    </Wrapper>
)

export default ImgMovieDetails;