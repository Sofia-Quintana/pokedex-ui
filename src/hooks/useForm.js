import { useState } from "react";

/* - Name
 * - Pokemon trainer nickname
 * - region of origin
 * - gender
 * - age
 * - email
 * - trainer class (battle or show)
*/

const useForm = () => {
    const initialState = {
        fullName: '',
        validFullName: undefined,
        nickname: '',
        validNickname: undefined,
        region: '- SELECT REGION -',
        isSelectedRegion: undefined,
        gender: '- SELECT GENDER -',
        isSelectedGender: undefined,
        age: 0,
        email: '',
        validEmail: undefined,
        password: '',
        class: '- SELECT CLASS -',
        isSelectedClass: undefined,
    };

    const [ formValues, setFormValues ] = useState({...initialState});
    const resetForm = () => setFormValues( { ...initialState } );

    const setSelectedRegion = (e) => {
        setFormValues( (previousFormValue) => {
            return {
                ...previousFormValue,
                region: e.target.innerText,
                isSelectedRegion: true,
            };
        });
    }; 

    const setSelectedGender = (e) => {
        setFormValues( (previousFormValue) => {
            return {
                ...previousFormValue,
                gender: e.target.innerText,
                isSelectedGender: true,
            };
        });
    };
    
    const setSelectedClass = (e) => {
        setFormValues( (previousFormValue) => {
            return {
                ...previousFormValue,
                class: e.target.innerText,
                isSelectedClass: true,
            };
        });
    }; 

    const onFullNameChange = (e) => {
        let validFullName = false;
        if(e.target.value.length > 0) validFullName = true;
        setFormValues( (previousFormValue) => {
            return {
                ...previousFormValue,
                fullName: e.target.value,
                validFullName,
            }
        });
    };

    const onNicknameChange = (e) => {
        let validNickname = false;
        if(e.target.value.length > 0) validNickname = true;
        setFormValues( (previousFormValue) => {
            return {
                ...previousFormValue,
                nickname: e.target.value,
                validNickname,
            }
        });
    };

    const onEmailChange = (e) => {
        let validEmail = false;
        if(e.target.value.length > 0 && e.target.value.match("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$")) validEmail = true;
        setFormValues( (previousFormValue) => {
            return {
                ...previousFormValue,
                email: e.target.value,
                validEmail,
            }
        });
    };

    const onAgeChange = (e) => {
        if(e.target.value.length > 0 && e.target.value.length < 101) {
            setFormValues( (previousFormValue) => {
                return {
                    ...previousFormValue,
                    age: e.target.value,
                }
            });
        } 
    };

    const onPasswordChange = (e) => {
        setFormValues( (previousFormValue) => {
            return {
                ...previousFormValue,
                password: e.target.value,
            }
        });
    };

    const validate = () => {
        const { validFullName, validNickname, validEmail, isSelectedRegion, isSelectedGender, isSelectedClass } = formValues;
        validateInvalidSubmit({
            validFullName, validNickname, validEmail, isSelectedRegion, isSelectedGender, isSelectedClass
        });

        if(!validFullName) return false;
        if(!validNickname) return false;
        if(!validEmail) return false;
        if(!isSelectedRegion) return false;
        if(!isSelectedGender) return false;
        if(!isSelectedClass) return false;
        return true;
    };

    const validateInvalidSubmit = ( { ...params } ) => {
        const validFieldsObject = {};
        for(let param in params) {
            if(Object.is(params[param], undefined)) {
                validFieldsObject[param] = false;
            }
        }

        setFormValues( (previousFormValue) => ({
            ...previousFormValue,
            ...validFieldsObject,
        }));
    };

    return {
        resetForm,
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
    };
};

export default useForm;