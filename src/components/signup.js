import React from 'react'
import styled from 'styled-components'
import logo from '../assets/images/image.webp'
import image from '../assets/images/image2.webp'
import {Link} from 'react-router-dom'

const Div = styled.div`
 padding:70px;
 padding-top:30px;
 width:50%;
`
const Main = styled.main`
background: rgb(226,236,241);
display: flex;
`
const Contain = styled.div`
box-sizing:border-box;
padding: 70px;
height: 500px;
`
const Img = styled.img`
width:100%;
height:100%;
object-fit: contain
`
const Paragraph = styled.p`
font-size: 18px;
margin: 20px 0px;
font-family: montserrat;
`
const Paragraph2 = styled.p`
font-size: 30px;
font-weight: 500;
color:  #0b93d7;
font-family: montserrat;
`

const Styledlink = styled(Link)`
color:  #057FD2;
text-decoration: none;
font-family: montserrat;
`
const Form = styled.form`
margin: 25px 0px;
`

const Input = styled.input`
width: 100%;
padding: 20px;
padding-left: 20px;
font-size: 16px;
font-weight:200;
letter-spacing:2;
 border: 1px solid lightgray;
 margin: 15px 0px;
 border-radius: 5px;
 &:focus {
    outline: none;
    border: 1px solid blue;
 }
`

const Label = styled.label`
font-size: 20px;
font-family: Montserrat;
font-weight:100;
color: #303030;
`

const Signup = () => {
    return(
        <Main>
            <Div>
                <img alt='clouddley' src={logo} />
                <Contain>
                    <Img alt='clouddley power' src={image}  />
                </Contain>
                <Paragraph2>Deploy your services with no hassle!_</Paragraph2>

            </Div>
            <Div style={{background: 'white',overflowY: 'scroll'}}>
                <Paragraph >Already have an account?<Styledlink to='/login'> Sign In</Styledlink></Paragraph> 
                <Paragraph2>Create an Account</Paragraph2>
                <Form>
                    <Label>Full Name </Label>
                    <Input type='text' placeholder='Enter your fullname'/>
                    <Label>Email address</Label>
                    <Input type='email' placeholder='Enter email'/>
                    <Label>Phone number</Label>
                    <select>
                        <option>dfgd</option>
                    </select>
                    <Label>Password </Label>
                    <Input type='password' placeholder='Enter password'/>
                </Form>
            </Div>
        </Main>
    )
}

export default Signup