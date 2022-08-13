import React from 'react'
import styled from 'styled-components'
import image from '../assets/images/image.webp'


const Paragraph = styled.p`
 font-size: '16px';
 line-height: 1.5;
 color: white;
 maargin-top: 2px;
`
const Title = styled.h4`
 font-size: 30px;
 line-height: 1.2;
 color: white;
 margin:20px 0px;
 margin-top:50px;

`
const Span = styled.span`
background: red;
border-radius: 4px;
box-shadow: 0px 1px 4px black;
font-size:10px;
font-weight: 300;
padding:3px;
`
const Img = styled.img`
color:white;
margin:20px 0px;
`
const Section = styled.div`
background: #0b93d7;
display: flex;
justify-content: space-between;
padding: 30px;
margin-top: 70px;
`
const Input = styled.input`
height: 100%;
width: 70%;
padding: 7px;
padding-left: 20px;
font-size: 15px;
 border: none;
 margin-right: 10px;
 border-radius: 5px;
`
const Button = styled.button`
width:25%;
background: #057FD2;
color: white;
height: 100%;
border: none;
border-radius:5px;
font-weight: 400;
`
const Div = styled.div`
box-sizing: border-box;
height:60px;

`

const Footer = () => {
    return (
        <>
            <Section>
                <div>
                    <Img alt='clouddley' src={image} />
                    <Paragraph>Clouddley is the next-generation<br /> cloud platform built by developers<br />
                        for developers, Indie Hackers, and  <br /> startups.</Paragraph>
                </div>
                <div>
                    <Title>Company</Title>
                    <Paragraph >
                        Our features
                    </Paragraph >
                    <Paragraph style={{ lineHeight: '4' }}>
                        Pricing <Span>Coming soon</Span>
                    </Paragraph>
                </div>
                <div>
                    <Title>Join our newsletter</Title>
                    <Div>
                        <Input type='email' placeholder='Please enter your email address' />
                        <Button>Subscribe</Button>
                    </Div>
                    <Paragraph style={{ marginTop: '20px' }}>Subscribe to our newsletter and stay up to date with cloud trends.</Paragraph>

                </div>
            </Section>
            <Paragraph style={{ textAlign: 'center', background: '#0b93d7', padding: '30px' }}>2022 All rights reserved    |    help@clouddley.com</Paragraph>
        </>

    )
}

export default Footer