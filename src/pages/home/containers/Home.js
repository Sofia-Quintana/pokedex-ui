import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import { Container } from "../components/styles/Home.styles";
import { ResetButton } from "../../login/components/styles/Form.styles";
import axios from "axios";
import { ButtonContainer, CardContainer } from "../components/styles/Body.styles";

export const Home = () => {
    const [ pokemons, setPokemons ] = useState([]);
    const [ offset, setOffset ] = useState(0);
    const [ user, setUser ] = useState([]);

    const getPokemons = async (number = 100, offset) => {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${number}&offset=${offset}`);
        
        const arrayPromise = response.data.results.map(async (value) => {
            const {data} = await axios.get(value.url);
            return data;
        });
 
        const pokemonsResponse = await Promise.all(arrayPromise);

        const pokemonList = [];

        pokemonsResponse.forEach( (data) => {
            pokemonList.push(
                {
                    id: data.id,
                    name: data.name,
                    moves: data.moves,
                    sprites: data.sprites,
                    type: data.types
                }
            );
        });

        return pokemonList;
    };

    const getUserData =  async() => {
        const value = localStorage.getItem('nickname');
        if(value.length > 0) {
            const request = await axios.get(`http://localhost:8080/user/${value}`);
            return request.data;
        }
    }
 
    useEffect( () =>  {
        getUserData().then((value) => setUser(value));
        // getUserData().then((value) => console.log(value));
        getPokemons(100,offset).then((value) => setPokemons(value));

    }, [offset]);

    return(
        <Container>
            {
                user.length !== 0 ? <Header user={user}/> : <Header />
            }          
            <CardContainer>
                {
                    pokemons.length !== 0 ? 
                    pokemons.map( (pokemon) => {
                        return <Card pokemon={pokemon} key={pokemon.id} />
                    }) : <p>Loading data...</p>
                }
            </CardContainer>
            <ButtonContainer>
                <ResetButton type="button" onClick={ () => setOffset(offset-100)}>Previous</ResetButton>
                <ResetButton type="button" onClick={ () => setOffset(offset+100)}>Next</ResetButton>
            </ButtonContainer>
        </Container>
    );
    
       
}

export default Home;