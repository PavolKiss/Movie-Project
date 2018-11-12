import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Wrapper = styled(Link)`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    padding: 1em;
    font-size: 25px;
    text-decoration: none;
`;

export const ImgCategory = styled.img`
    height: 280px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`;
export const Title = styled.div`
    color: white;
    text-align:center;
    width:100%;
    background: #606060;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    padding-top: 3px;
    padding-right: 0px;
    padding-bottom: 3px;
    padding-left: 0px;
`;
