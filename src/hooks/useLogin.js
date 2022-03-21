import { useState } from "react";

const useLogin = () => {
    const initialState = {
        nickname: '',
        password: '',
        isAuthorized: false,
    };

    const [ formValues, setFormValues ] = useState({...initialState});
    const reset = () => { setFormValues(...initialState)};

    const onNicknameChange = (e) => {
        setFormValues( (previousFormValue) => {
            return {
                ...previousFormValue,
                nickname: e.target.value,
            }
        });
    };

    const onPasswordChange = (e) => {
        setFormValues( (previousFormValue) => {
            return {
                ...previousFormValue,
                password: e.target.value,
            }
        });
    };

    return {
        onNicknameChange,
        onPasswordChange,
        reset,
        formValues
    }
};

export default useLogin;