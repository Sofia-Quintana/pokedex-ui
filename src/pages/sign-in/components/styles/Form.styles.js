import styled from 'styled-components';
import { ReactComponent as Pokeball } from '../../../../assets/pokeball_s.svg';
import { specificSize } from '../../../../utils/DevicesSizeValidation';

export const FormContainer = styled.div`
	display: flex;
    flex-direction: column;
    align-items: center;
	@media only screen and ${specificSize.laptopL} {
		margin: 5% 33%;
		background: rgb(245 245 245);
		border-radius: 15px 100px / 120px;
		width: 35%;
        padding-bottom: 2%;
        padding-top: 2%;
	}
	@media only screen and ${specificSize.laptop} {
		margin: 5% 30%;
		width: 50%;
	}
	@media only screen and ${specificSize.mobile} {
		margin: 10%;
	}
`;

export const Logo = styled(Pokeball)`
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-top: 4%;
    margin-bottom: 4%;
`;

export const InputLabelWrap = styled.div`
	@media only screen and ${specificSize.mobile} {
		text-align: -webkit-center;
	}
`;
