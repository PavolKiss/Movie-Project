import Styled from "styled-components";

export const StyledWrapper = Styled.div`
width: 75%;
margin: 2em auto;

`;

export const BorderWrapper = Styled.div`
width: 80.33%;
float: right;
min-height: 600px;
box-shadow: 0 0 9px 2px rgb(0,0,0);
display: inline-block;
`;

export const SideNavbar = Styled.div`
float: left;
font-weight: 600;
width: 19.49%;
min-height: 600px;
background-color: #393939;
overflow: hidden;
box-shadow: 0 0 9px 2px rgb(0,0,0);
display: inline-block;
`;

export const Genre = Styled.div`
background-color: #393939;
height: 50px;
width: 210px;
float: left;
line-height: 50px;
padding-left: 10px;
font-size: 18px;
text-decoration: none;
color: #f2b134;
border-bottom: 0.5px solid #050505;
display: inline-block;
transition: all .15s ease-in-out;
&:hover {
    background-color: #000000;
    color: #transition: all .15s ease-in-out;
        &:hover {
        background-color: #f2b134;
        color: #000000;
        };
    }
`;

export const AboutFilm = Styled.div`
    width: 100%;
    height: 15.625em;
    backgrnd-color: #fff;
    padding-bottom: 1.250em;
    padding-top: 1.250em;
    padding-left: 0.500em;
    font-weight: 300;
    font-size: 16px;
    display: flex;
    `;

export const ImageWrapper = Styled.div`
width:30%
`;

export const ContainerWrapper = Styled.div`
width: 70%`;

export const Picture = Styled.img`
    width: 100%;
    height:250px;
    transition: all .2s linear;
    border-radius: 10px;
    display: inline-block;
    &:hover{
        transform: scale(1.064);
      }
`;

export const NameOfFilm = Styled.div`
    width: 100%;
    font-size: 1.5em;
    height: 35px;
    padding-left: 11px;
    display:block;
    `;

export const Year = Styled.div`
 width: 100%;
 font-size: 1em;
 height: 25px;
 padding-left: 11px;
 display:block;
`;
export const GenreOfFilm = Styled.div`
 width: 100%;
 font-size: 1em;
 height: 25px;
 padding-left: 11px;
 display:block;`;

export const DescribeFilm = Styled.div`
 width: 100%;
 font size: 1em;
 height: 25px;
 padding-left: 11px;
 display:block;
 `;
