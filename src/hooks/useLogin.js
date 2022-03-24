import { useState } from "react";

const useLogin = () => {
    const initialState = {
        nickname: '',
        validNickname: undefined,
        password: '',
        validPassword: undefined,
        isAuthorized: false,
    };

    const [ formValues, setFormValues ] = useState({...initialState});
    const reset = () => { setFormValues(...initialState)};

    const onNicknameChange = (e) => {
        let validNickname = false;
        if(e.target.value.length > 0) validNickname = true;
        setFormValues( (previousFormValue) => {
            return {
                ...previousFormValue,
                nickname: e.target.value,
                validNickname
            }
        });
    };

    const onPasswordChange = (e) => {
        let validPassword = false;
        if(e.target.value.length > 0) validPassword = true;
        setFormValues( (previousFormValue) => {
            return {
                ...previousFormValue,
                password: e.target.value,
                validPassword
            }
        });
    };

    const validate = () => {
        const { validNickname, validPassword } = formValues;
        validateInvalidSubmit({
            validNickname, validPassword
        });

        if(!validNickname) return false;
        if(!validPassword) return false;
        return true;
    };

    const validateInvalidSubmit = ( { ...params } ) => {
        const validFieldsObject = {};
        for(let param in params) {
            if(Object.is(params[param], undefined)) {
                validFieldsObject[param] = false;
            }
        }
    }
    
    return {
        onNicknameChange,
        onPasswordChange,
        reset,
        validate,
        formValues
    }
};

export default useLogin;