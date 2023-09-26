import styled from 'styled-components'

export const TimingStyled = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Abel&family=Alata&family=Archivo&family=Barlow:wght@600&family=Cabin:wght@500&family=Cinzel:wght@500;800&family=Fraunces:opsz,wght@9..144,700;9..144,900&family=Gilda+Display&family=Inclusive+Sans&family=Inter:wght@400;600&family=Josefin+Sans:wght@300;400;600&family=League+Spartan:wght@400;500;700&family=Manrope:wght@300&family=Maven+Pro&family=Merriweather:wght@700&family=Montserrat:ital,wght@0,400;0,600;0,700;1,500&family=Nanum+Gothic&family=Open+Sans:ital,wght@0,400;0,500;0,700;1,600&family=Patrick+Hand&family=Playfair+Display:wght@500&family=Poppins&family=Roboto:ital,wght@1,300&family=Rubik:wght@300;400&family=Saira&family=Unica+One&family=Varela&family=Varela+Round&display=swap');
section{
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 50px;
    width: 90%;
    position: relative;
    margin: 80px auto;
    .container{
        width: 40%;
        position: relative;
        z-index:2;
        .started{
            display: flex;
            align-items: center;
            gap: 20px;
            color: #fbd784;
              span{
                width: 70px;
                height: 2px;
                font-size: 32px;
                font-weight: 600;
                background-color: #fbd784;
            }
        }
        h2{
            font-family: 'Gilda Display';
            font-size: 50px;
            font-weight: 400;
            margin: 20px auto;
        }
        p{
            line-height: 30px;
            /* font-family: 'Bespoke Sans'; */
        }
         .number{
        position: absolute;
        top: -70px;
        left: -100px;
        color: rgb(37, 56, 61);
        font-size: 150px ;
        font-weight: 700;
        z-index: -1;
    }
     .readMore{
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 20px;
    }
    }
    img{
       width: 100%;
       max-width: 500px;
       height: auto;
    }
   
}
`