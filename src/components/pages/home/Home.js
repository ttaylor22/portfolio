import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AboutMe from './about-me/AboutMe';
import Contact from './contact/Contact';
import './Home.css'
import Projects from './projects/Projects';
import Skills from './skills/Skills';




const Home = () => {
    const history = useHistory()
    const [path, setPath] = useState(history.location.hash)
    const [minHeight, setMinHeight] = useState(`${window.innerHeight}px`)


    const handleResize = () => {
        setMinHeight(`${window.innerHeight}px`)
    }

    const validateSection = useCallback(() => {
        const elems = document.querySelectorAll('div[id]')
        elems.forEach(elem => {
            const rect = elem.getBoundingClientRect()
            if (
                rect.top >= 0 &&
                rect.top <= 150
                // rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
            ) {
                setPath(`#${elem.id}`)
                history.replace(`#${elem.id}`)
            }
        })
      
    }, [setPath, history])

    // const validateSection1 = useCallback(() => {
    //     const elems = document.querySelectorAll('div[id]')
    //     elems.forEach(elem => {
    //         const rect = elem.getBoundingClientRect()
    //         if ((rect.top > 0 && rect.top < 150) || (rect.top === 0 && elem.id === 'projects')) {
    //             setPath(`#${elem.id}`)
    //         }
    //     })
    // }, [setPath])



    useEffect(() => {
        validateSection()
        window.addEventListener('resize', handleResize)
        window.addEventListener("scroll", validateSection)
        return () => {
            window.removeEventListener('resize', handleResize)
            window.removeEventListener("scroll", validateSection)

        }
    }, [validateSection]);

    return (

        <>
            <Projects minHeight={minHeight} path={path} />

            <Skills minHeight={minHeight} path={path} />

            <AboutMe minHeight={minHeight} path={path} />

            <Contact minHeight={minHeight} path={path} />
        </>

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