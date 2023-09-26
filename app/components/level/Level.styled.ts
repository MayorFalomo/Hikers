import styled from 'styled-components'

export const LevelStyled = styled.div`
section{
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 50px;
    margin: 0 auto;
    width: 90%;
    position: relative;
    .container{
        /* border: 3px red solid; */
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