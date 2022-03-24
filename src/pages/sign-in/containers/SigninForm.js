import React from "react"
import useLogin from "../../../hooks/useLogin"
import { FormContainer, Logo } from "../components/styles/Form.styles";
import { Title, SubmitButton, ButtonsContainer } from "../../login/components/styles/Form.styles";
import InputSection from "../components/InputSection";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SigninForm = (props) => {
    const navigate = useNavigate();
    const {
        onNicknameChange,
        onPasswordChange,
        reset,
        validate,
        formValues
    } = useLogin();

    const submit = (e) => {
        e.preventDefault();
        if(validate()) {
            const { nickname, password } = formValues;
            const body = {
                nickname: nickname,
                password: password
            };

            axios.post('http://localhost:8080/user/log-in', body)
                .then((response) => {
                    if(response.status === 200) {
                        localStorage.setItem('nickname', nickname);
                        navigate('/');
                    }
                })
                .then((error) => console.error(error));
        }
    };

    return(
        <FormContainer>
            <Logo/>
            <Title>Sign in</Title>
            <InputSection 
                nickname={formValues.nickname}
                onNicknameChange={onNicknameChange}
                password={formValues.password}
                onPasswordChange={onPasswordChange}
            />
            {/* <ButtonsContainer> */}
                <SubmitButton type='submit' onClick={submit}>Continue</SubmitButton>
            {/* </ButtonsContainer> */}
        </FormContainer>
    );

}

export default SigninForm;