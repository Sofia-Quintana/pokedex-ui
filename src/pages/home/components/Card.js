import React, { useState, useEffect } from "react";
import { ImageArea, InformationArea, PokemonArea, PokemonName, Image, AddIcon, BadgeArea, Badge } from "./styles/Card.styles";
import AddImage from '../../../assets/add.svg';
import Battle from '../../../assets/battle.svg';
import Bug from '../../../assets/bug.svg';
import Dark from '../../../assets/dark.svg';
import Dragon from '../../../assets/dragon.svg';
import Electric from '../../../assets/electric.svg';
import Fairy from '../../../assets/fairy.png';
import Fighting from '../../../assets/fighting.svg';
import Fire from '../../../assets/fire.svg';
import Flying from '../../../assets/flying.svg';
import Ghost from '../../../assets/ghost.svg';
import Grass from '../../../assets/grass.svg';
import Ground from '../../../assets/ground.svg';
import Ice from '../../../assets/ice.svg';
import Normal from '../../../assets/normal.svg';
import Poison from '../../../assets/poison.svg';
import Psychic from '../../../assets/psychic.svg';
import Rock from '../../../assets/rock.svg';
import Shadow from '../../../assets/shadow.svg';
import Steel from '../../../assets/steel.svg';
import Unknown from '../../../assets/unknown.svg';
import Water from '../../../assets/water.svg';


const Card = (props) => {

    const iconDependency = {
        battle: Battle,
        bug: Bug,
        dark: Dark,
        dragon: Dragon,
        electric: Electric,
        fairy: Fairy,
        fighting: Fighting,
        fire: Fire,
        flying: Flying,
        ghost: Ghost,
        grass: Grass,
        ground: Ground,
        ice: Ice,
        normal: Normal,
        poison: Poison,
        psychic: Psychic,
        rock: Rock,
        shadow: Shadow,
        steel: Steel,
        unknown: Unknown,
        water: Water,  
    }
    
    return(
        <PokemonArea>
            <ImageArea>
                <Image src={props.pokemon.sprites.front_shiny} ></Image>
                <Image src={props.pokemon.sprites.back_shiny} ></Image>
            </ImageArea>
            <InformationArea>
                <PokemonName>{props.pokemon.name}</PokemonName>
                {
                    props.pokemon.type.length === 2 ? 
                    <BadgeArea>
                        <Badge src={iconDependency[props.pokemon.type[0].type.name]}/>
                        <Badge src={iconDependency[props.pokemon.type[1].type.name]}/>
                    </BadgeArea>          
                    : 
                    <BadgeArea>
                        <Badge src={iconDependency[props.pokemon.type[0].type.name]}/>
                    </BadgeArea>
                }
                <AddIcon src={AddImage}/>
            </InformationArea>
        </PokemonArea>
    );
};

export default Card;