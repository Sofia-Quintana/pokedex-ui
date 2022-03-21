import React,  { useEffect, useState } from 'react';
import CustomComboBox from '../../utils/containers/CustomComboBox';
import { ErrorLabel, Input, InputLabelWrap, Label, NestedContainer } from './styles/Form.styles';
import { ItemLabel } from '../../utils/components/styles/CustomComboBox.style';

const InputSection = (props) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [regions, setRegions] = useState([]);

    useEffect( () => {
        fetch('https://pokeapi.co/api/v2/region')
            .then(response => response.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setRegions(result.results);
                },
                (error) => {
                    setIsLoaded(false);
                    setError(error);
                }
            )
    }, []);

    return(
        <NestedContainer>
            <InputLabelWrap>
                <Label>FULL NAME*</Label>
                <Input 
                    onChange={props.onFullNameChange} 
                    type='text' 
                    valid={props.validFulltname} 
                    placeholder='Type your full name' 
                    value={props.fullName}
                />
            {
                !props.validFulltname && props.validFullname !== undefined
                ? <ErrorLabel>Full name is required</ErrorLabel>
                : <></>
            }
            </InputLabelWrap>
            <InputLabelWrap>
                <Label>NICKNAME*</Label>
                <Input 
                    onChange={props.onNicknameChange} 
                    type='text' 
                    valid={props.validNickname} 
                    placeholder='Type your nickname' 
                    value={props.nickname}
                />
            {
                !props.validNickname && props.validNickname !== undefined
                ? <ErrorLabel>Nickname is required</ErrorLabel>
                : <></>
            }
            </InputLabelWrap>
            <InputLabelWrap>
                <Label>EMAIL*</Label>
                <Input 
                    onChange={props.onEmailChange} 
                    type='text' 
                    valid={props.validEmail} 
                    placeholder='Type your email' 
                    value={props.email}
                />
            {
                !props.validEmail && props.validEmail !== undefined
                ? <ErrorLabel>Email is required</ErrorLabel>
                : <></>
            }
            </InputLabelWrap>
            <InputLabelWrap>
            <Label>AGE</Label>
                <Input 
                    onChange={props.onAgeChange} 
                    type='number' 
                    placeholder='Select your age' 
                    value={props.age}
                />
            </InputLabelWrap>
            <InputLabelWrap>
            <Label>PASSWORD*</Label>
                <Input 
                    onChange={props.onPasswordChange} 
                    type='password' 
                    placeholder='Type your password' 
                    value={props.password}
                />
            </InputLabelWrap>
            <InputLabelWrap>
                <Label>REGION*</Label>
                <CustomComboBox select={props.setSelectedRegion} selected={props.region} valid={props.isSelectedRegion}>
                    {
                        isLoaded ?
                        regions.map( (value) => {
                            return <ItemLabel key={value.name}>{value.name}</ItemLabel>
                        })
                        : <ItemLabel>Loading data...</ItemLabel>
                    }
                </CustomComboBox>         
            {
                !props.isSelectedRegion && props.isSelectedRegion !== undefined
                ? <ErrorLabel>Region is required, please select one</ErrorLabel>
                : <></>
            }
            </InputLabelWrap>
            <InputLabelWrap>
                <Label>GENDER*</Label>
                <CustomComboBox select={props.setSelectedGender} selected={props.gender} valid={props.isSelectedGender}>
                    <ItemLabel>Male</ItemLabel>
                    <ItemLabel>Female</ItemLabel>
                </CustomComboBox>         
            {
                !props.isSelectedGender && props.isSelectedGender !== undefined
                ? <ErrorLabel>Gender is required, please select one</ErrorLabel>
                : <></>
                }
            </InputLabelWrap>
            <InputLabelWrap>
                <Label>CLASS*</Label>
                <CustomComboBox select={props.setSelectedClass} selected={props.class} valid={props.isSelectedClass}>
                    <ItemLabel>Battle</ItemLabel>
                    <ItemLabel>Show</ItemLabel>
                </CustomComboBox>         
            {
                !props.isSelectedClass && props.isSelectedClass !== undefined
                ? <ErrorLabel>Class is required, please select one</ErrorLabel>
                : <></>
                }
            </InputLabelWrap>
        </NestedContainer>
    );

}
export default InputSection;