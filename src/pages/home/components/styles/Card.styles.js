import styled from 'styled-components';

export const PokemonArea = styled.div`
    margin: 0.5em;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 32%;
    border-radius: 30px;
`;

export const ImageArea = styled.div`
    background: rgb(245 245 245 / 100%); 
    border-radius: 30px 30px 0 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    ${PokemonArea}:hover & {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
`;

export const Image = styled.img`
    width: 25%;
    height: 25%;
`;

export const BadgeArea = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const InformationArea = styled.div`
    padding: 2px 16px;
    border-radius: 0 0 30px 30px;
    background: rgb(140 3 26);
    ${PokemonArea}:hover & {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
`;

export const PokemonName = styled.h3` 
    font-family: system-ui;
    color: white;
    text-align: center;
`;

export const AddIcon = styled.img`
    width: 8%;
`;

export const Badge = styled.img`
    width: 10%;

`;