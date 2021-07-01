import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../Button';
import { projects } from '../../../data/projects';
import './Portfolio.css'

const Portfolio = () => {

    return (
        <>
        <div>Welcome to my Portfolio</div>
            {projects.forEach((project, index) => {
                <ProjectCard key={index} project={project} />
            })}
        </>
    );
}


const ProjectCard = ({ project }) => {
    return (
        <div
            className={project.lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}
        >
            <div className='container'>
                <div
                    className='row home__hero-row'
                    style={{
                        display: 'flex',
                        flexDirection: project.imgStart === 'start' ? 'row-reverse' : 'row'
                    }}
                >
                    <div className='col'>
                        <div className='home__hero-text-wrapper'>
                            <div className='top-line'>{project.topLine}</div>
                            <h1 className={project.lightText ? 'heading' : 'heading dark'}>
                                {project.headline}
                            </h1>
                            <p
                                className={
                                    project.lightTextDesc
                                        ? 'home__hero-subtitle'
                                        : 'home__hero-subtitle dark'
                                }
                            >
                                {project.description}
                            </p>
                            <Link to='/sign-up'>
                                <Button buttonSize='btn--wide' buttonColor='blue'>
                                    {project.buttonLabel}
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='home__hero-img-wrapper'>
                            <img src={project.img} alt={project.alt} className='home__hero-img' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;