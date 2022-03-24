import axios from 'axios';
import React, { useState } from 'react';
import useForm from '../../../hooks/useForm';
import InputSection from '../components/InputSection';
import { ButtonsContainer, FormContainer, Paragraph, ResetButton, SubmitButton, Title } from '../components/styles/Form.styles';

/* - Name
 * - Pokemon trainer nickname
 * - region of origin (select)
 * - gender
 * - age
 * - email
 * - trainer class (battle or show)
*/

const Form = (props) => {
    const { resetForm, 
            setSelectedRegion, 
            setSelectedGender, 
            setSelectedClass,
            onFullNameChange,
            onNicknameChange,
            onEmailChange,
            onAgeChange,
            onPasswordChange,
            validate,
            formValues,
        } = useForm();

    const [submitted, setSubmitted] = useState('');

    const submit = (e) => {
        e.preventDefault();
        if(validate()) {
            const { fullName, nickname, region, gender, age, email, password, class_ } = formValues;
            const body = {
                nickname: nickname,
                email: email,
                password: password,
                fullname: fullName,
                region: region,
                gender: gender,
                class: class_,
                age: age,
                isLogged: false
            };
            axios.post('http://localhost:8080/user/', body)
                .then((response) => { setSubmitted(response.data.message)});
        }
    };

    

    return(
        <FormContainer>
            <form id='form' onSubmit={ submit }>
                <Title>Sign Up</Title>
                <Paragraph>* Indicates Required Field</Paragraph>
                <InputSection 
                    fullName={formValues.fullName}
                    onFullNameChange={onFullNameChange}
                    validFullName={formValues.validFullName}
                    nickname={formValues.nickname}
                    onNicknameChange={onNicknameChange}
                    validNickname={formValues.validNickname}
                    email={formValues.email}
                    onEmailChange={onEmailChange}
                    validEmail={formValues.validEmail}
                    age={formValues.age}
                    onAgeChange={onAgeChange}
                    password={formValues.password}
                    onPasswordChange={onPasswordChange}
                    region={formValues.region}
                    setSelectedRegion={setSelectedRegion}
                    isSelectedRegion={formValues.isSelectedRegion}
                    gender={formValues.gender}
                    setSelectedGender={setSelectedGender}
                    isSelectedGender={formValues.isSelectedGender}
                    class={formValues.class_}
                    setSelectedClass={setSelectedClass}
                    isSelectedClass={formValues.isSelectedClass}
                />
                <ButtonsContainer>
                    <ResetButton type='button' onClick={resetForm}>RESET</ResetButton>
                    <SubmitButton type='submit' onClick={submit}>SUBMIT</SubmitButton>
                </ButtonsContainer>
                {
                    submitted.length > 0 ? <Paragraph>{submitted}</Paragraph> : null
                }
            </form>
        </FormContainer>
    );

};

export default Form;
