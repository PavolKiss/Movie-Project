import React from 'react';
import {Wrapper, StyledIframe} from './styles'

const Trailer = ({title, src}) => ( 
        <Wrapper>
            <StyledIframe 
            title={title}
            width={850} 
            height={500} 
            src={src}  
            allow={"autoplay; encrypted-media"} 
            allowfullscreen>
            </StyledIframe>
        </Wrapper>
)

export default Trailer;