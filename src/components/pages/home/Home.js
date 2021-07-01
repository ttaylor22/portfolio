import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import AboutMe from './about-me/AboutMe';
import Contact from './contact/Contact';
import './Home.css'
import Projects from './projects/Projects';
import Skills from './skills/Skills';




const Home = ({path, setPath}) => {
    let sectionStyle = {
        minHeight: `${window.innerHeight}px`,
        padding: '80px 0px 0px 0px',
        width: '100%'
    }



    const validateSection = () => {
        const elems = document.querySelectorAll('div[id]')
        elems.forEach(elem => {
            const rect = elem.getBoundingClientRect()
            if (rect.top > 0 && rect.top < 150 || rect.top === 0 && elem.id === 'projects') {
                //window.history.replaceState(null, null, `#${elem.id}`);
                //if (history.location.hash !== `#${elem.id}`) {
                    setPath(`#${elem.id}`)
               //     history.push(`#${elem.id}`);
               // }
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

        <div className='main-container'>
            <div id="projects" style={sectionStyle} className="img">
                <div className="section">
                    <div className='container' style={{maxWidth: '900px'}}>
                    <div>

                        <h1 className="section-title">Tevin Taylor</h1>
                        <div style={{ textAlign: "center", fontSize: "xx-large", color: "white", fontWeight: "lighter" }}>Full Stack Developer</div>
                    </div>
                    <Projects />
                    {/* <div className='container'>
                            <div className='mini-title'>
                                Introduction
                        </div>
                            <div className='title'>
                                Full Stack Developer and Product Designer based in New York.
                        </div>
                            <div className='description'>
                                Just a simple man exploring new horizons and aim to craft extraordinary pieces of work.
                        </div>
                            <HashLink to="#about-me" scroll={(el) => el.scrollIntoView({ behavior: "smooth" })} className='nav-intro-links'>
                                My story
                        </HashLink>
                        </div> */}
                        </div>
                </div>
            </div>
            <div style={sectionStyle} className="section black-background">
                <div className='container'>
                    <div className='mini-title'>
                        Contact
                            </div>
                    <div className='title'>
                        Any Type of Question & Discussion.
                            </div>
                    <div className='description'>
                        Please feel free to contact me at my email or just send a message through the form.
                            </div>
                    <HashLink to="#contact" scroll={(el) => el.scrollIntoView({ behavior: "smooth" })} className='nav-intro-links'>
                        Message me
                             </HashLink>
                </div>


                <div className='container' >
                    <div className='title'>
                        Operate as a human behind the screen not as a robot inside one, then you will discover a true creative mind.
                            </div>
                    <div className='description'>
                        Please feel free to contact me at my email or just send a message through the form.
                            </div>

                </div>
            </div>

            {/* <div id="skills" style={sectionStyle} className="black-background"> */}
                <Skills path={path}/>
            {/* </div> */}

            <div id="about-me" style={sectionStyle} className="section black-background">
                <AboutMe />
            </div>

            
                <Contact />
            
        </div>

    )
}





const ProgressLoader = ({ title, percentage, timeInterval, isStatic, titleStyle, percentageStyle, progressStyle, progressContainerStyle }) => {
    const randID = Math.random().toString(36);

    const frameStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "5px"
    }

    progressStyle = progressStyle === undefined ? {
        height: "15px",
        borderRadius: "16px",
        background: "crimson",
    } : progressStyle

    progressContainerStyle = progressContainerStyle === undefined ? {
        borderRadius: "16px",
        background: "lightgrey",
        overflow: "auto"
    } : progressContainerStyle

    titleStyle = titleStyle === undefined ? {
        fontVariantCaps: "all-petite-caps",
        fontSize: "larger"
    } : titleStyle

    percentageStyle = percentageStyle === undefined ? {
        fontVariantCaps: "all-petite-caps",
        fontSize: "large"
    } : percentageStyle

    //Only for this site
    const history = useHistory();
    // const [myHash, setMyHash] = useState(history.location.hash)

    const move = (l) => {
        let i = 0;
        if (i === 0) {
            i = 1;
            var per = document.getElementsByClassName(`percentage-${randID}`)[0];
            var bar = document.getElementsByClassName(`bar-${randID}`)[0];
            bar.style.width = 0 + "%";
            per.innerHTML = 0 + "%";
            //Only for this site
            if (history.location.hash === "#skills") {
                
                var width = 1;
                const frame = () => {
                    if (width >= l) {
                        clearInterval(id);
                        i = 0;
                    } else {
                        width++;
                        bar.style.width = width + "%";
                        per.innerHTML = width + "%";
                    }
                }
                var id = setInterval(frame, timeInterval);
                
                
            }

        }
    }

    const dontMove = () => {
        var per = document.getElementsByClassName(`percentage-${randID}`)[0];
        var bar = document.getElementsByClassName(`bar-${randID}`)[0];
        bar.style.width = percentage + "%";
        per.innerHTML = percentage + "%";
    }


    useEffect(() => {

        isStatic === undefined ?
            move(percentage)
            : isStatic.toLowerCase() === "yes" ? dontMove() : move(percentage)

    }, [history.location.hash])


    return <div>
        <div style={frameStyle}>
            <div style={titleStyle}>
                {title}
            </div>
            <div style={percentageStyle} className={`percentage-${randID}`} />

        </div>
        <div style={progressContainerStyle} className={`progress-${randID}`}>
            <div style={progressStyle} className={`bar-${randID}`} />
        </div>
    </div>


}

export default Home;