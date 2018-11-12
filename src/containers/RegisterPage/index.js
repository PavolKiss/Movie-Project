import React from 'react';
import FormInput from '../../components/FormInput';
import { StyledWrapper, 
        InputWrapper, 
        IconWrapper, 
        LogoWrapper, 
        LogoLogin,
        ButtonWrapper,
        StyledButton } 
    from '../../components/FormInput/styles';
import logoLogin from '../../assets/logoLogin.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Axios from 'axios';

class RegisterPage extends React.Component{
   state = {
    username: "",
    password: "",
    email: ""
   };

   handleUsername = e => {
    this.setState({username: e.target.value});
   };

   handlePassword = e => {
    this.setState({password: e.target.value});
   };

    handleEmail = e => {
     this.setState({email: e.target.value});
   }

   onSubmit = async event => {
       event.preventDefault();
       const form = {
           username: this.state.username,
           password: this.state.password,
           email: this.state.email
       };

       var myJSON = JSON.stringify(form);

       try {
           const response = await Axios ({
               method: "post",
               url: "/api/v1/user/registration",
               data: form,
               config: {headers:{"Content-Type": "application/json"}}
           });
           alert("You have sucessfully registered.");
           this.props.history.push("/login");
       } catch (error) {
           alert("Something went wrong. Try again.");
           window.location.reload();
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
                    margin: "5px"}}
                    icon="user" />
                        </IconWrapper>
                <FormInput
                    changeState={this.handleUsername}
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
                    changeState={this.handlePassword} 
                    type="password" 
                    placeholder="password"
                    value={password}
                    maxLength={50} 
                    />
                    </InputWrapper>

                    {/* <InputWrapper>
                        <IconWrapper>
                            <FontAwesomeIcon 
                    style=
                    {{color: "rgb(217, 217, 217)",
                    margin: "10px"}}
                    icon="envelope" />
                        </IconWrapper>
                <FormInput 
                    changeState={this.handleEmail}
                    type="email"
                    placeholder="e-mail"
                    value={email}
                    maxLength={50}
                 />
                 </InputWrapper> */}

                 <ButtonWrapper>
                <StyledButton >Register</StyledButton>
                </ButtonWrapper> 
            </form>
            </StyledWrapper>
        );
    }
}

export default RegisterPage;