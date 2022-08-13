import React from 'react'
import image2 from '../assets/images/image2.webp'
import styled from 'styled-components'

const Title = styled.h1`
 font-size: 38px;
 line-height: 1.2;
 color: #303030
`

const Section = styled.section`
display: flex;
padding:30px;
background: rgb(226,236,241);
justify-content:space-between;
`
const Input = styled.input`
height: 100%;
width: 70%;
padding: 7px;
padding-left: 20px;
font-size: 15px;
 border: 1px solid lightgray;
 margin-right: 10px;
 border-radius: 5px;
 &:focus {
    outline: none;
 }
`
const Button = styled.button`
width:25%;
background: #057FD2;
color: white;
height: 100%;
border: none;
border-radius:5px;
font-weight: 400;
font-size: 15px;
`
const Div = styled.div`
box-sizing: border-box;
height:60px;
`
const Section2 = styled.div`
background: #0b93d7;
width:100%;
height: 163px;
position:absolute;
top: 830px;
transform: skewY(4.3deg)
`

const Landing = () => {
    return (
        <>
        <Section>
            <div style={{ paddingTop: '110px' }}>
                <Title>Deploy to any <span style={{ color: '#bc2e80' }}>cloud provider</span> <br /> from our dashboard. No hassle!</Title>
                <p style={{ fontSize: '16px', lineHeight: 1.5, color: '#2c2c2c', margin: '32px 0px' }}>At Clouddley, we are building the next generation of Cloud Platforms.<br />
                    We are doubling down on making fast, reliable, and easy Cloud Provider <br /> features for our customer's software and infrastructure.
                    Our product <br /> allows developers and Startup companies to deploy to any cloud <br /> provider from our dashboard in seconds.
                </p>
                <h3 style={{ color: '#bc2e80', marginBottom: '10px' }}>Get Notified when we launch.</h3>
                <Div>
                    <Input type='email' placeholder='Please enter your email address' />
                    <Button>Get Notified</Button>
                </Div>
            </div>
            <div style={{ padding: '80px', boxSizing: 'border-box', maxWidth: '50%' }}>
                <img alt='clouddley power' src={image2} style={{ width: '100%' }} />
            </div>
        </Section>
        <Section2 />
        </>
    )
}


export default Landing