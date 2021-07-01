import React, { useEffect, useState } from 'react';
import * as emailjs from 'emailjs-com'
import { Button, Form, FormGroup, FormLabel, FormControl } from 'react-bootstrap'
import './Contact.css'
import { Background, Container, Header, IconLink, LinksContainer, Section, SkewIconLink, SkewLinksContainer, Title } from '../../../style/StyledComponent';



export const Contact = () => {
    const receiver = 'Tevin Taylor'

    const [validated, setValidated] = useState(false);
    const [contactForm, setContactForm] = useState({
        obj: {
            name: '',
            email: '',
            subject: '',
            message: ''
        },
        errors: []
    });
    const [returnResult, setReturnResult] = useState(null)

    const errorsMsg = {
        email: "Missing or invalid email",
        name: "Missing name or not greater than 2 characters",
        subject: "Missing subject or not greater than 2 characters",
        message: "Missing message or not greater than 4 characters"
    }

    const hasError = (key) => {
        return contactForm.errors.indexOf(key)
    }

    const validate = (param, value) => {
        value = value.trim()
        let errors = [...contactForm.errors];
        const index = hasError(param)
        //Email
        if (param === "email") {
            const emailExp = /\S+@\S+/;
            const validEmail = emailExp.test(value.toLowerCase())

            if (!validEmail) {
                if (index === -1)
                    errors.push("email");
            } else if (index > -1) {
                errors.splice(index, 1);
            }
        }
        //Name
        else if (param === "name") {
            if (value === "" || value.length <= 2) {
                if (index === -1)
                    errors.push("name");
            } else if (index > -1) {
                errors.splice(index, 1);
            }
        }
        //Subject
        else if (param === "subject") {
            if (value === "" || value.length <= 2) {
                if (index === -1)
                    errors.push("subject");
            } else if (index > -1) {
                errors.splice(index, 1);
            }
        }
        //Message
        else if (param === "message") {
            if (value === "" || value.length <= 4) {
                if (index === -1)
                    errors.push("message");
            } else if (index > -1) {
                errors.splice(index, 1);
            }
        }


        return errors;

    }

    const handleSubmit = (e) => {

        const form = e.currentTarget;
        if (form.checkValidity() === false) {

            setValidated(true);
        } else {
            let templateParams = {
                from_name: contactForm.obj.name,
                to_name: receiver,
                subject: contactForm.obj.subject,
                message: contactForm.obj.message,
                reply_to: contactForm.obj.email
            }

            emailjs.send(
                'service_ey4wpjc',
                'template_0cap7w4',
                templateParams,
                'user_hs0ijgMawKYkfbq8aN3Fu'
            ).then((result) => {
                if (result.text === "OK") {
                    setReturnResult(<div className="status" style={{ textAlign: "center", color: "green" }}>Message Send!</div>);
                } else {
                    setReturnResult(<div className="status" style={{ textAlign: "center", color: "green" }}>{result.text}</div>);
                }
            }, (error) => {
                setReturnResult(<div className="status" style={{ textAlign: "center", color: "red" }}>{error.text}</div>);
            });
            resetForm()
        }

        e.preventDefault();
        e.stopPropagation();



    }

    const resetForm = () => {
        setContactForm({
            obj: {
                name: '',
                email: '',
                subject: '',
                message: ''
            },
            errors: []
        })
        setValidated(false);
    }

    const handleChange = (param, e) => {
        const errors = validate(param, e.target.value)
        let obj = { ...contactForm.obj }
        obj[param] = e.target.value
        setContactForm({
            obj,
            errors: errors
        })
        setValidated(false)
    }


    const fadeOutTimer = () => {
        const setRem = () => {
            setReturnResult(null)
        }
        var elem = document.getElementsByClassName("status")[0];
        elem.classList.add("hide");
        setTimeout(setRem, 5000);
    }


    useEffect(() => {
        if (returnResult != null) {
            fadeOutTimer()
        }
    })

    return (

        <Background id="contact">
            <Header>Get in Touch</Header>
            <Section>
                <Container textAlign='center'>
                    <Title>
                        Send me a message and I'll get back in touch shortly.
                    </Title>
                </Container>

                <Container>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <FormGroup>
                            <FormLabel className="text-muted">Email address</FormLabel>
                            <FormControl
                                required
                                type="email"
                                name="email"
                                value={contactForm.obj.email}
                                onChange={(e) => handleChange('email', e)}
                                placeholder="Email"
                                isInvalid={hasError("email") !== -1}
                            />
                            <FormControl.Feedback type="invalid">
                                {errorsMsg.email}
                            </FormControl.Feedback>
                        </FormGroup>
                        <FormGroup>
                            <FormLabel className="text-muted">Name</FormLabel>
                            <FormControl
                                required
                                type="text"
                                name="name"
                                value={contactForm.obj.name}
                                onChange={(e) => handleChange('name', e)}
                                placeholder="Name"
                                isInvalid={hasError("name") !== -1}
                            />
                            <FormControl.Feedback type="invalid">
                                {errorsMsg.name}
                            </FormControl.Feedback>
                        </FormGroup>
                        <FormGroup>
                            <FormLabel className="text-muted">Subject</FormLabel>
                            <FormControl
                                required
                                type="text"
                                name="subject"
                                value={contactForm.obj.subject}
                                onChange={(e) => handleChange('subject', e)}
                                placeholder="Subject"
                                isInvalid={hasError("subject") !== -1}
                            />
                            <FormControl.Feedback type="invalid">
                                {errorsMsg.subject}
                            </FormControl.Feedback>
                        </FormGroup>
                        <FormGroup>
                            <FormLabel className="text-muted">Message</FormLabel>
                            <FormControl
                                required
                                type="textarea"
                                name="message"
                                value={contactForm.obj.message}
                                onChange={(e) => handleChange('message', e)}
                                placeholder="Message"
                                isInvalid={hasError("message") !== -1}
                            />
                            <FormControl.Feedback type="invalid">
                                {errorsMsg.message}
                            </FormControl.Feedback>
                        </FormGroup>
                        {returnResult}
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>

                    </Form>
                </Container>
                <Container>
                    <SkewLinksContainer>
                        <SkewIconLink fontSize={50} color='blue' target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/tevin-taylor-a5ba1bbb/'>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span className='fab fa-linkedin' />
                        </SkewIconLink>
                        <SkewIconLink fontSize={50} color='black' target="_blank" rel="noreferrer" href='https://github.com/ttaylor22'>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span className='fab fa-github' />
                        </SkewIconLink>
                    </SkewLinksContainer>
                </Container>
            </Section>
        </Background>
    )
}

export default Contact