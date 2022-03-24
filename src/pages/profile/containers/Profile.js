import React, { useEffect, useState } from "react";
import { Container, DataContainer, PictureContainer, PokemonContainer, ProfilePicture } from "../components/styles/Profile.styles";
import Show from '../../../assets/show.svg';
import Battle from '../../../assets/battle.svg';
import Header from "../../home/components/Header";
import axios from "axios";

const Profile = (props) => {
    const [ user, setUser ] = useState([]);

    const getUserData =  async() => {
        const value = localStorage.getItem('nickname');
        if(value.length > 0) {
            const request = await axios.get(`http://localhost:8080/user/${value}`);
            return request.data;
        }
    }

    useEffect( () => {
        getUserData().then((value) => setUser(value));
    }, []);
    
    if(user.length !== 0) {
        return(
            <Container>
                <Header user={user}/>
                <PokemonContainer>

                </PokemonContainer>
                <DataContainer>
                    <PictureContainer>
                        {user.class === 'show' ? <ProfilePicture src={Show}/> : <ProfilePicture src={Battle}/>
                        }
                    </PictureContainer>
                    {/* <InputSection>
                    </InputSection> */}
                </DataContainer>
            </Container>
        );
    } else {
        return(
            <Container>
                <Header />
            </Container>
        );
    }
};

export default Profile;