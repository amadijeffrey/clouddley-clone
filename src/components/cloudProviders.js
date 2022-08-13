import React from 'react'
import aws from '../assets/images/aws.webp'
import azure from '../assets/images/azure.webp'
import ibm from '../assets/images/ibm.webp'
import linode from '../assets/images/linode.webp'
import google from '../assets/images/google.webp'
import styled from 'styled-components'

const Title = styled.h4`
 text-align:center;
 font-size: 20px;
 color: #2c2c2c;
 font-weight: 500;
 margin-top: 30px
`
const Span1 = styled.span`
 color: #bc2e80
`
const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin: 50px 10%;
`

const CloudProvider = () => {
    return (
        <section style={{padding: '30px',zIndex:3,position: 'relative',background: 'white'}}>
            <Title>Available cloud platforms for deploying over <Span1>1000+ </Span1>projects</Title>
            <Container>
                <span><img alt='google cloud platform' src={google}/></span>
                <span><img alt='azure' src={azure}/></span>
                <span><img alt='ibm' src={ibm}/></span>
                <span><img alt='linode' src={linode}/></span>
                <span><img alt='aws' src={aws}/></span>
            </Container>
        </section>
    )
} 

export default CloudProvider