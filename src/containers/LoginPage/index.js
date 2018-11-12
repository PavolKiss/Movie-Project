import React from 'react';
import FormInput from '../../components/FormInput'
import {StyledWrapper, InputWrapper, IconWrapper, StyledButton, ButtonWrapper, LogoLogin, LogoWrapper} from '../../components/FormInput/styles';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoLogin from '../../assets/logoLogin.png';
import Axios from 'axios';

class LoginPage extends React.Component{

    state = {   //value bude username, password
        username: "",
        password: "",
    };

    handleUserName = e => { //event je to co urobis na stranke
        this.setState({username: e.target.value});
            //console.log(e.target.value);
    };
    handlePassword = e => {
        this.setState({password: e.target.value});
    };

    onSubmit = async event => {
        event.preventDefault();
        const form = new FormData();
        form.append("username", `${this.state.username}`);
        form.append("password", `${this.state.password}`);
        try {
            const response  = await Axios ({
                method: "post",
                url: "/api/v1/user/login",
                data: form,
                config: {headers: {"Content-Type": "application/json"}}
            });
            this.props.history.push("/dashboard/homepage");
            // window.sessionStorage.setItem("token", JSON.stringify(response));
            // window.sessionStorage.setItem("password", JSON.stringify(this.state.password));
        } 
        catch (error) {
            console.log(error);
        }
    };

    render(){
        const {username, password} = this.state;
    
        return(
                <StyledWrapper>
                    <LogoWrapper>
                    <LogoLogin src={logoLogin} />
                    </LogoWrapper>
            <form onSubmit = {this.onSubmit}>
                <InputWrapper> 
                <IconWrapper>
                    <FontAwesomeIcon 
                    style=
                    {{color: "rgb(217, 217, 217)",
                    margin: "10px"
                }}
                    icon="user" />
                </IconWrapper>

                <FormInput
                    onSubmit={this.onSubmit}
                    changeState={this.handleUserName} 
                    type="text"
                    placeholder="username"
                    value={username}
                />
                </InputWrapper>  
                
                <InputWrapper>
                <IconWrapper>
                    <FontAwesomeIcon 
                    style=
                    {{color: "rgb(217, 217, 217)",
                    margin: "10px"}}
                    icon="lock" />
                </IconWrapper>
                
                <FormInput
                    onSubmit={this.onSubmit}
                    changeState={this.handlePassword} 
                    type="password"
                    placeholder="password"
                    value={password} 
                />
                </InputWrapper>
        
                <ButtonWrapper>
                <StyledButton type="submit">Login</StyledButton>
                </ButtonWrapper> 
            </form>
            </StyledWrapper>
        );
    }
}

export default LoginPage;