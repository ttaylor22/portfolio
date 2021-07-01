import styled, { keyframes } from "styled-components";

export const Background = styled.div`
    background: black;
    padding: 5%;
    width: 100%;
`

export const Header = styled.h1`
    text-align: center;
    font-feature-settings: "pcap", "c2pc";
    font-variant-caps: all-petite-caps;
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
    font-size: 2.5rem;
`

export const Section = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
`

export const Container = styled.div`
    max-width: 500px;
    padding: 50px 30px;
    width: 100%;
    text-align: ${props => props.textAlign ? props.textAlign : 'none'};

    .nav-link-cs {
        color: #f00946;
    }
`

export const Title = styled.div`
    font-size: medium;
    color: grey;
    font-feature-settings: "pcap", "c2pc";
    font-variant-caps: all-petite-caps;
`

export const Description = styled.div`
    font-size: medium;
`

export const LinksContainer = styled.div`
    display: flex;
    justify-content: space-around;
`

export const SkewLinksContainer = styled.div`
    position: relative;    
    display: flex;
    justify-content: space-evenly;
    align-self: ${props => props.alignSelf ? props.alignSelf : 'none'};
    transform-style: preserve-3d;
    transform: rotate(-25deg) skew(25deg);
`

export const IconLink = styled.a`
    font-size: ${props => props.fontSize ? props.fontSize : '50px'};
    color: ${props => props.color ? props.color : 'blue'};
    position: relative;
    align-self: ${props => props.alignSelf ? props.alignSelf : 'auto'};
    `

export const SkewIconLink = styled.a`

    position: relative;
    width: ${props => props.fontSize ? `${props.fontSize}px` : '50px'};
    height: ${props => props.fontSize ? `${props.fontSize}px` : '50px'};
    
    span {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #303030;
        font-size: ${props => props.fontSize ? `${props.fontSize - 20}px` : '40px'};
        background: #201d1de6;
    }
    

    :hover span {
        z-index: 1000;
        transition: 0.5s;
        color: ${props => props.color ? props.color : 'blue'};
        background: #2a2727e6;
        box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.05);   
    }

    :hover span:nth-child(1) {
        transform: translate(10%, -10%);
        opacity: 0.2;
    }

    :hover span:nth-child(2) {
        transform: translate(20%, -20%);
        opacity: 0.4;
    }

    :hover span:nth-child(3) {
        transform: translate(30%, -30%);
        opacity: 0.6;
    }

    :hover span:nth-child(4) {
        transform: translate(40%, -40%);
        opacity: 0.8;
    }

    :hover span:nth-child(5) {
        transform: translate(50%, -50%);
        opacity: 1;
    }
    `
const hovering = keyframes`
    from {
        opacity: 1;
        transform: translate(0%, 0%);
    }

    to {
        opacity: 0.2;
        transform: translate(10%, -10%);
    }

`

export const SkewIconLinkAuto = styled.div`

    position: relative;
    width: ${props => props.fontSize ? `${props.fontSize}px` : '50px'};
    height: ${props => props.fontSize ? `${props.fontSize}px` : '50px'};

    span {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        color: ${props => props.color ? props.color : 'blue'};
        background: #2a2727e6;
        box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.05);   
        animation: ${hovering} 5s linear infinite;
        
    }

    span:nth-child(1) {
        animation-delay: 0.5s;
        top: -10%;
        left: 10%;
        
        
    }

    span:nth-child(2) {
        animation-delay: 0.4s;
        top: -20%;
        left: 20%;
        
    }

    span:nth-child(3) {
        animation-delay: 0.3s;
        top: -30%;
        left: 30%;
        
    }

    span:nth-child(4) {
        animation-delay: 0.2s;
        top: -40%;
        left: 40%;
        
    }

    span:nth-child(5) {
        animation-delay: 0.1s;
        top: -50%;
        left: 50%;
        
    }
    

    
    `

    // const float = keyframes`

    // `

export const ProjectIconLinkAuto = styled.div`

    position: relative;
    width: ${props => props.width ? `${props.width}` : '250px'};
    height: ${props => props.height ? `${props.height}` : '250px'};
    margin: 0 20px;
    
    span {
        position: absolute;
        font-size: 1300%;
        top: 0;
        left: 0;
        display: flex;
        z-index: 1;
        color: ${props => props.color ? props.color : 'blue'};
        
    }

    span:nth-child(1) {
        transform: ${props => props.firstTransform ? props.firstTransform : 'translate(5%,3%)'};
        opacity: 0.2
        
        
    }

    span:nth-child(2) {
        transform: translate(0%, 0%);
        
        
        
    }

    span:nth-child(3) {
        transform: ${props => props.thirdTransform ? props.thirdTransform : 'translate(11%,14%)'};
        
        
    }
    
    @media only screen and (max-width: 500px) {
        margin: auto
    }
    `

export const ImageSpan = styled.span`
    background: ${props => props.backgroundImage ? `url(${props.backgroundImage})` : 'none'} no-repeat;
    background-size: ${props => props.backgroundSize ? props.backgroundSize : '100%'};
    width: ${props => props.width ? props.width: '100%'};
    height: ${props => props.height ? props.height: '100%'};
    `