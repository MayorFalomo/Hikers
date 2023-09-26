import styled from "styled-components"

export const HeroStyle = styled.div`
section{
    border: 2px red solid;
    /* position: relative; */
    .sky{
        width: 100%;
        height: 100vh;
        object-fit: cover;
        height: 100vh;
        background-repeat: no-repeat;
        background-position: center ;
        background-size: cover;
        filter: brightness(100%);
        object-fit: cover;
        border: 2px red solid;
        position: relative;
        .overLay{
            background-color: rgba(0, 0, 0, 0.1);
            position: absolute;
            left: 0;
            top: 0;
            z-index: 1;
            width: 100%;
            height: 100vh;
        }
         h2{
            font-size: 70px;
            font-family: 'Gilda Display';
        }
        nav{
            position: relative;
            z-index: 9;
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 90%;
            margin: 0 auto;
            padding: 20px;
    /* border: 1px solid #000; */
    ul{
        display: flex;
        align-items: center;
        gap: 30px;
        font-size: 24px;
    }
    p{
        font-size: 24px;
        display: flex;
        align-items: center;
        gap: 20px;
        cursor: pointer;
    }
    .hover-underline-animation {
    display: inline-block;
    position: relative;
    color: #fff;
  }

  .hover-underline-animation:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: #fff;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  .hover-underline-animation:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
}
        .heroText{
             position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            z-index: 2;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            gap: 20px;
            /* border: 2px red solid; */
            width: 50%;
            height: 40vh;
            margin: 0 auto;
            p{
            color: #fbd784;
            display: flex;
            align-items: center;
            gap: 30px;
            font-family: 'Bespoke Sans';
            font-size: 32px;
            span{
                width: 100px;
                height: 3px;
                font-size: 32px;
                font-weight: 600;
                background-color: #fbd784;
            }
        }
        }
        h1{
            font-size: 120px;
            font-family: 'Gilda Display';
        }
        .socials{
            position: absolute;
            left: 0%;
            top: 50%;
            /* transform: translate(-50%, -50%); */
            transform: rotate(90deg);
            display: flex;
            align-items: center;
            gap: 30px;
            p{
                font-size: 24px;
                font-family: 'Roboto';
            }
        }
    }
}
`