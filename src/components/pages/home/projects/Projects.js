import React from 'react';
import faker from 'faker';
import './Projects.css'

import styled from 'styled-components';
import { ImageSpan, ProjectIconLinkAuto, SkewIconLinkAuto, SkewLinksContainer } from '../../../style/StyledComponent';



const generate = () => {
    let projects = []
    var i;
    const project = {
        title: 'Trufro',
        subtitle: 'Trufro is a web platform, which provides a peer to peer connection between users for video and messaging purposes',
        link: 'https://trufro.com',
        images: [
            {
                image: 'images/trufro-1.jpg',
                paragraph: 'Build with:\n*MongoDB, ExpressJS, ReactJS, NodeJS \nDeployed on:\n*Amazon Elastic Compute Cloud (Amazon EC2)'
                ,
            },
            {
                image: 'images/trufro-2.jpg',
                paragraph: '*Create room using uuvid or custom address with or without an password.\n  *Provide access to join existing rooms.\n *Upon creating/joining a room provide a display name for other peers.\n *Host has access to remove peers from their room.',
            },
            {
                image: 'images/trufro-3.jpg',
                paragraph: '*Host has access to change password while room is running.\n *Grants communication amongst peers in room.\n *Ability to enable/disable audio and video amongst specific peer in a room.\n *Capable to test, and change audio and video devices through settings.\n *Auto migrates to new host, if host leaves room.',
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
    border-bottom: 1px solid rgb(0 0 0 / 50%);

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
                {paragraph}
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
                {paragraph}
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


    )
}

export const Projects = () => {
    const list = generate();
    list.sort((a, b) => {
        return a.date > b.date
    })
    return (<>
        {list.map((project, index) => {
            return <ProjectEx key={index} index={index + 1} project={project} />
        })}
    </>
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