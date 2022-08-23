import React from 'react'
import styled from 'styled-components'

const Contact = () => {
    return (
        <Wrapper id="contact">
            <Title>contact.</Title>
            <Description>Get in touch or contact me directly at <b>evanyans@gmail.com</b></Description>
            <Form method="POST" netlify-honeypot="bot-field" data-netlify="true" name="contact">
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="contact" value="contact" />
                <div>
                    <label for="name">Your Name</label>
                    <input type="text" name ="name" placeholder="Your Name" required/>
                </div>
                <div>
                    <label for="email">Email</label>
                    <input id="email" type="email" name="email" placeholder="you@company.com" required />
                </div>
                <div>
                    <label for="message">Message</label>
                    <textarea name="message" rows={11} placeholder="Enter your message here" required></textarea> 
                </div>
                <button type="submit">Send Message</button>
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