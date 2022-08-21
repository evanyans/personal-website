import React from 'react'
import styled from 'styled-components'

const Contact = () => {
    return (
        <Wrapper id="contact">
            <Title>contact.</Title>
            <Description>Get in touch or contact me directly at <b>evanyans@gmail.com</b></Description>
            <Form>
                <div>
                    <label for="name" required>Your Name</label>
                    <input type="text" placeholder="Your Name" required/>
                </div>
                <div>
                    <label for="email">Email</label>
                    <input type="text" placeholder="you@company.com" required />
                </div>
                <div>
                    <label for="message">Message</label>
                    <textarea rows={11} placeholder="Enter your message here" required></textarea>
                    <input type="submit" value="Send Message" />
                </div>
            </Form>
        </Wrapper>
    )
}

export default Contact

export const Wrapper = styled.div`
    max-width:616px;
`

export const Title = styled.h2`
    margin-bottom:0;
`

export const Description = styled.p``

export const Form = styled.form`
    margin-top:50px;
    display:flex;
    flex-direction:column;
    gap:1rem;
    div{
        display:flex;
        flex-direction:column;
        gap:0.5rem;
    }
`