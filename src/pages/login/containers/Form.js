import React from 'react';
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
            formValues,
        } = useForm();

    const submit = async (e) => {
        // e.preventDefault();
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
                    class={formValues.class}
                    setSelectedClass={setSelectedClass}
                    isSelectedClass={formValues.isSelectedClass}
                />
                <ButtonsContainer>
                    <ResetButton type='button' onClick={resetForm}>RESET</ResetButton>
                    <SubmitButton type='submit' onClick={submit}>SUBMIT</SubmitButton>
                </ButtonsContainer>
            </form>
        </FormContainer>
    );

};

export default Form;
