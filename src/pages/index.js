import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>JAMSTACK HACKaThon</h1>
  
    <p>Hackathon template</p>
    <Link to="/page-2/">Page 2</Link>
  </Layout>
)

export default IndexPage
