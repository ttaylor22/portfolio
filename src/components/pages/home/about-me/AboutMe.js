import React from 'react';
import { Background, Container, Description, Header } from '../../../style/StyledComponent';


const AboutMe = () => {



    return (
        <Background id="about-me">
            <Container>
                <Header>What to know about me</Header>
            </Container>
            <Container>
                <Description>
                    Born in Manhattan and raised in Yonkers, NY.  Actually was not looking to become a developer at a young age. Since I had affiliation towards the hardware of computers. To tinker with different gadgets after I came home from high school; Technical and Trades, and college for the past 5 years. Well until I had my first computer science course, in which I aced. I hated it. What you thought, it was love at first sight? Lol no. Spent a share amount of time in and out of the library specifically for this course; sleepless nights. But after its completion, realized how much I was missing out on. Like a part of me dissipated when it is over, so to cut the story short, here I am. Determine to work my way into becoming the best developer in this field. At least, with the MERN (MongoDB, Express, ReactJS, NodeJS) stack. Oh and no I am not limited to learning other tools. One fact you will notice about me, I pour my soul into my craft; that is the inner perfectionist in me.
                </Description>
            </Container>
            <Container>
                Resume
                <iframe src={`${process.env.PUBLIC_URL}/docs/Tevin Taylor's Resume.pdf`} width="100%" height="515px">
                </iframe>
            </Container>


        </Background>
    );
}

export default AboutMe;