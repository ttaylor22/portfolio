import React from "react";
import { 
    Background, Header,
    Container,
    Title, Description
} from "../../../style/StyledComponent";
import ProgressLoader from "../../../tools/react-progress-loader";





export const Skills = ({path}) => {



    return (
        <Background id="skills">
            <Header>Current toolset</Header>
            
                <Container>
                    <Title>
                        My creative skills & expriences.
                    </Title>
                    <Description>
                    As a developer, I came across many different tools. From design using Adobe XD to deploying instances to Amazon Elastic Compute Cloud (EC2). And the main enjoyment of ReactJS frontend capabilities and NodeJS with Express and Mongoose abilities to construct an API.   
                    </Description>
                </Container>

                <Container>
                    <ProgressLoader title="html" timeInterval={30} percentage={80} path={path}/>
                    <ProgressLoader title="css" timeInterval={35} percentage={70} path={path}/>
                    <ProgressLoader title="javascript" timeInterval={30} percentage={80} path={path}/>
                    <ProgressLoader title="reactjs" timeInterval={30} percentage={80} path={path}/>
                    <ProgressLoader title="sql" timeInterval={40} percentage={60} path={path}/>
                    <ProgressLoader title="nodejs" timeInterval={35} percentage={70} path={path}/>
                    <ProgressLoader title="java" timeInterval={30} percentage={80} path={path}/>
                </Container>
           
        </Background>
    )
}

export default Skills