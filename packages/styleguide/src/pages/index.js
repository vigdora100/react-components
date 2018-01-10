import React from 'react';

import { Title, Link, HomeHeader } from '../components';

const IndexPage = () => (
  <div>
    <HomeHeader></HomeHeader>
    <Title>Zendesk Garden Design System</Title>
    <p>
      Building products for better customer relationships is complicated, but crafting
      beautifully simple web components doesn’t have to be. Welcome to our curated collection
      of UI goodness, the Zendesk Garden. The Garden is where we grow user interface components
      for Zendesk products.
    </p>
    <p>
      Come in and have a look around, you’ll find components built to respond to a range of user
      input devices, tuned to handle right-to-left layouts, and finessed with just the right touch
      of subtle animation. Bite-sized chunks of web HTML, CSS, and JavaScript are prepared to drop
      into any React-based application.
    </p>
    <p>There isn't any content here yet, but the goal is to have this include
      more documentation related to the design system than JUST our components.</p>
    <ul>
      <li><Link to="/documentation">Documentation</Link></li>
      <li><Link to="/components">Components</Link></li>
    </ul>
  </div>
)

export default IndexPage
