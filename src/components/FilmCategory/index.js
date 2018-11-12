import React from 'react';
import {Wrapper, ImgCategory, Title} from './styles';


const FilmCategory = ({src, title, id}) => (
    <Wrapper to= {`/dashboard/category/${id}`}>
        <ImgCategory src={src}/>
        <Title>{title}</Title>
    </Wrapper>
)

export default FilmCategory;