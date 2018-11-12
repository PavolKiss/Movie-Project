import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const HeaderWrapper = styled.div`
    height: 100px;
    background: #454545;
    padding: 0 5%;
    box-shadow: 0 -2px 7px 5px black;
`;
export const LogoHeader = styled.img`
    height: 80px;
    float: left;
    padding-left: 15px;
    padding-top: 10px;
    padding-bottom: 10px; 
`;
export const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
    font-size: 25px;
    position: relative;
    line-height: 100px;
    padding: 0 80px;
`;
export const StyledLogLink = styled(Link)`
    color: white;
    float: right;
    line-height: 100px;
    padding: 0 50px;
    text-decoration: none;
    font-size: 25px;
    position: relative;
`;