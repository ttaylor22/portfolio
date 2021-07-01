import React, { useCallback, useEffect, useState } from 'react';
import faker from 'faker';
import './Projects.css'
import { format } from 'date-fns';
import styled from 'styled-components';
import { IconLink, ImageSpan, ProjectIconLinkAuto, SkewIconLinkAuto, SkewLinksContainer } from '../../../style/StyledComponent';


const generate = () => {
    let fakeProjects = []
    var i;
    for (i = 0; i < 5; i++) {
        const fakeProject = {
            title: faker.company.companyName(),
            subtitle: faker.lorem.sentence(),
            images: [
                {
                    image: faker.random.image(),
                    paragraph: faker.lorem.sentences(),
                },
                {
                    image: faker.random.image(),
                    paragraph: faker.lorem.sentences(),
                },
                {
                    image: faker.random.image(),
                    paragraph: faker.lorem.sentences(),
                },
                {
                    image: faker.random.image(),
                    paragraph: faker.lorem.sentences(),
                }
            ],
            color: faker.vehicle.color(),
            date: faker.date.past()
        }
        fakeProjects.push(fakeProject)
    }
    return fakeProjects
}

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 50px 15px;
    border-bottom: 1px solid black;

`

const MiniContainer = styled.div`
    display: flex;
    flex-direction: ${props => props.flexDirection ? props.flexDirection : 'row'};
    justify-content: space-between;

    @media screen and (max-width: 500px) {
        flex-direction: column;
    }

`


const Description = styled.div`
    color: white;
    flex: 1;
    max-width: 450px;
    padding: 25px 0;
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

            {/* <div> */}
                <ProjectIconLinkAuto
                    firstTransform={handleTransform}
                    thirdTransform='translate(18%,13%)'
                    width="130px" height="250px" color='#1e1d1d'>
                    <span className='fas fa-mobile-alt'></span>
                    <span className='fas fa-mobile-alt'></span>
                    <ImageSpan backgroundImage={image} width="73%" height="56%" backgroundSize= "100% 100%"></ImageSpan>
                </ProjectIconLinkAuto>
            {/* </div> */}
           
        </MiniContainer>
        // <IconLink alignSelf={direction} fontSize='35vw' color='black'>
        //     <Icon className="fas fa-mobile-alt" >
        //         <span></span>
        //         <span></span>
        //         <Image backgroundImage={image} />
        //     </Icon>
        // </IconLink>


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

            {/* <div> */}
                <ProjectIconLinkAuto
                    firstTransform={handleTransform}
                    thirdTransform='translate(13%,15%)'
                    width="234px" height="250px" color='#1e1d1d'>
                    <span className='fas fa-desktop'></span>
                    <span className='fas fa-desktop'></span>
                    <ImageSpan backgroundImage={image} width="80%" height="50%" backgroundSize= "100% 100%"></ImageSpan>
                </ProjectIconLinkAuto>
            {/* </div> */}
            

        </MiniContainer>
        // <IconLink alignSelf={direction} fontSize='35vw' color='black'>
        //     <Icon className='fas fa-desktop'>
        //         <span></span>
        //         <span></span>
        //         <Image backgroundImage={image} />
        //     </Icon>

        // </IconLink>

    )

}


const ProjectEx = ({ index, project }) => {


    return (
        <MainContainer>
            {/* <LeftContainer alignItems='flex-start' > */}
            <SkewLinksContainer alignSelf='flex-start'>
                <SkewIconLinkAuto fontSize='50' color='white'>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span>{index}</span>
                </SkewIconLinkAuto>
            </SkewLinksContainer>
            {/* <Pagination>
                    <div>
                        {index}
                    </div>
                </Pagination> */}

            {/* <DescriptionContent>
                    Stuff is in this field
                </DescriptionContent> */}
            {/* </LeftContainer>
            <RightContainer > */}
            {project.images.map((image, index) => {
                if (index % 2 === 0)
                    return <DisplayImageDesktop key={index} paragraph={image.paragraph} direction='flex-end' image={image.image} />
                return <DisplayImagePhone key={index} paragraph={image.paragraph} direction='flex-start' image={image.image} />
            })}
            {/* </RightContainer> */}
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
            return <ProjectEx key={index} index={index} project={project} />
        })}
    </>
    )
}

const Project = ({ project }) => {
    const projectDate = new Date(project.date);

    const handleClick = () => {

    }
    return (

        <button onClick={handleClick} className="project-frame">
            <div style={{ backgroundColor: project.color }}>
                <div style={{ backgroundImage: `url(${project.img})` }} className="project-img">
                    <div className="project-title">
                        {project.title}
                    </div>
                    <div className="project-mini-title">
                        {format(projectDate.getDate(), 'MM/dd/yyyy')}
                    </div>
                </div>
            </div>

            <div className="project-text">
                <div>
                    {project.subtitle}
                </div>
            </div>
        </button>

    )

}






export default Projects;