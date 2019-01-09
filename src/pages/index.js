import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>ECE 391 helper site</h1>
    <p> one-stop shopping for all things ECE391!</p>
    <nav class="sidepanel"> 
     <a href ="/isa/">x86</a><br/>
     <a href ="/development/">development</a>
    </nav>
    
  </Layout>
)

export default IndexPage
