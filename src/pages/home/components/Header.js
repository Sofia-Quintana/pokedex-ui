import { HeaderContainer, Logo, Paragraph, ProfileImage, Title, UserButton, UserContainer } from '../components/styles/Header.styles';
import Show from '../../../assets/show.svg';
import Battle from '../../../assets/battle.svg';
import LogIn from '../../../assets/login.svg';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Profile from '../../profile/containers/Profile';

const Header = (props) => {

    const navigate = useNavigate();

    const redirect = () => {
        navigate('/profile');
    }

    return(
        <HeaderContainer>
            <Logo/>
            <Title>Pokedex</Title>
            { props.user !== undefined ? 
                <UserContainer>
                    <UserButton type='button' onClick={redirect}>
                        { props.user.class === 'show' ? 
                            <ProfileImage src={Show}></ProfileImage> :
                            <ProfileImage src={Battle}></ProfileImage>
                        }
                    </UserButton>
                </UserContainer> : 
                <UserContainer>
                    <UserButton type='button' onClick={() => navigate('/sign-in')}>
                            <ProfileImage src={LogIn}></ProfileImage>
                    </UserButton>
                </UserContainer>
            }
            
        </HeaderContainer>
    );
}

export default Header;