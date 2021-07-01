import React, { useEffect } from "react";
import {Link} from "react-router-dom";
import { 
    Background, Header,
    Section, Container,
    Title, Description
} from "../../../style/StyledComponent";
import ProgressLoader from "../../../tools/react-progress-loader";





export const Skills = ({path}) => {


    useEffect(() => {

    }, [])

    return (
        <Background id="skills">
            <Header>Current toolset</Header>
            <Section>
                <Container>
                    <Title>
                        My creative skills & expriences.
                    </Title>
                    <Description>
                        Please feel free to contact me at my email or just send a message through the form.
                    </Description>
                    <Link to='/contact' className='nav-link-cs'>
                        Read more
                    </Link>
                </Container>

                <Container>
                    <ProgressLoader title="html" timeInterval={30} percentage={80} path={path}/>
                    <ProgressLoader title="css" timeInterval={35} percentage={70} path={path}/>
                    <ProgressLoader title="javascript" timeInterval={30} percentage={80} path={path}/>
                    <ProgressLoader title="reactjs" timeInterval={30} percentage={80} path={path}/>
                    <ProgressLoader title="sql" timeInterval={40} percentage={60} path={path}/>
                    <ProgressLoader title="nodejs" timeInterval={40} percentage={60} path={path}/>
                    <ProgressLoader title="java" timeInterval={30} percentage={80} path={path}/>
                </Container>
            </Section>
        </Background>
    )
}

export default Skills