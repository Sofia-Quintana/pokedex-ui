import { HeaderContainer, Logo, Paragraph, Title } from '../components/styles/Header.styles';

const Header = (props) => {

    return(
        <HeaderContainer>
            <Logo/>
            <Title>Pokedex</Title>
        </HeaderContainer>
    );
}

export default Header;