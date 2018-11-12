import React from 'react';
import FilmCategory from '../../components/FilmCategory';
import category from '../../assets/category.jpg';
import BgImage from '../../components/BgImage';
import {Wrapper} from './styles'

class HomePage extends React.Component {
    state = {
        categoryData: [
            {id: 1, title: "Comedy"},
            {id: 2, title: "Horror"},
            {id: 3, title: "Romantic"},
            {id: 4, title: "Action"}
    ]
    };

    render(){
        return(
            <Wrapper>
                <BgImage/>
            {this.state.categoryData.map(item => (       
                <FilmCategory 
                    src={category}
                    id={item.id}
                    title={item.title}
                    key={item.id}
                    />
                    ))}
            </Wrapper>
        );
    }
}

export default HomePage;