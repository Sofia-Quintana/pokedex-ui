import React from "react"
import useLogin from "../../../hooks/useLogin"
import { FormContainer, Logo } from "../components/styles/Form.styles";
import { Title, SubmitButton, ButtonsContainer } from "../../login/components/styles/Form.styles";
import InputSection from "../components/InputSection";

const SigninForm = (props) => {
    const {
        onNicknameChange,
        onPasswordChange,
        reset,
        formValues
    } = useLogin();

    const submit = (e) => {
        e.preventDefault();
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