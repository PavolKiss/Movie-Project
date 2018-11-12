import React from 'react';
import ContentFilm from '../../components/ContentFilm';
import Trailer from '../../components/Trailer';
import ImgMovieDetails from '../../components/ImgMovieDetails';
import category from '../../assets/category.jpg';
import {StyledWrapper} from './styles';

class MovieDetailsPage extends React.Component{
    state = {
        title: "unique", 
        src: "https://www.youtube.com/embed/wMVO79F9jSk", 
        content: "Jamie Rellis (Mila Kunis) is a New York City head-hunter trying to sign Los Angeles-based art director Dylan Harper (Justin Timberlake) for her client. When he takes the job and makes the move, they quickly become friends. Their friendship turns into a friendship with benefits, but with Jamie's emotionally damaged past and Dylan's history of being emotionally unavailable, they have to try to not fall for each other the way Hollywood romantic comedies dictate.",
        movieTitle: "Friends With Benefits"
    };
    

    render(){
        const {content, title, src, movieTitle} = this.state;
        return(
            <StyledWrapper>
                <div style={{width: "100%"}}>
                     
                <ImgMovieDetails 
                src={category}
                />

                <ContentFilm 
                content={content}
                movieTitle={movieTitle}
                />

                </div>
                <Trailer 
                title={title}
                src={src}
                />
            </StyledWrapper>
        );
    }
}

export default MovieDetailsPage;