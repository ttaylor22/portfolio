import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Background, Container, Description, Header, Title } from '../../style/StyledComponent';
import AboutMe from './about-me/AboutMe';
import Contact from './contact/Contact';
import './Home.css'
import Projects from './projects/Projects';
import Skills from './skills/Skills';




const Home = ({ path, setPath }) => {




    const validateSection = () => {
        const elems = document.querySelectorAll('div[id]')
        elems.forEach(elem => {
            const rect = elem.getBoundingClientRect()
            if ((rect.top > 0 && rect.top < 150) || (rect.top === 0 && elem.id === 'projects')) {
                setPath(`#${elem.id}`)   
            }
        })
    }



    useEffect(() => {
        validateSection()

        window.addEventListener("scroll", validateSection)
        return () => {
            window.removeEventListener("scroll", validateSection)

        }
    }, []);

    return (

        <div style={{ color: 'white' }}>
            <Background id="projects" image="enabled">
                <Container style={{ maxWidth: '900px' }}>

                    <Header>Tevin Taylor</Header>
                    <div style={{ textAlign: 'center', fontSize: "xx-large", fontWeight: "lighter" }}>Full Stack Developer</div>

                    <Projects />
                </Container>
            </Background>
            <Background>

                <Container>
                    <Header>
                        Looking for more projects and/or how to reach me?
                    </Header>
                </Container>

                <Container>
                    <Title>
                        Other projects
                    </Title>
                    <Description>
                        Please visit my github and take a look at other work of mine. If interested in seeing my private respositories, please send me email for an request. 
                    </Description>
                    <a href='https://github.com/ttaylor22' className='nav-intro-links'>
                        Github
                    </a>
                </Container>
                
                <Container>
                    <Title>
                        Contact
                    </Title>
                    <Description>
                        Please feel free to contact me at my email or just send a message through the form.
                    </Description>
                    <HashLink to="#contact" scroll={(el) => el.scrollIntoView({ behavior: "smooth" })} className='nav-intro-links'>
                        Message me
                    </HashLink>
                </Container>


                <Container>
                    <Header>
                        Operate as a human behind the screen not as a robot inside one, then you will discover a true creative mind.
                    </Header>
                </Container>
            </Background>

            <Skills path={path} />

            <AboutMe />

            <Contact />
        </div>

    )
}





// const ProgressLoader = ({ title, percentage, timeInterval, isStatic, titleStyle, percentageStyle, progressStyle, progressContainerStyle }) => {
//     const randID = Math.random().toString(36);

//     const frameStyle = {
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         padding: "5px"
//     }

//     progressStyle = progressStyle === undefined ? {
//         height: "15px",
//         borderRadius: "16px",
//         background: "crimson",
//     } : progressStyle

//     progressContainerStyle = progressContainerStyle === undefined ? {
//         borderRadius: "16px",
//         background: "lightgrey",
//         overflow: "auto"
//     } : progressContainerStyle

//     titleStyle = titleStyle === undefined ? {
//         fontVariantCaps: "all-petite-caps",
//         fontSize: "larger"
//     } : titleStyle

//     percentageStyle = percentageStyle === undefined ? {
//         fontVariantCaps: "all-petite-caps",
//         fontSize: "large"
//     } : percentageStyle

//     //Only for this site
//     const history = useHistory();
//     // const [myHash, setMyHash] = useState(history.location.hash)

//     const move = (l) => {
//         let i = 0;
//         if (i === 0) {
//             i = 1;
//             var per = document.getElementsByClassName(`percentage-${randID}`)[0];
//             var bar = document.getElementsByClassName(`bar-${randID}`)[0];
//             bar.style.width = 0 + "%";
//             per.innerHTML = 0 + "%";
//             //Only for this site
//             if (history.location.hash === "#skills") {

//                 var width = 1;
//                 const frame = () => {
//                     if (width >= l) {
//                         clearInterval(id);
//                         i = 0;
//                     } else {
//                         width++;
//                         bar.style.width = width + "%";
//                         per.innerHTML = width + "%";
//                     }
//                 }
//                 var id = setInterval(frame, timeInterval);


//             }

//         }
//     }

//     const dontMove = () => {
//         var per = document.getElementsByClassName(`percentage-${randID}`)[0];
//         var bar = document.getElementsByClassName(`bar-${randID}`)[0];
//         bar.style.width = percentage + "%";
//         per.innerHTML = percentage + "%";
//     }


//     useEffect(() => {

//         isStatic === undefined ?
//             move(percentage)
//             : isStatic.toLowerCase() === "yes" ? dontMove() : move(percentage)

//     }, [history.location.hash])


//     return <div>
//         <div style={frameStyle}>
//             <div style={titleStyle}>
//                 {title}
//             </div>
//             <div style={percentageStyle} className={`percentage-${randID}`} />

//         </div>
//         <div style={progressContainerStyle} className={`progress-${randID}`}>
//             <div style={progressStyle} className={`bar-${randID}`} />
//         </div>
//     </div>


// }

export default Home;