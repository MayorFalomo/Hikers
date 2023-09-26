import styled from 'styled-components'

export const FooterStyled = styled.div`
footer{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 50px;
    margin: 50px auto;
    width: 90%;
    /* border: 2px green solid; */
    .footer-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        width: 30%;
        height: 100%;
        gap: 30px;
    }
    .subContainer{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        P{
            line-height: 30px;
            margin: 20px auto;
        }
    }
    .subFooter{
        display: flex;
        align-items: flex-start;
        justify-content: end;
        gap: 50px;
        width: 50%;
        ul{
            display: flex;
            flex-direction: column;
            gap: 15px;
            justify-content: flex-start ;
        }
    }
}
`