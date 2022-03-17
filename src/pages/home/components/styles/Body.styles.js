import styled from 'styled-components';
import { device, specificSize } from '../../../../utils/DevicesSizeValidation';

export const BodyContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;  
    flex-direction: row;
    flex-wrap: wrap;
    padding: 10px 50px;
    margin: 0 20%;
    background: rgb(0 51 255 / 20%); 
    border-radius: 20px;
    box-shadow: 5px 5px 1px rgb(255 255 255 / 62%);

    @media only screen and ${device.desktop} {
        margin: 0 30%;    
    }
    @media only screen and ${specificSize.tablet} {
        margin: 20px;
    }
    @media only screen and ${specificSize.mobile} {
        margin: 8px;
        padding: 0;
    }
`;