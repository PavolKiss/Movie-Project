import React from 'react';
import bgImg from '../../assets/bgImg.jpg'
import {Wrapper, BgImg} from './styles';

const BgImage = () => (
    <Wrapper>
        <BgImg src={bgImg} />
    </Wrapper>
);

export default BgImage;