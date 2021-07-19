import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import {
    Background, Header,
    Container,
    Title, Description
} from "../../../style/StyledComponent";
import ProgressLoader from "../../../tools/react-progress-loader";





export const Skills = ({ minHeight, path }) => {

    const [initial, setInitial] = useState(false)

    useEffect(() => {
        if (path === '#skills')
            setInitial(true)
    }, [path])

    return (
        <Background id="skills" minHeight={minHeight}>
            <AnimatePresence>
                {initial &&
                    <>
                        <div>
                            <Container as={motion.div}
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
                                <Header>Current toolset</Header>
                                <Title>
                                    My creative skills & expriences.
                                </Title>
                                <Description>
                                    As a developer, I came across many different tools. From design using Adobe XD to deploying instances to Amazon Elastic Compute Cloud (EC2). And the main enjoyment of ReactJS frontend capabilities and NodeJS with Express and Mongoose abilities to construct an API.
                                </Description>
                            </Container>

                            <Container as={motion.div}
                                initial={{
                                    y: 100,
                                    opacity: 0
                                }}
                                animate={{
                                    y: 0,
                                    opacity: 1,
                                    transition: {
                                        duration: 0.5,
                                        delay: 0.3
                                    }
                                }}
                                exit={{
                                    y: 100,
                                    opacity: 0
                                }}>
                                <ProgressLoader title="html" timeInterval={30} percentage={80} path={path} />
                                <ProgressLoader title="css" timeInterval={35} percentage={70} path={path} />
                                <ProgressLoader title="javascript" timeInterval={30} percentage={80} path={path} />
                                <ProgressLoader title="reactjs" timeInterval={30} percentage={80} path={path} />
                                <ProgressLoader title="sql" timeInterval={40} percentage={60} path={path} />
                                <ProgressLoader title="nodejs" timeInterval={35} percentage={70} path={path} />
                                <ProgressLoader title="java" timeInterval={30} percentage={80} path={path} />
                            </Container>
                        </div>

                        <div>
                            <Container as={motion.div}
                                initial={{
                                    y: 100,
                                    opacity: 0
                                }}
                                animate={{
                                    y: 0,
                                    opacity: 1,
                                    transition: {
                                        duration: 0.5,
                                        delay: 0.6
                                    }
                                }}
                                exit={{
                                    y: 100,
                                    opacity: 0
                                }}>
                                <Header>
                                    Looking for more projects and/or how to reach me?
                                </Header>
                            </Container>

                            <Container as={motion.div}
                                initial={{
                                    y: 100,
                                    opacity: 0
                                }}
                                animate={{
                                    y: 0,
                                    opacity: 1,
                                    transition: {
                                        duration: 0.5,
                                        delay: 0.9
                                    }
                                }}
                                exit={{
                                    y: 100,
                                    opacity: 0
                                }}>
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

                            <Container as={motion.div}
                                initial={{
                                    y: 100,
                                    opacity: 0
                                }}
                                animate={{
                                    y: 0,
                                    opacity: 1,
                                    transition: {
                                        duration: 0.5,
                                        delay: 1.2
                                    }
                                }}
                                exit={{
                                    y: 100,
                                    opacity: 0
                                }}>
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

                            <Container as={motion.div}
                                initial={{
                                    y: 100,
                                    opacity: 0
                                }}
                                animate={{
                                    y: 0,
                                    opacity: 1,
                                    transition: {
                                        duration: 0.5,
                                        delay: 1.5
                                    }
                                }}
                                exit={{
                                    y: 100,
                                    opacity: 0
                                }}>
                                <Header>
                                    Operate as a human behind the screen not as a robot inside one, then you will discover a true creative mind.
                                </Header>
                            </Container>
                        </div>

                    </>
                }
            </AnimatePresence>
        </Background>
    )
}

export default Skills