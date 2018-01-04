import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Zendesk Garden React Components</h1>
    <p>Welcome to the new Zendesk Garden documentation website.</p>
    <p>There isn't any content here yet, but the goal is to have this include
      more documentation related to the design system than JUST our components.</p>
    <ul>
      <li><Link to="/documentation">Documentation</Link></li>
      <li><Link to="/components">Components</Link></li>
    </ul>
  </div>
)

export default IndexPage
