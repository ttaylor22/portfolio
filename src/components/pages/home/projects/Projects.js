import React, { useEffect, useState } from 'react';
import faker from 'faker';
import './Projects.css'

import styled from 'styled-components';
import { Container, Background, Header, ImageSpan, ProjectIconLinkAuto, SkewIconLinkAuto, SkewLinksContainer } from '../../../style/StyledComponent';
import { AnimatePresence, motion } from 'framer-motion';




const generate = () => {
    let projects = []

    const project = {
        title: 'Trufro',
        subtitle: 'Trufro is a web platform, which provides a peer to peer connection between users for video and messaging purposes',
        link: 'https://trufro.com',
        images: [
            {
                image: `${process.env.PUBLIC_URL}/images/trufro-1.jpg`,
                paragraph: `
                <h3>Application stack:</h3> 
                <ul>
                <li>MongoDB</li>
                <li>ExpressJS</li> 
                <li>ReactJS</li> 
                <li>NodeJS</li> 
                </ul>
                <h3>Deployment Server:</h3>
                <ul>
                <li>Amazon Elastic Compute Cloud (Amazon EC2)</li>
                </ul>
                `
                ,
            },
            {
                image: `${process.env.PUBLIC_URL}/images/trufro-2.jpg`,
                paragraph: `
                <ul>
                <li>Create room using uuvid or use own custom address</li>
                <li>Add password to room for security</li>
                <li>Able to join existing rooms</li>
                <li>Add display name for other peers in joined rooms</li>
                </ul>
                `,
            },
            {
                image: `${process.env.PUBLIC_URL}/images/trufro-3.jpg`,
                paragraph: `
                <ul>
                <li>As host, access to remove peers from their room</li>
                <li>As host, access to change password while in generated room.</li>
                <li>Grants communication amongst peers in room</li>
                <li>Able to message other peers through the chat window. Equipped with newly added emojis</li>
                <li>Able to enable/disable audio and video functionalities</li>
                <li>Capable to test, change audio and video devices through settings</li>
                <li>Auto migrates to new host, if host leaves room</li>
                </ul>
                `,
            }
        ],
        color: faker.vehicle.color(),
        date: faker.date.past()
    }
    projects.push(project)
    // for (i = 0; i < 5; i++) {
    //     const fakeProject = {
    //         title: faker.company.companyName(),
    //         subtitle: faker.lorem.sentence(),
    //         link: null,
    //         images: [
    //             {
    //                 image: faker.random.image(),
    //                 paragraph: faker.lorem.sentences(),
    //             },
    //             {
    //                 image: faker.random.image(),
    //                 paragraph: faker.lorem.sentences(),
    //             },
    //             {
    //                 image: faker.random.image(),
    //                 paragraph: faker.lorem.sentences(),
    //             },
    //             {
    //                 image: faker.random.image(),
    //                 paragraph: faker.lorem.sentences(),
    //             }
    //         ],
    //         color: faker.vehicle.color(),
    //         date: faker.date.past()
    //     }
    //     projects.push(fakeProject)
    // }
    return projects
}

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 50px 15px 0 15px; 
    

`

const MiniContainer = styled.div`
    display: flex;
    flex-direction: ${props => props.flexDirection ? props.flexDirection : 'row'};
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 500px) {
        flex-direction: column;
    }

`


const Description = styled.div`
    color: white;
    flex: 1;
    max-width: 450px;
    padding: 25px 0;
    white-space: pre-line;
