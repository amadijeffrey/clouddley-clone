import React from 'react'
import Header from './header'
import Landing from './landing'
import CloudProvider from './cloudProviders'
import GetStarted from './getStarted'
import Deploy from './deploy'
import Features from './features'
import Footer from './footer'


const Home = () => {
 return (
    <div>
        <Header />
        <Landing />
        <CloudProvider />
        <GetStarted />
        <Deploy />
        <Features />
        <Footer />
    </div>
 )
}

export default Home