import styled from 'styled-components';

const Login = ()=>{
    return (
        <Container>
            <ContentAction>
                <Logo1 src='/images/cta-logo-one.svg'/>
                <SignUp>GET ALL THERE</SignUp>
                <Description>
                    Get premier access to raya and the dragon 
                    for with a Disney+ subscription. As of 03/26/21, 
                    the price of the Disney Bundle will increase by $1.
                </Description>
                <Logo2 src='/images/cta-logo-two.png'/>
            </ContentAction>
        </Container>
    )
}

export default Login;

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: top;
    justify-content: center;

    &:before{
        position: absolute;
        top: 0;
        bottom: 0;
        right 0;
        left: 0;
        content: "";
        opacity: 0.7;
        z-index: -1;
        no-repeat: fixed;
        background-image: url("/images/login-background.jpg");
        background-position: top;
        background-size: cover;
    }
`

const ContentAction = styled.div`
    max-width: 650px;
    width: 90%;
    padding: 80px 40px;
    display: flex;
    flex-direction: column;    
    margin-top: 100px;
    align-items: center;

`

const Logo1 = styled.img`
`


const Logo2 = styled.img`
    width: 90%;
`

const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transistion: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover{
        background: #0483ee;

    }
`

const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`