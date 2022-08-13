import React from 'react'
import styled from 'styled-components'
import cost from '../assets/images/cost.webp'
import scale from '../assets/images/scale.webp'
import deploy from '../assets/images/deploy2.webp'
import ddos from '../assets/images/ddos.webp'
import balance from '../assets/images/balance.webp'

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
height:300px;
border-radius: 5px;
padding: 30px;
transition: width 0.3s ease,height 0.3s ease,background 0.5s ease;

&:hover {
    background: #f1f1f1;
    box-shadow: -4px 16px 18px -10px rgba(210,215,217,1);
    height:320px;
    position:relative;
    width: 31%;
    bottom:10px;
}
`
const OuterContainer = styled.div`
 display:flex;
 justify-content: space-between;
 margin: 50px 0px;
`
const Container2 = styled.div`
    display: flex;
    justify-content: center;
`

const Features = () => {
    return (
        <Section>
            <Title>Our <Span1>Features</Span1></Title>
            <OuterContainer>
                <Container>
                    <div><img alt='auto scale' src={scale} /></div>
                    <Paragraph style={{fontWeight: 'bold', marginBottom: '10px'}}>Auto-scaling</Paragraph>
                    <Paragraph> Scale on demand and decrease compute <br /> resource when not in use</Paragraph>
                </Container>
                <Container>
                    <img alt='deploy' src={deploy} />
                    <Paragraph style={{fontWeight: 'bold', marginBottom: '10px'}}>Push to deploy</Paragraph>
                    <Paragraph>Trigger your deployments to any cloud <br /> provider at the click of a button</Paragraph>
                </Container>
                <Container>
                    <img alt='cost' src={cost} />
                    <Paragraph style={{fontWeight: 'bold', marginBottom: '10px'}}>Optimised cost</Paragraph>
                    <Paragraph>Our systems are designed to spin up <br /> only what you need to use thereby <br /> making it cost efficient.</Paragraph>
                </Container>
            </OuterContainer>
            <Container2>
            <Container>
                    <img alt='load balance' src={balance} />
                    <Paragraph style={{fontWeight: 'bold', marginBottom: '10px'}}>Load balancing</Paragraph>
                    <Paragraph> Efficiently distribute incoming network <br /> traffic among backend servers.</Paragraph>
                </Container>
                <Container>
                    <img alt='ddos' src={ddos} />
                    <Paragraph style={{fontWeight: 'bold', marginBottom: '10px'}}>CDN + DDOS attack mitigation</Paragraph>
                    <Paragraph> Increase Performance by redistributing<br /> the service spatially to your end users <br />
                    and Mitigate possible attacks on your <br /> service.
                    </Paragraph>
                </Container>
            </Container2>
        </Section>
    )
}

export default Features