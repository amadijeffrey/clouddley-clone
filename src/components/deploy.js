import React from 'react'
import styled from 'styled-components'
import connection from '../assets/images/connection.webp'

const Title = styled.h1`
 font-size: 38px;
 line-height: 1.2;
 color: #303030;
 margin: 20px 0px;
`
const Span = styled.span`
 color: #bc2e80
`
const Section = styled.section`
padding: 30px;
text-align:center;
`
const Paragraph = styled.p`
 font-size: '16px';
 color: #2c2c2c;
 margin-bottom: 20px;
`

const Container = styled.div`
 background: rgb(226,236,241);
 height:400px;
 margin:150px 0px;
 position:relative;
`
const Img = styled.img`
 position: absolute;
 left:100px;
 top:-79px;
`

const Deploy = () => {
    return (
        <Section>
            <Title>How we <Span>Deploy</Span></Title>
            <Paragraph>Connect your github repositiory to our cluster of host platforms using languages like Golang, nodejs, python, php.</Paragraph>
            <Container>
                <Img alt='how we deploy' src={connection} />
            </Container>
        </Section>
    )
}

export default Deploy