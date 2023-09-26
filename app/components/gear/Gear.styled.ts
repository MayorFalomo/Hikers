import styled from 'styled-components'

export const GearStyled = styled.div`
section{
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 50px;
    width: 90%;
    margin: 80px auto;
    .container{
        position: relative;
        z-index:2;
        width: 40%;
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