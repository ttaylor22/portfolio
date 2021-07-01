import React, { useRef, useState } from 'react';


const AboutMe = () => {



    return (
        <>
            <div style={{margin:"10px"}}>
                <h1 className="section-title">What to know about me</h1>
            </div>
            <div className="section">
                <div className="container">
                    <div className="description">
                        I was born in Manhattan and raised in Yonkers, NY. Being a developer is a tough but rewarding job. I was never actually looking to become a developer when I was young. I had an affiliation towards computers and no not the software side but hardware. Always liked tinkering with different gadgets after I came home from high school; Technical and Trades, and college for the past 5 years. Well until I had my first computer science course, which I got an A in. I hated it. What you thought, it was love at first sight? Lol no. I could say I had spent a share amount of time in and out of the library specifically for this course; sleepless nights. But after its completion, I realized how much I was kind of missing out. Like a part of me dissipated when it is over, so to cut the story short, here I am. Determine to work my way into becoming the best individual in this field using MERN (MongoDB, Express, ReactJS, NodeJS) stack. Oh and no I am not limited to learning other tools. One fact you will notice about me, I pour my soul into my craft; that is the inner perfectionist in me.
                    </div>
                </div>
                <div className="container">
                    <div>
                        Resume
                        <iframe src="/docs/Tevin Taylor's Resume.pdf" width="100%" height="515px">
    </iframe>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutMe;