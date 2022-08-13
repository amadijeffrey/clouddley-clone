import React from 'react'
import styled from 'styled-components'
import connect from '../assets/images/connect.webp'
import create from '../assets/images/create.webp'
import deploy from '../assets/images/deploy.webp'

const Title = styled.h1`
 font-size: 38px;
 line-height: 1.2;
 color: #303030;
 margin: 20px 0px;
`
const Span1 = styled.span`
 color: #bc2e80
`
const Paragraph = styled.p`
 font-size: '16px';
 line-height: 1.5;
 color: #2c2c2c;
`

const Section = styled.section`
padding: 30px;
text-align:center;
`
const Container = styled.div`
width: 30%;
border: 1px solid lightgray;
height:300px;
border-radius: 5px;
background: #f1f1f1;
padding: 30px;
transition: all 0.3s ease;
position:relative;
&:hover {
    background: white;
    box-shadow: -1px 16px 33px 6px rgba(210,215,217,1);
    height:320px;
    width: 31%;
    bottom:10px;
}
`
const OuterContainer = styled.div`
 display:flex;
 justify-content: space-between;
 margin: 50px 0px;
`

const GetStarted = () => {
    return (
        <Section>
            <Title>Get Started In <Span1>Three </Span1>Step!</Title>
            <Paragraph> We provide Cloud Provider features for our customer's software and infrastructure. Our product allows developers and Startup companies to deploy to any cloud <br /> provider from our dashboard in seconds.</Paragraph>
            <OuterContainer>
                <Container>
                    <div><img alt='create' src={create} /></div>
                    <Paragraph style={{fontWeight: 'bold', marginBottom: '10px'}}>Create</Paragraph>
                    <Paragraph>Create your projects with <br /> ease on different cloud <br /> platforms</Paragraph>
                </Container>
                <Container>
                    <img alt='create' src={connect} />
                    <Paragraph style={{fontWeight: 'bold', marginBottom: '10px'}}>Connect</Paragraph>
                    <Paragraph>Connect your Github <br /> repositories</Paragraph>
                </Container>
                <Container>
                    <img alt='create' src={deploy} />
                    <Paragraph style={{fontWeight: 'bold', marginBottom: '10px'}}>Deploy</Paragraph>
                    <Paragraph>Deploy your application <br /> services on the fly</Paragraph>
                </Container>
            </OuterContainer>
        </Section>
    )
}

export default GetStarted