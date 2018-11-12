import styled from 'styled-components';

export const StyledInput = styled.input`
    width: calc(100% - 40px);
    display: inline-block;
    font-size: 20px;
    height: 40px;
    outline: none;
    border: 0;
    display: block;
    text-indent: 10px;
    color: rgb(64, 64, 64);
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
`;

export const StyledWrapper = styled.div`
    width: 25%;
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    margin: auto;
    height: 50%;
`;

export const InputWrapper = styled.div`
    height: 50px;
    width: 100%;
    display:inline-block;
    padding-top: 10px;
`;

export const IconWrapper = styled.span`
    float:left;
    line-height: 50px;
    text-align: center;
    background: rgb(64, 64, 64);        
    width: 40px;
    height: 42px;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
`;

export const ButtonWrapper = styled.div`
    padding-top: 10px;
`;

export const StyledButton = styled.button`
    background: #f2b134;
    border-radius: 5px;
    border: 2px solid #f2b134;
    color: white;
    font-size: 20px;
    padding: 10px;
    width: calc(100%);
    height: 45px;
    display: block;
`;

export const LogoLogin = styled.img`
   max-width: auto;
   max-height: 110px;
   min-height: 25px;
   display:flex;
   margin:auto;
   padding: 0 .75em;
`;

export const LogoWrapper = styled.div`
    margin-bottom: 30px;
    height: 100px;
    display: flex;
    justify-content: center;
    transition: all 0.2s linear;
`;
