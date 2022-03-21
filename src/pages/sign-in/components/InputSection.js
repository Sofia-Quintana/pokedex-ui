import React,  { useEffect, useState } from 'react';
import { ErrorLabel, Input, Label } from '../../login/components/styles/Form.styles';
import { InputContainer, InputLabelWrap } from './styles/Form.styles';

const InputSection = (props) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [regions, setRegions] = useState([]);

    // useEffect( () => {
    //     fetch('https://pokeapi.co/api/v2/region')
    //         .then(response => response.json())
    //         .then(
    //             (result) => {
    //                 setIsLoaded(true);
    //                 setRegions(result.results);
    //             },
    //             (error) => {
    //                 setIsLoaded(false);
    //                 setError(error);
    //             }
    //         )
    // }, []);

    return(
        <InputContainer>
            <InputLabelWrap>
                <Label>NICKNAME</Label>
                <Input 
                    onChange={props.onNicknameChange} 
                    type='text' 
                    placeholder='Type your nickname' 
                    value={props.nickname}
                />
            </InputLabelWrap>
            <InputLabelWrap>
            <Label>PASSWORD</Label>
                <Input 
                    onChange={props.onPasswordChange} 
                    type='password' 
                    placeholder='Type your password' 
                    value={props.password}
                />
            </InputLabelWrap>
        </InputContainer>
    );

}
export default InputSection;