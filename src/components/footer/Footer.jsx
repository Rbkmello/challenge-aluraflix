import { styled } from 'styled-components';
import { BsLinkedin } from "react-icons/bs";
import { FaSquareGithub, FaWhatsapp, } from "react-icons/fa6";
import './Footer.css';
import logo from '../../assets/logo.png';

const StyledFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    background-color: var(--color-black);
    padding: 2rem;
    box-sizing: border-box;
    border-top: 4px solid var(--color-blue);
    box-shadow: 0 -10px 15px 0 var(--color-button-shadow);
`;

const IconContainer = styled.ul`
    background-color: transparent;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    list-style: none;
    li {
        background-color: var(--color-black);
        display: inline-block;
        //margin-right: 1.5rem;
        padding: 0.5rem;
    }
`;

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: clamp(30%, 100%, 10.528rem); 
        height: auto;
        background-color: var(--color-black);
    }
`;

const FooterText = styled.p`
    background-color: transparent;
    font-size: 13px;
    color: var(--color-white-smoke);
    margin: 0;
    line-height: 1.4;
    text-align: center;
`;

function Footer() {
    return (
        <StyledFooter className='container'>
            <LogoContainer className='logo'>
                <img src={logo} alt="Logo" />
            </LogoContainer>
            <IconContainer>
                <li>
                    <a href="https://github.com/Rbkmello">
                    <FaSquareGithub className='icons'/>
                    </a>
                </li>
                <li>
                <a href="https://wa.me/5521980965602?text=Oi,%20tudo%20bem?%20Precisa%20de%20ajuda%20para%20encontrar%20o%20pr%C3%B3ximo%20filme%20para%20assistir?%20Estou%20aqui%20para%20ajudar!">
                <FaWhatsapp className='icons'/>
                    </a>
                </li>
                
                <li>
                    <a href="https://www.linkedin.com/in/rebeccabmello/">
                    <BsLinkedin className='icons' />
                    </a>
                </li>
            </IconContainer>
            <FooterText className='text'>
                Challenge Alura<br />
                Desenvolvido por Rebecca Mello<br />
                @ 2025
            </FooterText>
        </StyledFooter>
    );
}

export default Footer