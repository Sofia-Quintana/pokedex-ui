import styled from 'styled-components';
import { ReactComponent as Pokeball } from '../../../../assets/pokeball_s.svg';
import { specificSize } from '../../../../utils/DevicesSizeValidation';

export const HeaderContainer = styled.header`
    margin-bottom: 20px;
    padding: 5px 30px;  
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    font-size: calc(10px + 2vmin);
    color: white;
    background: linear-gradient(90deg, rgba(3,33,78,1) 0%, rgba(11,6,93,1) 36%, rgba(110,2,16,1) 86%, rgba(156,2,2,1) 100%);
    @media only screen and ${specificSize.tablet} {
        margin-bottom: 0;
        padding: 12px 15px;
    }

    @media only screen and ${specificSize.mobile} {                   
        margin-bottom: 0;
    }        
`;

export const Logo = styled(Pokeball)`
    width: 3%;
    height: 3%;
`;

export const Title = styled.h1`
    text-align: center;
    color: white;
    font-weight: bolder;
    font-family: emoji;
    font-size: 1.5rem;
    @media only screen and ${specificSize.mobile} {                   
        font-size: 2.5rem;
    }    
`;

export const Paragraph = styled.p`
    text-align: center;
    font-size: 20px;
  
    @media only screen and ${specificSize.mobile} {                   
        margin: 0;
    }    
`;