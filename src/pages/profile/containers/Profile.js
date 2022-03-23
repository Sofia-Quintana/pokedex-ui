import React, { useState } from "react";
import { Container, DataContainer, PictureContainer, PokemonContainer, ProfilePicture } from "../components/styles/Profile.styles";

const Profile = (props) => {
    const [isLoaded, setIsLoaded] = useState(false);
    
    if(isLoaded) {
        return(
            <Container>
                <PokemonContainer>

                </PokemonContainer>
                <DataContainer>
                    <PictureContainer>
                        <ProfilePicture src='../../../assets/show.svg'/>
                    </PictureContainer>

                </DataContainer>
            </Container>
        );
    } else {
        <Container>
            <p>LOADING...</p>
        </Container>
    }
};

export default Profile;