`

const DisplayImagePhone = ({ direction, image, paragraph }) => {

    const handleTransform = () => {
        if (direction === 'flex-start') {
            return 'translate(5%,3%)'
        }
        return 'translate(-5%,3%)'
    }

    return (
        <MiniContainer flexDirection='row-reverse'>
            <Description>
                <div dangerouslySetInnerHTML={{ __html: paragraph }} />
            </Description>

            <ProjectIconLinkAuto
                firstTransform={handleTransform}
                thirdTransform='translate(18%,13%)'
                width="130px" height="250px" color='#1e1d1d'>
                <span className='fas fa-mobile-alt'></span>
                <span className='fas fa-mobile-alt'></span>
                <ImageSpan backgroundImage={image} width="73%" height="56%" backgroundSize="100% 100%"></ImageSpan>
            </ProjectIconLinkAuto>


        </MiniContainer>



    )

}

const DisplayImageDesktop = ({ direction, image, paragraph }) => {

    const handleTransform = () => {
        if (direction === 'flex-start') {
            return 'translate(5%,3%)'
        }
        return 'translate(-5%,3%)'
    }

    return (
        <MiniContainer>

            <Description>
                <div dangerouslySetInnerHTML={{ __html: paragraph }} />
            </Description>


            <ProjectIconLinkAuto
                firstTransform={handleTransform}
                thirdTransform='translate(13%,15%)'
                width="234px" height="208px" color='#1e1d1d'>
                <span className='fas fa-desktop'></span>
                <span className='fas fa-desktop'></span>
                <ImageSpan backgroundImage={image} width="80%" height="60%" backgroundSize="100% 100%"></ImageSpan>
            </ProjectIconLinkAuto>



        </MiniContainer>


    )

}

const ProjectHeaderContainer = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
padding: 0 20px 0 0;
`
const ProjectTitle = styled.div`
font-weight: 700;
`

const ProjectLink = styled.a`
font-weight: 700;
`

const ProjectEx = ({ index, project }) => {


    return (
        <Container width='900px' as={motion.div}
            initial={{
                y: 100,
                opacity: 0
            }}
            animate={{
                y: 0,
                opacity: 1,
                transition: {
                    duration: 0.5,
                    delay: 0.3 * index
                }
            }}
            exit={{
                y: 100,
                opacity: 0
            }}>
            <MainContainer>

                <SkewLinksContainer alignSelf='flex-start'>
                    <SkewIconLinkAuto fontSize='50' color='white'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span>{index}</span>
                    </SkewIconLinkAuto>
                </SkewLinksContainer>

                <ProjectHeaderContainer>
                    <ProjectTitle>
                        {project.title}
                    </ProjectTitle>

                    {project.link &&
                        <ProjectLink href={project.link} target="_blank">
                            {project.link}
                        </ProjectLink>
                    }

                </ProjectHeaderContainer>
                {project.images.map((image, index) => {
                    if (index % 2 === 0)
                        return <DisplayImageDesktop key={index} paragraph={image.paragraph} direction='flex-end' image={image.image} />
                    return <DisplayImagePhone key={index} paragraph={image.paragraph} direction='flex-start' image={image.image} />
                })}

            </MainContainer>
        </Container>

    )
}

export const Projects = ({ minHeight, path }) => {
    const [initial, setInitial] = useState(false)

    useEffect(() => {
        if (path === '#projects')
            setInitial(true)
    }, [path])

    const list = generate();
    list.sort((a, b) => {
        return a.date > b.date
    })
    return (
        <Background id="projects" minHeight={minHeight} image="enabled">
            <AnimatePresence>
                {initial &&
                    <div>
                        <Container width="100%" as={motion.div}
                            initial={{
                                y: 100,
                                opacity: 0
                            }}
                            animate={{
                                y: 0,
                                opacity: 1,
                                transition: {
                                    duration: 0.5
                                }
                            }}
                            exit={{
                                y: 100,
                                opacity: 0
                            }}>
                            <Header>Tevin Taylor</Header>
                            <div style={{ textAlign: 'center', fontSize: "xx-large", fontWeight: "lighter" }}>Full Stack Developer</div>
                        </Container>

                        {list.map((project, index) => {
                            return <ProjectEx key={index} index={index + 1} project={project} />
                        })}
                    </div>
                }
            </AnimatePresence>
        </Background>

    )
}

// const Project = ({ project }) => {
//     const projectDate = new Date(project.date);

//     const handleClick = () => {

//     }
//     return (

//         <button onClick={handleClick} className="project-frame">
//             <div style={{ backgroundColor: project.color }}>
//                 <div style={{ backgroundImage: `url(${project.img})` }} className="project-img">
//                     <div className="project-title">
//                         {project.title}
//                     </div>
//                     <div className="project-mini-title">
//                         {format(projectDate.getDate(), 'MM/dd/yyyy')}
//                     </div>
//                 </div>
//             </div>

//             <div className="project-text">
//                 <div>
//                     {project.subtitle}
//                 </div>
//             </div>
//         </button>

//     )

// }






export default Projects;